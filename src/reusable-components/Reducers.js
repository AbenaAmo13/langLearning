
let userScores = JSON.parse(localStorage.getItem('userScores'));
export const initialState={
    lessonCompleted: false,
    startQuestion: false,
    scores:userScores,
    userPassedLesson: false,
    selectedAnswer: null,
    currentQuestion: 0,
    lessons: [],
    questions: []
};

export function reducer(state, action) {
    switch (action.type) {
        case "SET_LESSON_COMPLETED":
            return {...state, lessonCompleted: action.payload};
        case "SET_START_QUESTION":
            return { ...state, startQuestion: action.payload };
        case "SET_SCORE":
            const userScore = JSON.parse(localStorage.getItem('userScores'));
            const originalScore = userScore[action.payload.score];
            console.log(originalScore)
            userScore[action.payload.score] = action.payload.value + originalScore; // Update the score
            localStorage.setItem('userScores', JSON.stringify(userScore));
            return { ...state, scores: { ...state.scores, [action.payload.score]: userScore[action.payload.score] }};
        case "RESET_SCORE":
            const resetScore = JSON.parse(localStorage.getItem('userScores'));
            resetScore[action.payload.score] = 0;
            localStorage.setItem('userScores', JSON.stringify(resetScore));
            return { ...state, scores: { ...state.scores, [action.payload.score]: 0 }};
        case "SET_USER_PASSED_LESSON":
            return { ...state, userPassedLesson: action.payload };
        case "SET_LESSONS":
            return { ...state, lessons: action.payload };
        case "SET_QUESTIONS":
            return { ...state, questions: action.payload };
        case "RESET_QUESTIONS":
            const resetQuestions = state.questions.map(question => ({
                ...question,
                isAnswered: false
            }));
            return { ...state, questions: resetQuestions };
        case "SET_CURRENT_QUESTION":
            return { ...state, currentQuestion: action.payload };
        case "SET_SELECTED_ANSWER":
            return { ...state, selectedAnswer: action.payload};
        default:
            throw new Error();
    }
}