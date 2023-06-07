import {createContext, useReducer} from 'react';
import {
    basicLessonData,
    basicsCourseSummary,
    basicsKeyWords,
    basicsMCQS,
    trueOrFalseQuestions
} from "../lessons/Basics/BasicsLessonData";
import {
    basicsMCQHealthCare,
    healthCareCourseSummary,
    healthCareKeyWordsData,
    healthCareLessonData,
    MatchingWordsQuestions,
    NHISKeyWordsData,
    NHISLessonData,
    NHISRegistrationForm,
    RegistrationFormKeyWords,
    trueOrFalseQuestionsHealth
} from "../lessons/HealthCare/HealthCareLessonData";
import {
    educationCourseSummary,
    educationKeyWordsSection2,
    educationLessonData,
    educationLessonDataKeyWords,
    educationLessonSection2,
    EducationMatchingWordsQuestions,
    educationQuestionSet2,
    UniversityEducationSupport,
} from "../lessons/Education/EducationLessonData";
import {
    jobsCourseSummary,
    jobsKeyWordsLessonData,
    jobsLessonData,
    jobsLessonTrueOrFalseQuestions
} from "../lessons/Jobs/JobsLessonData";

export const LessonContext = createContext(null);
export const LessonDispatchContext = createContext(null);

export function GlobalStatesProvider({ children }) {
    const lessonStates= {
        BasicLessons: {
            id: "BasicLessons", //id of the lessons
            scores: 0, //stores user score
            userScoreName: "BasicsScore",
            lessons: [basicLessonData, basicsKeyWords, basicsCourseSummary], //lessons
            numberOfCompletedLessons: 0, //used to trigger component rendering
            numberOfCompletedQuestions: 0, //used to trigger component rendering
            lessonCompleted: false, //check if lesson is completed
            questionStarted: false, //check if a question has been started
            questions: [trueOrFalseQuestions, basicsMCQS],//all the questions
            pointsToPassLesson : 65, //points needed to unlock the next course
            keyLessonState: false,
            currentLessonIndex: 0,
            currentQuestionIndex: 0,
            correctNumberOfAnswers: 0
        },
        HealthCareLessons: {
            id: "HealthCareLessons",
            scores: 0,
            userScoreName: "HealthScore",
            lessons:[healthCareLessonData, healthCareKeyWordsData, NHISLessonData, NHISKeyWordsData, NHISRegistrationForm, RegistrationFormKeyWords, healthCareCourseSummary],
            numberOfCompletedLessons: 0,
            numberOfCompletedQuestions: 0,
            lessonCompleted: false,
            questionStarted: false,
            keyLessonState: false,
            questions: [MatchingWordsQuestions, basicsMCQHealthCare, trueOrFalseQuestionsHealth],
            pointsToPassLesson : 80,
            goToSavedProgress: false,
            currentLessonIndex: 0,
            currentQuestionIndex: 0,
            correctNumberOfAnswers: 0
        },
        EducationLessons: {
            id: "EducationLessons",
            scores: 0,
            userScoreName: "EducationScore",
            lessons:[educationLessonData, educationLessonDataKeyWords, educationLessonSection2, educationKeyWordsSection2, UniversityEducationSupport, educationCourseSummary],
            numberOfCompletedLessons: 0,
            numberOfCompletedQuestions: 0,
            lessonCompleted: false,
            keyLessonState: false,
            questionStarted: false,
            questions: [EducationMatchingWordsQuestions, educationQuestionSet2, trueOrFalseQuestionsHealth],
            pointsToPassLesson : 65,
            goToSavedProgress: false,
            currentLessonIndex: 0,
            currentQuestionIndex: 0,
            correctNumberOfAnswers:0
        },
        JobsLesson: {
            id: "JobsLesson",
            scores: 0,
            userScoreName: "JobsScore",
            lessons:[jobsLessonData, jobsKeyWordsLessonData, jobsCourseSummary],
            numberOfCompletedLessons: 0,
            numberOfCompletedQuestions: 0,
            lessonCompleted: false,
            keyLessonState: false,
            questionStarted: false,
            questions: [jobsLessonTrueOrFalseQuestions],
            pointsToPassLesson : 30,
            goToSavedProgress: false,
            currentLessonIndex: 0,
            currentQuestionIndex: 0,
            correctNumberOfAnswers:0
        },
        IdLesson: {
            id: "IdLesson",
            scores: 0,
            userScoreName: "IDScore",
            lessons:[],
            numberOfCompletedLessons: 0,
            numberOfCompletedQuestions: 0,
            lessonCompleted: false,
            keyLessonState: false,
            questionStarted: false,
            questions: [],
            pointsToPassLesson : 30,
            goToSavedProgress: false,
            currentLessonIndex: 0,
            currentQuestionIndex: 0,
            correctNumberOfAnswers:0
        },


    }

    function lessonReducer(lessonState, action) {
        switch (action.type) {
            case "SET_SCORE": {
                const { lesson, value } = action.payload;
                const originalScore = lessonState[lesson].scores
                const updatedScore = originalScore + value;

             /*   const userScore = JSON.parse(localStorage.getItem('userScores'));
                const originalUserScore = userScore[score]
                userScore[score] = originalUserScore + value;
                localStorage.setItem('userScores', JSON.stringify(userScore));*/
                //const resetScore = JSON.parse(localStorage.getItem('userScores'));;

                return {
                    ...lessonState,
                    [lesson]: {
                        ...lessonState[lesson],
                        scores: updatedScore
                    }
                };
            }
            case "RESET_SCORE": {
                const { lesson} = action.payload;
                //const resetScore = JSON.parse(localStorage.getItem('userScores'));
                //resetScore[score] = 0;
               // localStorage.setItem('userScores', JSON.stringify(resetScore));
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

            case "INCREASE_CURRENT_QUESTION_INDEX":{
                const {lesson, value} = action.payload
                const fullLesson = lessonState[lesson]
                const originalCurrentQuestionIndex = fullLesson.currentQuestionIndex
                const updatedLesson ={
                    ...fullLesson,
                    currentQuestionIndex: originalCurrentQuestionIndex + value
                }
                return{
                    ...lessonState,
                    [lesson]: updatedLesson
                }
            }
            case "DECREASE_CURRENT_QUESTION_INDEX":{
                const {lesson, value} = action.payload
                const fullLesson = lessonState[lesson]
                const originalCurrentQuestionIndex = fullLesson.currentQuestionIndex
                const updatedLesson ={
                    ...fullLesson,
                    currentQuestionIndex: originalCurrentQuestionIndex - value
                }
                return{
                    ...lessonState,
                    [lesson]: updatedLesson
                }
            }
            case "INCREASE_CORRECT_NUMBER_OF_ANSWERS":{
                const {lesson, value} = action.payload
                const fullLesson = lessonState[lesson]
                const originalCurrentQuestionIndex = fullLesson.correctNumberOfAnswers
                const updatedLesson ={
                    ...fullLesson,
                    correctNumberOfAnswers: originalCurrentQuestionIndex + value
                }
                return{
                    ...lessonState,
                    [lesson]: updatedLesson
                }
            }
            case "DECREASE_CORRECT_NUMBER_OF_ANSWERS":{
                const {lesson, value} = action.payload
                const fullLesson = lessonState[lesson]
                const originalCurrentQuestionIndex = fullLesson.correctNumberOfAnswers
                const updatedLesson ={
                    ...fullLesson,
                    correctNumberOfAnswers: originalCurrentQuestionIndex - value
                }
                return{
                    ...lessonState,
                    [lesson]: updatedLesson
                }
            }
            case "SET_CURRENT_QUESTION_INDEX":{
                const {lesson, value} = action.payload
                const fullLesson = lessonState[lesson]
                const updatedLesson ={
                    ...fullLesson,
                    currentQuestionIndex: value
                }
                return{
                    ...lessonState,
                    [lesson]: updatedLesson
                }
            }
            case "SET_CORRECT_NUMBER_OF_ANSWERS":{
                const {lesson, value} = action.payload
                const fullLesson = lessonState[lesson]
                const updatedLesson ={
                    ...fullLesson,
                    correctNumberOfAnswers: value
                }
                return{
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

            case "SET_GO_TO_SAVED_PROGRESS":{
                const {lesson, value}= action.payload
                const fullLesson = lessonState[lesson];
                const updatedLesson = {
                    ...fullLesson,
                    goToSavedProgress: value
                };
                //console.log(JSON.stringify(returnValue, null, 4))
                return {
                    ...lessonState,
                    [lesson]: updatedLesson
                }
            }

            case "INCREASE_CURRENT_LESSON_INDEX":{
                const {lesson, value}= action.payload
                const fullLesson = lessonState[lesson];
                const updatedValue = fullLesson.currentLessonIndex + value
                const updatedLesson = {
                    ...fullLesson,
                    currentLessonIndex: updatedValue
                };
                //console.log(JSON.stringify(returnValue, null, 4))
                return {
                    ...lessonState,
                    [lesson]: updatedLesson
                }
            }

            case "DECREASE_CURRENT_LESSON_INDEX":{
                const {lesson, value}= action.payload
                const fullLesson = lessonState[lesson];
                const updatedValue = fullLesson.currentLessonIndex - value
                const updatedLesson = {
                    ...fullLesson,
                    currentLessonIndex: updatedValue
                };
                //console.log(JSON.stringify(returnValue, null, 4))
                return {
                    ...lessonState,
                    [lesson]: updatedLesson
                }
            }


            case "SET_CURRENT_LESSON_INDEX":{
                const {lesson, value}= action.payload
                const fullLesson = lessonState[lesson];
                const updatedLesson = {
                    ...fullLesson,
                    currentLessonIndex: value
                };
                //console.log(JSON.stringify(returnValue, null, 4))
                return {
                    ...lessonState,
                    [lesson]: updatedLesson
                }
            }

            case "RESUME_LESSON":{
                const {lesson, progressKeyName} = action.payload
                const fullLesson = lessonState[lesson];
                const userProgress= JSON.parse(localStorage.getItem(progressKeyName))
                const updatedLesson = {
                    ...fullLesson,
                    numberOfCompletedLessons: userProgress.numberOfCompletedLessons,
                    numberOfCompletedQuestions: userProgress.numberOfCompletedQuestion,
                    lessonCompleted: userProgress.lessonCompleted,
                    currentLessonIndex: userProgress.lastLessonIndex,
                    questionStarted: userProgress.questionStarted,
                    keyLessonState: userProgress.keyLessonState,
                    currentQuestionIndex: userProgress.currentQuestionIndex,
                    correctNumberOfAnswers: userProgress.correctNumberOfAnswers,
                    scores: userProgress.scores
                }
                return {
                    ...lessonState,
                    [lesson]: updatedLesson
                }
            }
            case "SET_KEY_LESSON_STATE":{
                const {lesson, value}= action.payload
                const fullLesson = lessonState[lesson];
                const updatedLesson = {
                    ...fullLesson,
                    keyLessonState: value
                };
                return{
                    ...lessonState,
                    [lesson]:updatedLesson
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












