import { render } from '@testing-library/react';
import App from './App';

describe('Render the app correctly', () => {
  test('should render the app', async () => {
    render(<App />);
    expect(true).toBe(true);
  });
});
