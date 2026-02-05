import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EmergencyTools from '../EmergencyTools';

// Mock alert to avoid window popup in tests
vi.spyOn(window, 'alert').mockImplementation(() => {});

describe('EmergencyTools form validation', () => {
  it('shows validation errors when required fields are empty', async () => {
    const user = userEvent.setup();

    render(<EmergencyTools />);

    const submitButton = screen.getByRole('button', { name: /prepare report/i });
    await user.click(submitButton);

    expect(screen.getByText('Incident type is required')).toBeInTheDocument();
    expect(screen.getByText('Description must be at least 20 characters')).toBeInTheDocument();
  });

  it('submits when form is valid', async () => {
    const user = userEvent.setup();

    render(<EmergencyTools />);

    const typeSelect = screen.getByLabelText(/type of incident/i);
    const description = screen.getByLabelText(/description/i);

    await user.selectOptions(typeSelect, 'fraud');
    await user.type(description, 'This is a valid description with more than twenty characters.');

    const submitButton = screen.getByRole('button', { name: /prepare report/i });
    await user.click(submitButton);

    expect(screen.getByText(/report prepared successfully/i)).toBeInTheDocument();
  });
});
