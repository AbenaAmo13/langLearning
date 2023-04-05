import {createContext, useCallback, useContext, useEffect, useReducer, useState} from "react";
import answeredCorrectly from "../audios/basics/answeredCorrectlyv2.ogg";
import {AudioContext} from "./AudioContext";
export const QuestionContext = createContext();


function QuestionContextProvider({children, state, dispatch}) {
    const [CorrectAudio] = useState(() => new Audio(answeredCorrectly));
    const {playAudio} = useContext(AudioContext);
    const [correctNumberAnswers, setCorrectNumberAnswers] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    useEffect(() => {
        CorrectAudio.preload = 'auto';
        CorrectAudio.load();
    }, [CorrectAudio]);


    const checkAnswer = useCallback((question, answer) => {
        let correctAnswer = question.Answer;
        setSelectedAnswer(answer)
        console.log("Question: " + question)
        console.log("State: " + question.isAnswered)
        if (!question.isAnswered) {
            if (answer === correctAnswer) {
                console.log("It got in here")
                playAudio(CorrectAudio);
                console.log(question.componentScore)
                dispatch({type: "SET_SCORE", payload: {lesson: state.id, score: question.componentScore, value: 10}});
                setCorrectNumberAnswers(correctNumberAnswers + 1)
            }

        }

        question.isAnswered = true;
        // function code
    }, [currentQuestion]);


    const handleNextQuestion = useCallback(() => {
        setSelectedAnswer(null)
        setCurrentQuestion(currentQuestion + 1)
    }, [currentQuestion]);

    const handlePrevQuestion = useCallback(() => {
        setSelectedAnswer(null)
        setCurrentQuestion(currentQuestion - 1)
    }, [currentQuestion]);



    const nextSetOfQuestions = useCallback((questionType)=>{
        if(questionType==="t/f"){
            console.log('I am in here')
            dispatch({ type: "SET_TRUE_OR_FALSE_COMPLETE", payload: {lesson: state.id,completed: true}});
        }else if(questionType==="mcq"){
            dispatch({ type: "SET_MCQ_COMPLETE", payload: {lesson: state.id,completed: true}});

        }
        setCurrentQuestion(0);

    },[])


    return(
        <QuestionContext.Provider value={{ handleNextQuestion, checkAnswer, state, dispatch, nextSetOfQuestions, selectedAnswer, setSelectedAnswer, currentQuestion, correctNumberAnswers, setCurrentQuestion, handlePrevQuestion}}>
            {children}
        </QuestionContext.Provider>
    )
}

export default QuestionContextProvider