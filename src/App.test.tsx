import { render, screen } from '@testing-library/react';
import App from './App';

describe('Render the app correctly', () => {
  test('should render the app', async () => {
    render(<App />);
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });
});
