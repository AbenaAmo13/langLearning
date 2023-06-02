import {useContext, useEffect, useRef, useState} from "react";
import {AudioContext} from "../context/AudioContext";
import LessonAudioPlayer from "./LessonAudioPlayer";
import PointingSide from "../images/rewardImages/downwardpoint.gif";


function CourseIntroduction({state,dispatch, startCoursePromptData, id}) {
    const { isPlaying, stopAudio } = useContext(AudioContext);
    const [enableResume, setEnableResume]= useState(false)
    const continueButtonRef = useRef(null);
    const [shouldDoTutorial, setShouldDoTutorial] = useState(true)
    const [pointingHandPosition, setPointingHandPosition] = useState(0);
    const restartText = "To restart the course, click the restart button with the triangle icon. If you want to continue, click the continue button with the circle icon down below."
    const startText = "To start click the start button with the triangle icon down below."


    function notReady(){
       /*dispatch({ type: "DECREASE_NUMBER_OF_LESSONS_COMPLETED", payload: { lesson: state.id, value: 1 }});*/
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

    function continueProgress(){
        dispatch({ type: "SET_GO_TO_SAVED_PROGRESS", payload: {lesson: state.id,value: true}});
        dispatch({type: "RESUME_LESSON", payload: { lesson: state.id,  progressKeyName:startCoursePromptData.progressKeyName }});
        if(isPlaying){
            stopAudio()
        }
    }

    useEffect(()=>{
        let userProgress = JSON.parse(localStorage.getItem(startCoursePromptData.progressKeyName));
        if(userProgress){
            let savedCourse =  userProgress.savedUserProgress;
            if(savedCourse){
                setEnableResume(true)
            }
        }
        const lockedStatusData = JSON.parse(localStorage.getItem('lockedStatusData'));
        if (lockedStatusData) {
            const keys = Object.keys(lockedStatusData);
            const hasFalseValue = keys
                .filter(key => key !== "Basics")
                .some(key => lockedStatusData[key] === false);

            if (hasFalseValue) {
                // Remove the tutorial arrows as the user doesn't need them anymore
                console.log("At least one value is false aside from Basics");
                setShouldDoTutorial(false)
            } else {
                // Keep the tutorial arrows as the user might need them
                console.log("All values aside from basics are false");
                setShouldDoTutorial(true)
            }
        } else {
            console.log("lockedStatusData not found in localStorage");
        }
    }, [])
    const cardActionTutorialStartOnly = () => {
        return (
            <div className="cardActionTutorialStartOnly">
                <div className="cardAction_hands">
                    <div className="starting_hand">
                        <img
                            src={PointingSide}
                            className={`course_intro hands ${enableResume ? "continue" : "start"}`}
                            alt="pointing hands"
                        />
                    </div>

                    <button className="lesson_buttons icon-buttons start_lesson" onClick={() => ready()}>
                        <p>Start</p>
                        <i className="material-icons" alt="restart icon">change_history</i>
                    </button>
                </div>
                <LessonAudioPlayer
                    englishAudio={startCoursePromptData.EnglishAudio}
                    twiAudio={startCoursePromptData.TwiAudio}
                    englishAudioName={startCoursePromptData.EnglishAudio}
                    twiAudioName={startCoursePromptData.TwiAudio}
                    className="startTutorialButton"
                />
            </div>
        );
    };


    const cardActionResume=()=>{
        return(
            <div className="card_action_flex-grid">
                <div className="card_action_column pointing_hands ">
                    <div>
                        <img
                            src={PointingSide}
                            className={`course_intro hands ${enableResume ? "continue" : "start"}`}
                            alt="pointing hands"
                        />
                    </div>
                    <button r className="lesson_buttons icon-buttons" onClick={() => continueProgress()}>
                        <p>CONTINUE</p>
                        <i className="material-icons" alt="continue icon">radio_button_unchecked</i>
                    </button>
                </div>
                <div className="card_action_column">
                    <button  className="lesson_buttons icon-buttons" onClick={() => ready()}>
                        <p>RESTART</p>
                        <i className="material-icons" alt="restart icon">change_history</i>
                    </button>
                </div>
                <div className="card_action_column">
                    <LessonAudioPlayer
                        englishAudio={startCoursePromptData.EnglishAudio}
                        twiAudio={startCoursePromptData.TwiAudio}
                        englishAudioName={startCoursePromptData.EnglishAudio}
                        twiAudioName={startCoursePromptData.TwiAudio}
                        className="continueTutorialButton"
                    />
                </div>
            </div>
        )

    }



    return(
        <div>
            <div className="card_component_container course_intro">
                <div className="card_component_image" >
                    <img src={startCoursePromptData.quizImage}/>
                </div>
                <div className="course_intro_content_container">
                    <h1 className="card_component_title">{startCoursePromptData.cardTitle}</h1>
                    {startCoursePromptData.cardTextContent.map((cardTextContent, index) => (
                        <p key={index} className="card_component_text course_intro">
                            {cardTextContent}
                        </p>
                    ))}
                    <p className="card_component_text course_intro">{enableResume ? restartText : startText}</p>

                </div>

                    {shouldDoTutorial ? (
                        enableResume ? (
                            cardActionResume()

                        ) : (
                           cardActionTutorialStartOnly()// Remove angle brackets to correctly reference the component

                        )
                    ) : (
                        <div className={`question_prompt_button_divs course_intro`}>
                            <button ref={!enableResume ? continueButtonRef : null} className="lesson_buttons icon-buttons" onClick={() => ready()}>
                                <p>{enableResume ? "RESTART" : "START"}</p>
                                <i className="material-icons" alt="restart icon">change_history</i>
                            </button>
                            {enableResume && (
                                <button ref={enableResume ? continueButtonRef : null} className="lesson_buttons icon-buttons" onClick={() => continueProgress()}>
                                    <p>CONTINUE</p>
                                    <i className="material-icons" alt="continue icon">radio_button_unchecked</i>
                                </button>
                            )}
                        </div>
                    )}
            </div>
        </div>

    )
}

export default CourseIntroduction;