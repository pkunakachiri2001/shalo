// News Service - Integrates with GNews API for real-time cyber law news
// Free tier: 100 requests per hour, unlimited requests per day
// API docs: https://gnews.io

const GNEWS_API_KEY = 'demo'; // Replace with actual API key from gnews.io (free tier available)
const CACHE_DURATION = 30 * 60 * 1000; // Cache for 30 minutes
const CACHE_KEY = 'cyberguard_news_cache';

// Fallback data for when API fails
const FALLBACK_NEWS = [
  {
    id: 'fallback-1',
    category: 'Cyber Crime Alert',
    title: 'UPI Fraud Cases Surge 400% in January 2026',
    date: '2026-01-23',
    summary: 'New sophisticated UPI scams targeting senior citizens and rural users reported across India.',
    content: 'Advanced fraud detection systems deployed across banking sector.',
    tags: ['UPI', 'Financial Fraud', 'Alert'],
    importance: 'critical',
    source: 'CyberGuard Pro'
  },
  {
    id: 'fallback-2',
    category: 'Law Update',
    title: 'Digital India Act 2026 Draft Released for Public Consultation',
    date: '2026-01-20',
    summary: 'Government unveils comprehensive legislation to replace IT Act 2000.',
    content: 'New regulations focus on AI governance and platform accountability.',
    tags: ['Digital Law', 'AI Regulation', 'Policy'],
    importance: 'high',
    source: 'CyberGuard Pro'
  },
  {
    id: 'fallback-3',
    category: 'Court Verdict',
    title: 'Delhi HC: Workplace Cyber Harassment is Criminal Intimidation',
    date: '2026-01-18',
    summary: 'Delhi High Court expands scope of Section 506 IPC to include digital harassment.',
    content: 'Landmark ruling on workplace cyber harassment protections.',
    tags: ['Delhi HC', 'Workplace Safety', 'Harassment'],
    importance: 'high',
    source: 'CyberGuard Pro'
  },
  {
    id: 'fallback-4',
    category: 'Technology',
    title: 'India Launches National Blockchain Framework for Legal Records',
    date: '2026-01-15',
    summary: 'Government introduces blockchain-based system for tamper-proof storage.',
    content: 'All High Courts to integrate with NLBF by June 2026.',
    tags: ['Blockchain', 'Legal Tech', 'Innovation'],
    importance: 'medium',
    source: 'CyberGuard Pro'
  },
  {
    id: 'fallback-5',
    category: 'Technology',
    title: 'AI Deepfake Voice Scams Target Banking Customers',
    date: '2026-01-10',
    summary: 'Criminals using AI-cloned voices of bank managers to trick victims.',
    content: 'Over 2,500 cases reported with advanced fraud techniques.',
    tags: ['AI Crime', 'Deepfake', 'Banking'],
    importance: 'critical',
    source: 'CyberGuard Pro'
  }
];

/**
 * Get cached news if available and not expired
 */
function getCachedNews() {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const { data, timestamp } = JSON.parse(cached);
    const now = Date.now();

    // Check if cache is still valid
    if (now - timestamp < CACHE_DURATION) {
      console.log('📰 Using cached news data');
      return data;
    }

    // Cache expired, remove it
    localStorage.removeItem(CACHE_KEY);
    return null;
  } catch (error) {
    console.error('Cache read error:', error);
    return null;
  }
}

/**
 * Save news to cache
 */
function cacheNews(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      data,
      timestamp: Date.now()
    }));
  } catch (error) {
    console.error('Cache write error:', error);
  }
}

/**
 * Map GNews API response to our news format
 */
function mapGNewsToAppFormat(articles) {
  return articles.slice(0, 10).map((article, index) => {
    // Determine category based on keywords in title/description
    let category = 'Technology';
    const text = `${article.title} ${article.description}`.toLowerCase();

    if (text.includes('crime') || text.includes('fraud') || text.includes('scam') || text.includes('malware')) {
      category = 'Cyber Crime Alert';
    } else if (text.includes('law') || text.includes('regulation') || text.includes('act') || text.includes('court')) {
      category = 'Law Update';
    } else if (text.includes('verdict') || text.includes('ruling') || text.includes('judgment')) {
      category = 'Court Verdict';
    } else if (text.includes('international') || text.includes('global')) {
      category = 'International';
    }

    // Determine importance based on keywords
    let importance = 'medium';
    if (text.includes('critical') || text.includes('alert') || text.includes('urgent') || text.includes('alert')) {
      importance = 'critical';
    } else if (text.includes('important') || text.includes('major')) {
      importance = 'high';
    }

    return {
      id: `gnews-${index}`,
      category,
      title: article.title,
      date: new Date(article.publishedAt).toISOString().split('T')[0],
      summary: article.description || article.title,
      content: article.content || article.description || 'Read more at source.',
      link: article.url,
      image: article.image,
      source: article.source.name,
      tags: [article.source.name, ...extractTags(article.title)],
      importance
    };
  });
}

/**
 * Extract relevant tags from article title
 */
function extractTags(title) {
  const keywords = ['cyber', 'law', 'fraud', 'security', 'digital', 'data', 'privacy', 'ai', 'blockchain'];
  return keywords.filter(keyword => title.toLowerCase().includes(keyword)).slice(0, 2);
}

/**
 * Fetch news from GNews API
 * @param {string} query - Search query (default: 'cyber law')
 * @returns {Promise<Array>} News articles
 */
export async function fetchNewsFromAPI(query = 'cyber law security') {
  try {
    // Check cache first
    const cached = getCachedNews();
    if (cached) return cached;

    // For demo purposes, if using demo key, return fallback
    if (GNEWS_API_KEY === 'demo') {
      console.warn('⚠️ Using demo API key. Get free key from https://gnews.io');
      cacheNews(FALLBACK_NEWS);
      return FALLBACK_NEWS;
    }

    const url = new URL('https://gnews.io/api/v4/search');
    url.searchParams.append('q', query);
    url.searchParams.append('token', GNEWS_API_KEY);
    url.searchParams.append('lang', 'en');
    url.searchParams.append('max', '10');
    url.searchParams.append('sortby', 'publishedAt');

    console.log('📡 Fetching news from GNews API...');
    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.articles || data.articles.length === 0) {
      throw new Error('No articles found');
    }

    const mappedNews = mapGNewsToAppFormat(data.articles);
    cacheNews(mappedNews);
    console.log(`✅ Fetched ${mappedNews.length} news articles from GNews API`);
    return mappedNews;
  } catch (error) {
    console.error('❌ Error fetching from API:', error.message);
    console.log('📦 Using fallback news data');
    cacheNews(FALLBACK_NEWS);
    return FALLBACK_NEWS;
  }
}

/**
 * Get news with optional filtering
 * @param {Object} options - Filter options
 * @returns {Promise<Array>} Filtered news articles
 */
export async function getNews(options = {}) {
  try {
    const news = await fetchNewsFromAPI(options.query);
    let filtered = news;

    // Filter by category if specified
    if (options.category) {
      filtered = filtered.filter(article => article.category === options.category);
    }

    // Filter by importance if specified
    if (options.importance) {
      filtered = filtered.filter(article => article.importance === options.importance);
    }

    // Sort by date (newest first)
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    return filtered;
  } catch (error) {
    console.error('Error in getNews:', error);
    return FALLBACK_NEWS;
  }
}

/**
 * Clear news cache (useful for forcing refresh)
 */
export function clearNewsCache() {
  try {
    localStorage.removeItem(CACHE_KEY);
    console.log('✅ News cache cleared');
  } catch (error) {
    console.error('Error clearing cache:', error);
  }
}

/**
 * Get cache info (for debugging)
 */
export function getCacheInfo() {
  const cached = localStorage.getItem(CACHE_KEY);
  if (!cached) return { cached: false };

  const { timestamp } = JSON.parse(cached);
  const now = Date.now();
  const age = Math.round((now - timestamp) / 1000 / 60); // minutes
  const remaining = Math.round((CACHE_DURATION - (now - timestamp)) / 1000 / 60); // minutes

  return {
    cached: true,
    age: `${age}m`,
    expiresIn: `${remaining}m`,
    autoRefreshAt: new Date(timestamp + CACHE_DURATION).toLocaleTimeString()
  };
}

/**
 * Setup instructions for using real GNews API
 */
export function getSetupInstructions() {
  return `
🚀 To use real news with GNews API:

1. Visit https://gnews.io
2. Click "Register" (free tier available)
3. Copy your API key
4. Update GNEWS_API_KEY in src/services/newsService.js
5. Restart the dev server

Free tier limits:
- 100 requests/hour
- Unlimited requests/day
- News articles refreshed every 30 minutes

Alternative APIs (if GNews down):
- NewsAPI.org: 100/day free
- Guardian API: Unlimited legal news
- Mediastack: 100/month free
  `;
}
