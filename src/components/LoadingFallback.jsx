// LoadingFallback.jsx - Fallback UI while code chunks are loading
export default function LoadingFallback() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      flexDirection: 'column',
      gap: '20px',
      color: '#6b7280'
    }}>
      <div style={{
        width: '50px',
        height: '50px',
        border: '4px solid #e5e7eb',
        borderTop: '4px solid #2563eb',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '16px', fontWeight: '500' }}>Loading...</p>
        <p style={{ fontSize: '12px', marginTop: '5px' }}>Preparing content for you</p>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
