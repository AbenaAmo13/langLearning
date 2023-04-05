import {createContext, useReducer} from 'react';
import {basicLessonData, basicsMCQS, FreeForm, trueOrFalseQuestions} from "../lessons/Basics/BasicsLessonData";

export const LessonContext = createContext(null);
export const LessonDispatchContext = createContext(null);

export function GlobalStatesProvider({ children }) {
    let userScores = JSON.parse(localStorage.getItem('userScores'));
    const lessonStates= {
        BasicLessons: {
            id: "BasicLessons",
            scores: userScores.BasicsScore,
            lessons: basicLessonData,
            lessonCompleted: false,
            questionStarted: false,
            trueOrFalseComplete: false,
            questions: [trueOrFalseQuestions, basicsMCQS, FreeForm]

        }
    }
    function lessonReducer(lessonState, action) {
        //let lessonName = action.payload.lesson;
        switch (action.type) {
            case "SET_SCORE":
                const userScore = JSON.parse(localStorage.getItem('userScores'));
                const originalScore = userScore[action.payload.score];
                console.log(originalScore)
                userScore[action.payload.score] = action.payload.value + originalScore; // Update the score
                localStorage.setItem('userScores', JSON.stringify(userScore));
                return { ...lessonState, [action.payload.lesson]: { ...lessonState[action.payload.lesson], scores: userScore[action.payload.score] } };
            case "RESET_SCORE":
                const resetScore = JSON.parse(localStorage.getItem('userScores'));
                resetScore[action.payload.score] = 0;
                //console.log(resetScore)
                localStorage.setItem('userScores', JSON.stringify(resetScore));
                return { ...lessonState, [action.payload.lesson]: { ...lessonState[action.payload.lesson], scores: 0 } };
            case "SET_LESSON_COMPLETED":
                return { ...lessonState, [action.payload.lesson]: { ...lessonState[action.payload.lesson], lessonCompleted: action.payload.completed } };
            case "SET_QUESTION_STARTED":
                return { ...lessonState, [action.payload.lesson]: { ...lessonState[action.payload.lesson], questionStarted: action.payload.started } };
            case "SET_TRUE_OR_FALSE_COMPLETE":
               let LessonNameTrueOrFalse = action.payload.lesson
                let fullLesson = lessonStates[LessonNameTrueOrFalse]
                const TrueOrFalseUpdateLesson = {
                   ...fullLesson,
                    trueOrFalseComplete: true,
                    lessonCompleted: true,
                }
                return {
                   ...lessonStates,
                    [LessonNameTrueOrFalse]: TrueOrFalseUpdateLesson
                };
                //return { ...lessonState, [action.payload.lesson]: { ...lessonState[action.payload.lesson], trueOrFalseComplete: action.payload.completed } };
            case "RESET_QUESTION":
                const lessonName = action.payload.lesson;
                const questionIndex = action.payload.index;
                const lesson = lessonStates[lessonName];
                const activeQuestion = lesson.questions[questionIndex];
                const updatedQuestions = activeQuestion.map((question) => ({
                    ...question,
                    isAnswered: false,
                }));
                console.log(updatedQuestions)
                const updatedLesson = {
                    ...lesson,
                    questions: [...lesson.questions],
                    lessonCompleted: true
                };
                console.log(updatedLesson)
                updatedLesson.questions[questionIndex] = updatedQuestions;
                return {
                    ...lessonStates,
                    [lessonName]: updatedLesson,
                };
            default:
                throw new Error();
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












