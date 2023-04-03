
import {useContext, useState, useReducer, useEffect} from "react";
import {AudioContext} from "../../context/AudioContext";
import AudioPlayer from "../../reusable-components/LessonAudioPlayer";
import introductionAudio from "../../audios/testing.mp3"
import Lessons from "../../reusable-components/Lessons"
import answeredCorrectly from "../../audios/basics/answeredCorrectlyv2.ogg"
import QuestionsTrueOrFalse from "../../reusable-components/TrueOrFalseQuestions";
import {basicLessonData, trueOrFalseQuestions} from "./BasicsLessonData"
import { initialState, reducer } from '../../reusable-components/Reducers';
import quizImage from "../../images/quiz.png"


function Basics() {
    const [lessonStates, dispatch] = useReducer(reducer, initialState);
    useEffect(()=>{
        dispatch({ type: "SET_LESSONS", payload: basicLessonData });
        dispatch({ type: "SET_QUESTIONS", payload: trueOrFalseQuestions});

    }, [])

    if(!lessonStates.lessonCompleted){
        return(
            <Lessons state={lessonStates} dispatch={dispatch} />
        )
    }else if(lessonStates.lessonCompleted && !lessonStates.startQuestion){
        return(
            <QuestionPrompt state={lessonStates} dispatch={dispatch}  />
        )
    }else if(lessonStates.lessonCompleted && lessonStates.startQuestion){
        return(
            <QuestionsTrueOrFalse state={lessonStates} dispatch={dispatch}  />
        )
    }
}

function QuestionPrompt({dispatch}) {
    function notReady(){
        dispatch({ type: "SET_LESSON_COMPLETED", payload: false });
    }
    function ready(){
        dispatch({ type: "SET_START_QUESTION", payload: true });
        dispatch({type:"RESET_SCORE",  payload: { score: "BasicsScore"}})
        dispatch({type:"RESET_QUESTIONS"})
    }
    return(
        <div className="questionPending navCard">
            <div className="cardmedia">
                <img src={quizImage}/>
            </div>
            <div>
                <h2 className="question_title"> Ready for the questions?</h2>
                <AudioPlayer englishAudio={introductionAudio} twiAudio={introductionAudio}/>
            </div>

            <div className="question_buttons">
                <button  className="lesson_buttons icon-buttons" onClick={()=>ready()}>
                    <p>Yes</p>
                    <i className="material-icons" alt="help icon">thumb_up_alt</i>
                </button>
                <button  className="lesson_buttons icon-buttons" onClick={()=>notReady()}>
                    <p>No</p>
                    <i className="material-icons" alt="help icon">thumb_down_off_alt</i>
                </button>
            </div>

        </div>

    )
}



export default Basics;