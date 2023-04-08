import {createContext, useEffect, useReducer} from 'react';
import {basicLessonData, basicsMCQS, FreeForm, trueOrFalseQuestions} from "../lessons/Basics/BasicsLessonData";

export const LessonContext = createContext(null);
export const LessonDispatchContext = createContext(null);

export function GlobalStatesProvider({ children }) {
    const lessonStates= {
        BasicLessons: {
            id: "BasicLessons",
            scores: 0,
            lessons: basicLessonData,
            lessonCompleted: false,
            questionStarted: false,
            trueOrFalseComplete: false,
            firstQuestionTypeRendered: "trueorfalse", //The first question.
            mcqComplete: false,
            questions: [trueOrFalseQuestions, basicsMCQS],
            pointsToPassLesson : 65
        }
    }

    function lessonReducer(lessonState, action) {
        switch (action.type) {
            case "SET_SCORE": {
                const { lesson, score, value } = action.payload;
                const userScore = JSON.parse(localStorage.getItem('userScores'));
                const originalScore = userScore[score];
                const updatedScore = originalScore + value;
                userScore[score] = updatedScore;
                localStorage.setItem('userScores', JSON.stringify(userScore));
                return {
                    ...lessonState,
                    [lesson]: {
                        ...lessonState[lesson],
                        scores: updatedScore
                    }
                };
            }
            case "RESET_SCORE": {
                const { lesson, score } = action.payload;
                const resetScore = JSON.parse(localStorage.getItem('userScores'));
                resetScore[score] = 0;
                localStorage.setItem('userScores', JSON.stringify(resetScore));
                return {
                    ...lessonState,
                    [lesson]: {
                        ...lessonState[lesson],
                        scores: 0
                    }
                };
            }
            case "SET_LESSON_COMPLETED": {
                const { lesson, completed } = action.payload;
                return {
                    ...lessonState,
                    [lesson]: {
                        ...lessonState[lesson],
                        lessonCompleted: completed
                    }
                };
            }
            case "SET_QUESTION_STARTED": {
                const { lesson, started } = action.payload;
                return {
                    ...lessonState,
                    [lesson]: {
                        ...lessonState[lesson],
                        questionStarted: started
                    }
                };
            }
            case "SET_TRUE_OR_FALSE_COMPLETE": {
                const { lesson } = action.payload;
                const fullLesson = lessonState[lesson];
                const updatedLesson = {
                    ...fullLesson,
                    trueOrFalseComplete: true,
                };
                return {
                    ...lessonState,
                    [lesson]: updatedLesson
                };
            }
            case "SET_MCQ_COMPLETE": {
                console.log("The lesson state is" + lessonState)
                const { lesson } = action.payload;
                const fullLesson = lessonState[lesson];
                const updatedLesson = {
                    ...fullLesson,
                    mcqComplete: true
                };
                console.log(updatedLesson)
                return {
                    ...lessonState,
                    [lesson]: updatedLesson
                };
            }
            case "RESET_QUESTION": {
                const { lesson, index } = action.payload;
                const fullLesson = lessonState[lesson];
                const activeQuestion = fullLesson.questions[index];
                const updatedQuestions = activeQuestion.map((question) => ({
                    ...question,
                    isAnswered: false,
                }));
                const updatedLesson = {
                    ...fullLesson,
                    questions: [...fullLesson.questions],
                };
                updatedLesson.questions[index] = updatedQuestions;
                return {
                    ...lessonState,
                    [lesson]: updatedLesson,
                };
            }
            case "RESET_LESSON":{
                const {lesson} = action.payload;
                const fullLesson = lessonStates[lesson];
                const updatedLesson ={
                    ...fullLesson
                }
                return {
                    ...lessonState,
                    [lesson]: updatedLesson
                }
            }
            default:
                throw new Error(`Unhandled action type: ${action.type}`);
        }
    }

    const [lessons, dispatch] = useReducer( lessonReducer, lessonStates);

    return (
        <LessonContext.Provider value={lessons}>
            <LessonDispatchContext.Provider value={dispatch}>
                {children}
            </LessonDispatchContext.Provider>
        </LessonContext.Provider>
    );

}












