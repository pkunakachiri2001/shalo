import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../ErrorBoundary';

function ProblemChild() {
  throw new Error('Test error');
}

describe('ErrorBoundary', () => {
  it('renders fallback UI when a child throws', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>
    );

    expect(screen.getByText('⚠️ Something Went Wrong')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /go back to home/i })).toBeInTheDocument();

    consoleSpy.mockRestore();
  });
});
