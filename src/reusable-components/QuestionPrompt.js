import CardComponent from "./CardComponent";
import LessonAudioPlayer from "./LessonAudioPlayer";
import {useContext} from "react";
import {AudioContext} from "../context/AudioContext";

function QuestionPrompt({state,dispatch, questionPromptData}) {
    const {playAudio, isPlaying, activeName } = useContext(AudioContext);

    function notReady(){
      dispatch({ type: "SET_LESSON_COMPLETED", payload: { lesson: state.id, completed: false }});
    }
    function ready(){
        if(questionPromptData.questionType ==="trueorfalse"){
            dispatch({ type: "RESET_QUESTION", payload: { lesson: state.id, index: 0}});
            if(state.firstQuestionTypeRendered === "trueorfalse"){
                console.log( questionPromptData.questions)
                dispatch({type:"RESET_SCORE",  payload: { lesson: state.id, score: questionPromptData.questions.componentScore}})
            }
            //console.log(state.questions)
        }else if(questionPromptData.questionType==="mcqs"){
            dispatch({ type: "RESET_QUESTION", payload: { lesson: state.id, index: 1}});
            if(state.firstQuestionTypeRendered === "mcqs"){
                dispatch({type:"RESET_SCORE",  payload: { lesson: state.id, score: questionPromptData.questions.componentScore}})
            }
        }
        dispatch({ type: "SET_QUESTION_STARTED", payload: { lesson: state.id, started: true }});
    }

    return(
        <div>
            <div className="card_component_container purpleCardOutline">
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
                <div className="card_audio_controls">
                    <div className="volume_button_divs">
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

                    </div>
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

    )
}

export default QuestionPrompt;