import {act, render, screen} from '@testing-library/react';
import App from './App.jsx';
import {userEvent} from '@testing-library/user-event';

describe('App', () => {
    it('should allow act', async () => {
        render(<App />);

        await act(async () => {
            await userEvent.type(screen.getByRole('textbox'), '1');
        });

        expect(screen.getByRole('textbox')).toHaveValue('03/26/20241');
    });

    it('should allow act without date picker', async () => {
        render(<App />);

        await act(async () => {
            await userEvent.click(screen.getByText(/count is 0/i));
        });

        expect(screen.getByText(/count is 1/i)).toBeDefined();
    });
});