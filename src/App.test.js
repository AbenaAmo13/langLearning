import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QuestionContextProvider } from './QuestionContext'; // Import the QuestionContextProvider
import { AudioContext } from './AudioContext'; // Import the AudioContext
import App from './App';

test('renders cards ', () => {
  render(<App />);
  const courseOutlineCards = screen.getByText('Course Outline');
  expect(courseOutlineCards).toBeInTheDocument();

 /* const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();*/
});


// Mock the AudioContext values and functions
// Mock the necessary context values and functions


// Test the checkAnswer function
test('checkAnswer correctly updates state and dispatches actions', () => {

});
