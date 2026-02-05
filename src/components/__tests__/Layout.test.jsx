import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Layout from '../Layout';

vi.mock('../ChatbotWidget', () => ({ default: () => <div data-testid="chatbot" /> }));
vi.mock('../Search', () => ({ default: () => <div data-testid="search" /> }));
vi.mock('../ThemeToggle', () => ({ default: () => <div data-testid="theme-toggle" /> }));
vi.mock('../Breadcrumbs', () => ({ default: () => <div data-testid="breadcrumbs" /> }));

describe('Layout navigation', () => {
  it('toggles the main navigation menu', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/']}>
        <Layout>
          <div>Content</div>
        </Layout>
      </MemoryRouter>
    );

    const toggleButton = screen.getByRole('button', { name: /open navigation menu/i });
    const mainNav = screen.getByRole('navigation', { name: /main navigation/i });

    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
    expect(mainNav).not.toHaveClass('nav-open');

    await user.click(toggleButton);

    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
    expect(mainNav).toHaveClass('nav-open');
  });
});
