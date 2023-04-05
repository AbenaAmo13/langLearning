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
        if (!question.isAnswered) {
            if (answer === correctAnswer) {
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
        // function code
        console.log("It is here")
        setSelectedAnswer(null)
        setCurrentQuestion(currentQuestion + 1)
    }, [currentQuestion]);


    const nextSetOfQuestions = useCallback((questionType)=>{
        console.log("action_happening")
        if(questionType==="t/f"){
            console.log('I am in here')
            dispatch({ type: "SET_TRUE_OR_FALSE_COMPLETE", payload: {lesson: state.id,completed: true}});

        }

    },[])


    return(
        <QuestionContext.Provider value={{ handleNextQuestion, checkAnswer, state, dispatch, nextSetOfQuestions, selectedAnswer, currentQuestion, correctNumberAnswers}}>
            {children}
        </QuestionContext.Provider>
    )
}

export default QuestionContextProvider