import React, {useContext} from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import QuestionContextProvider, { QuestionContext } from './context/QuestionsContext';
import AudioContextProvider from "./context/AudioContext";
import RewardsContextProvider from "./context/RewardsContext";
import {userCoinValidationCheck}from "./validation"

const MockQuestionContext = ({ children }) => {
  // Define mock values for the context state and actions
  const mockState = { id: 1, questions: [], /* other state properties */ };
  const mockDispatch = jest.fn();

  return (
      <RewardsContextProvider>
          <AudioContextProvider>
            <QuestionContextProvider state={mockState} dispatch={mockDispatch}>
              {children}
            </QuestionContextProvider>
        </AudioContextProvider>
      </RewardsContextProvider>
  );
};
// TestComponent is your actual component that consumes the QuestionContext
const TestComponent = () => {
  const { checkAnswer } = useContext(QuestionContext);
  // Mock the necessary dependencies
  const stopAnswerAudio = jest.fn();
  const playAudio = jest.fn();
  // Mock the question and answer values
  const question = { Question: 'Question 1', Answer: 'True', isAnswered: false };
  const answer = 'True';
  const id = 0;

  // Call the checkAnswer function with mock values
  checkAnswer(question, answer, id,  { stopAnswerAudio, playAudio });

  // Add any necessary assertions if needed

  return <div>Test Component</div>;
};



test('should update question state and dispatch actions correctly', () => {
  // Render the test component within the mock context
  render(
        <MockQuestionContext>
          <TestComponent />
        </MockQuestionContext>
  );
});


test('valid input should return true', () => {
  const input = 123
  expect(userCoinValidationCheck(input)).toBe(true);
});

test('invalid input should return false', () => {
  const input = 7.89;
  expect(userCoinValidationCheck(input)).toBe(false);
});
test('invalid input should return false', () => {
  const input = -10;
  expect(userCoinValidationCheck(input)).toBe(false);
});



test('renders cards ', () => {
  render(<App />);
  const courseOutlineCards = screen.getByText('Course Outline');
  const healthCare = screen.getByText('Ghana Health Service');
  const educationService = screen.getByText('Ghana Education Service');
  expect(courseOutlineCards).toBeInTheDocument();
  expect(healthCare).toBeInTheDocument();
  expect(educationService).toBeInTheDocument();
});




// Test the checkAnswer function
test('checkAnswer correctly updates state and dispatches actions', () => {

});
