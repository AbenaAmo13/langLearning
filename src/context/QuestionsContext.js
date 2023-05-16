import {createContext, useCallback, useContext, useEffect, useReducer, useState} from "react";
import answeredCorrectly from "../audios/basics/answeredCorrectlyv2.ogg";
import {AudioContext} from "./AudioContext";
export const QuestionContext = createContext();


function QuestionContextProvider({children, state, dispatch}) {
    const [CorrectAudio] = useState(() => new Audio(answeredCorrectly));
    const {playAudio, isPlaying, stopAudio} = useContext(AudioContext);
    const [correctNumberAnswers, setCorrectNumberAnswers] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    useEffect(() => {
        CorrectAudio.preload = 'auto';
        CorrectAudio.load();
    }, [CorrectAudio]);

    useEffect(()=>{
        if(isPlaying){
            stopAudio()
        }

    }, [currentQuestion])



    const checkAnswer = useCallback((question, answer, id) => {
        let correctAnswer = question.Answer;
        setSelectedAnswer(answer)
        console.log("Question: " + question.Question)
        console.log("Answer is: " + question.Answer)
        console.log("State: " + question.isAnswered)
        if (!question.isAnswered) {
            if (answer === correctAnswer) {
                stopAudio()
                playAudio(CorrectAudio, question.TwiAudio);
                console.log(question.componentScore)
                dispatch({type: "SET_SCORE", payload: {lesson: state.id, score: question.componentScore, value: 10}});
                setCorrectNumberAnswers(correctNumberAnswers + 1)
            }
        }
        dispatch({ type: "SET_QUESTION_IS_ANSWERED", payload: { lesson: state.id, questionIndex: id, currentQuestionIndex: currentQuestion}});
        //question.isAnswered = true;
        // function code
    }, [currentQuestion]);


    const handleNextQuestion = useCallback(() => {
        setSelectedAnswer(null)
        setCurrentQuestion(currentQuestion + 1)
        if(isPlaying){
            stopAudio()
        }
    }, [currentQuestion]);

    const handlePrevQuestion = useCallback(() => {
        setSelectedAnswer(null)
        setCurrentQuestion(currentQuestion - 1)
        console.log("BACK BUTTON AND IS PLAYING")
        console.log(isPlaying)
    }, [currentQuestion]);



    const nextSetOfQuestions = useCallback((questionType)=>{
       // alert(isPlaying)
        if(isPlaying){
            //alert(isPlaying)
            stopAudio()
        }
    /*    if(questionType==="t/f"){
            //console.log('I am in here')
            dispatch({ type: "SET_TRUE_OR_FALSE_COMPLETE", payload: {lesson: state.id,completed: true}});
        }else if(questionType==="mcq"){
            dispatch({ type: "SET_MCQ_COMPLETE", payload: {lesson: state.id,completed: true}});
        }*/

        dispatch({ type: "SET_QUESTION_STARTED", payload: {lesson: state.id,started: false}});
        dispatch({ type: "INCREASE_NUMBER_OF_QUESTIONS_COMPLETED", payload: {lesson: state.id,value: 1}});
        setCurrentQuestion(0);
        setCorrectNumberAnswers(0)
    },[])


    return(
        <QuestionContext.Provider value={{ handleNextQuestion, checkAnswer, state, dispatch, nextSetOfQuestions, selectedAnswer, setSelectedAnswer, currentQuestion, correctNumberAnswers, setCurrentQuestion, handlePrevQuestion, isPlaying}}>
            {children}
        </QuestionContext.Provider>
    )
}

export default QuestionContextProvider