import {useContext, useEffect} from "react";
import {AudioContext} from "../context/AudioContext";
import LessonAudioPlayer from "./LessonAudioPlayer";
import PointingSide from "../images/rewardImages/pointinghand2.gif";

function CourseIntroduction({state,dispatch, startCoursePromptData, id}) {
    const { isPlaying, stopAudio } = useContext(AudioContext);

    function notReady(){
       /* dispatch({ type: "DECREASE_NUMBER_OF_LESSONS_COMPLETED", payload: { lesson: state.id, value: 1 }});*/

        window.location.href= "/"
        dispatch({ type: "SET_LESSON_COMPLETED", payload: { lesson: state.id, completed: false }});
        if(isPlaying){
            stopAudio()
        }
    }

    function ready(){
        dispatch({ type: "INCREASE_NUMBER_OF_LESSONS_COMPLETED", payload: {lesson: state.id,value: 1}});
        if(isPlaying){
            stopAudio()
        }

        /* if(id===0){
             dispatch({type:"RESET_SCORE",  payload: { lesson: state.id}})
         }
         dispatch({ type: "RESET_QUESTION", payload: { lesson: state.id, index: id}});
         dispatch({ type: "SET_QUESTION_STARTED", payload: { lesson: state.id, started: true }});
         if(isPlaying){
             stopAudio()
         }*/
    }



    return(
        <div>
            <div className="card_component_container">
                <div className="card_component_image" >
                    <img src={startCoursePromptData.quizImage}/>
                </div>
                <div className="card_component_content">
                    <h3 className="card_component_title">{startCoursePromptData.cardTitle}</h3>
                    {startCoursePromptData.cardTextContent.map((cardTextContent, index) => (
                        <p key={index} className="card_component_text">
                            {cardTextContent}
                        </p>
                    ))}
                </div>
                <div className="question_button_divs">
                    <LessonAudioPlayer
                        englishAudio={startCoursePromptData.EnglishAudio}
                        twiAudio={startCoursePromptData.TwiAudio}
                        englishAudioName={startCoursePromptData.EnglishAudio}
                        twiAudioName={startCoursePromptData.TwiAudio}
                    />
                    <div className="question_prompt_button_divs">
                        {state.id==="BasicLessons"&&(
                            <img
                                src={PointingSide}
                                className="pointing_hands top_app_pointing"
                                alt="pointing hands"
                            />
                        )}
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
            </div>
        </div>

    )
}

export default CourseIntroduction;