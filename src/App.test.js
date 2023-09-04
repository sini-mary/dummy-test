import { render, screen } from '@testing-library/react';
import App from './App';

test('renders specific content from App component', () => {
  render(<App />);
  
  // Replace 'Learn React' with the actual text or element you're testing for.
  const contentElement = screen.getByText('Your Actual Content Here');
  
  // Assert the presence of the content in the rendered component.
  expect(contentElement).toBeInTheDocument();
});

