import {useContext, useEffect} from "react";
import {AudioContext} from "../context/AudioContext";
import LessonAudioPlayer from "./LessonAudioPlayer";
import PointingSide from "../images/rewardImages/pointinghand2.gif";

function QuestionPrompt({state,dispatch, questionPromptData, id}) {
    const {playAudio, isPlaying, activeName, stopAudio } = useContext(AudioContext);

    function notReady(){
        dispatch({ type: "DECREASE_NUMBER_OF_LESSONS_COMPLETED", payload: { lesson: state.id, value: 1 }});

        dispatch({ type: "SET_LESSON_COMPLETED", payload: { lesson: state.id, completed: false }});
        if(isPlaying){
            stopAudio()
        }
    }
    function ready(){
        if(id===0){
            dispatch({type:"RESET_SCORE",  payload: { lesson: state.id}})
        }
        dispatch({ type: "RESET_QUESTION", payload: { lesson: state.id, index: id}});
        dispatch({ type: "SET_QUESTION_STARTED", payload: { lesson: state.id, started: true }});
        if(isPlaying){
            stopAudio()
        }
    }



    return(
        <div>
            <div className="card_component_container">
                <div className="card_component_image" >
                    <img src={questionPromptData.quizImage}/>
                </div>
                <div className="card_component_content">
                    <h3 className="card_component_title">{questionPromptData.cardTitle}</h3>
                    {questionPromptData.cardTextContent.map((cardTextContent, index) => (
                        <p key={index} className="card_component_text">
                            {cardTextContent.text}
                        </p>
                    ))}
                </div>
                <div className="question_button_divs">
                  {/*  <div className="volume_button_divs">
                        <div>🇬🇭</div>
                        <button
                            className={`question_prompt_volume_icons   ${activeName === questionPromptData.TwiTitle ? 'audio_active' : ''}`}
                            onClick={() => {
                                playAudio(new Audio(questionPromptData.TwiAudio), questionPromptData.TwiTitle);
                            }}
                        >
                            <i className="material-icons" alt="help icon">
                                volume_up
                            </i>
                        </button>
                    </div>

                    <div className="volume_button_divs">
                        <div>🇬🇧</div>
                        <div>
                            <button
                                className={`question_prompt_volume_icons   ${activeName === questionPromptData.cardTitle ? 'audio_active' : ''}`}
                                onClick={() => {
                                    playAudio(new Audio(questionPromptData.EnglishAudio), questionPromptData.cardTitle);
                                    //onEnglishClick();
                                }}
                            >
                                <i className="material-icons" alt="help icon">
                                    volume_up
                                </i>
                            </button>
                        </div>

                    </div>*/}

                    <LessonAudioPlayer
                        englishAudio={questionPromptData.EnglishAudio}
                        twiAudio={questionPromptData.TwiAudio}
                        englishAudioName={questionPromptData.EnglishAudio}
                        twiAudioName={questionPromptData.TwiAudio}


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

export default QuestionPrompt;