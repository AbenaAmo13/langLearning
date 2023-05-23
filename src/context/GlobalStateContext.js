import {createContext, useEffect, useReducer, useState} from 'react';
import {
    basicLessonData, basicsCourseSummary,
    basicsKeyWords,
    basicsMCQS,
    trueOrFalseQuestions
} from "../lessons/Basics/BasicsLessonData";
import {basicsMCQHealthCare, healthCareKeyWordsData, healthCareLessonData, MatchingWordsQuestions, NHISKeyWordsData, NHISLessonData,
    NHISRegistrationForm,
    RegistrationFormKeyWords,
    trueOrFalseQuestionsHealth,
    healthCareCourseSummary
} from "../lessons/HealthCare/HealthCareLessonData";
import {
    educationLessonData,
    educationLessonDataKeyWords,
    EducationMatchingWordsQuestions
} from "../lessons/Education/EducationLessonData";

export const LessonContext = createContext(null);
export const LessonDispatchContext = createContext(null);

export function GlobalStatesProvider({ children }) {
    const lessonStates= {
        BasicLessons: {
            id: "BasicLessons", //id of the lessons
            scores: 0, //stores user score
            lessons: [basicLessonData, basicsKeyWords, basicsCourseSummary], //lessons
            numberOfCompletedLessons: 0, //used to trigger component rendering
            numberOfCompletedQuestions: 0, //used to trigger component rendering
            lessonCompleted: false, //check if lesson is completed
            questionStarted: false, //check if a question has been started
            questions: [trueOrFalseQuestions, basicsMCQS],//all the questions
            pointsToPassLesson : 65 //points needed to unlock the next course
        },
        HealthCareLessons: {
            id: "HealthCareLessons",
            scores: 0,
            lessons:[healthCareLessonData, healthCareKeyWordsData, NHISLessonData, NHISKeyWordsData, NHISRegistrationForm, RegistrationFormKeyWords, healthCareCourseSummary],
            numberOfCompletedLessons: 0,
            numberOfCompletedQuestions: 0,
            lessonCompleted: false,
            questionStarted: false,
            questions: [MatchingWordsQuestions, basicsMCQHealthCare, trueOrFalseQuestionsHealth],
            pointsToPassLesson : 80
        },
        EducationLessons: {
            id: "EducationLessons",
            scores: 0,
            lessons:[educationLessonData, educationLessonDataKeyWords, NHISLessonData, NHISKeyWordsData, NHISRegistrationForm, RegistrationFormKeyWords, healthCareCourseSummary],
            numberOfCompletedLessons: 0,
            numberOfCompletedQuestions: 0,
            lessonCompleted: false,
            questionStarted: false,
            questions: [EducationMatchingWordsQuestions, basicsMCQHealthCare, trueOrFalseQuestionsHealth],
            pointsToPassLesson : 65
        },

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
            case "SET_QUESTION_IS_ANSWERED": {
                const { lesson, questionIndex, currentQuestionIndex } = action.payload;
                const fullLesson = lessonState[lesson];
                //console.log("Full lesson: " + fullLesson)
                const activeQuestion = fullLesson.questions[questionIndex];
                console.log("Active question" + activeQuestion)
                const mainCurrentQuestion = activeQuestion[currentQuestionIndex]
                //const updatedQuestions = mainCurrentQuestion.find(index=> index===questionIndex)
                mainCurrentQuestion.isAnswered = true
                activeQuestion[currentQuestionIndex] = mainCurrentQuestion
                //console.log("Updated Main Questions" + JSON.stringify(mainCurrentQuestion, null, 4))
                //console.log("Updated question" + updatedQuestions)
                const updatedLesson = {
                    ...fullLesson,
                    questions: [...fullLesson.questions],
                };
                //console.log("Return value: " + JSON.stringify(returnValue, null, 4))
                updatedLesson.questions[questionIndex] = activeQuestion;
                return {
                    ...lessonState,
                    [lesson]: updatedLesson,
                };
            }
            case "RESET_QUESTION": {
                const { lesson, index } = action.payload;
                const fullLesson = lessonState[lesson];
                //console.log("Full lesson: " + fullLesson)
                const activeQuestion = fullLesson.questions[index];
                //console.log("Active question" + activeQuestion)
                const updatedQuestions = activeQuestion.map((question) => ({
                    ...question,
                    isAnswered: false,
                }));
                //console.log("Updated question" + updatedQuestions)
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
            case "INCREASE_NUMBER_OF_LESSONS_COMPLETED":{
                const {lesson, value} = action.payload;
                const fullLesson = lessonState[lesson];
                const originalNumberOfLessons = fullLesson.numberOfCompletedLessons
                console.log(originalNumberOfLessons)
                const updatedLesson = {
                    ...fullLesson,
                    numberOfCompletedLessons: originalNumberOfLessons + value,
                };
                return {
                    ...lessonState,
                    [lesson]: updatedLesson
                }
            }
            case "INCREASE_NUMBER_OF_QUESTIONS_COMPLETED":{
                const {lesson, value} = action.payload;
                const fullLesson = lessonState[lesson];
                const originalNumberOfQuestions = fullLesson.numberOfCompletedQuestions
                console.log(originalNumberOfQuestions)
                const updatedLesson = {
                    ...fullLesson,
                    numberOfCompletedQuestions: originalNumberOfQuestions + value,
                };
                return {
                    ...lessonState,
                    [lesson]: updatedLesson
                }
            }
            case "DECREASE_NUMBER_OF_QUESTIONS_COMPLETED":{
                const {lesson, value} = action.payload;
                const fullLesson = lessonState[lesson];
                const originalNumberOfQuestions = fullLesson.numberOfCompletedQuestions
                console.log(originalNumberOfQuestions)
                const updatedLesson = {
                    ...fullLesson,
                    numberOfCompletedQuestions: originalNumberOfQuestions - value,
                };
                return {
                    ...lessonState,
                    [lesson]: updatedLesson
                }
            }
            case "DECREASE_NUMBER_OF_LESSONS_COMPLETED":{
                const {lesson, value} = action.payload;
                const fullLesson = lessonState[lesson];
                const originalNumberOfLessons = fullLesson.numberOfCompletedLessons
                console.log(originalNumberOfLessons)
                const updatedLesson = {
                    ...fullLesson,
                    numberOfCompletedLessons: originalNumberOfLessons - value,
                };
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












