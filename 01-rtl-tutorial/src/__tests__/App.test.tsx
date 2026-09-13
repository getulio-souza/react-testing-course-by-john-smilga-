import { render, screen } from '@testing-library/react';
// Note: technically already available globally
import { test, expect } from 'vitest';
import App from '../App';

describe("app component should render", ()=> {
  // Test if heading renders correctly
  test('should render heading with correct text', () => {
    // Render the App component
    render(<App />);
  
    // Log the DOM tree for debugging
    screen.debug();
  
    // Find heading by its text content
    const heading = screen.getByText('React Testing Library');
  
    // Verify heading exists in document
    expect(heading).toBeInTheDocument();
  });
  
  test("this test will pass", ()=> {
    console.log('olha o teste')
  })


  test("it should render the paragrahy", ()=> {
    render(<App/>)

    const p = screen.getByRole("paragraph")
    expect(p).toBeInTheDocument()
  })

  test("expect 2 + 2 = 4", ()=> {
    expect(2 + 2).toBe(4)
  })
})

