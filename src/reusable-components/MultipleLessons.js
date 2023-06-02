import {useContext, useEffect, useReducer, useState} from "react";

import AudioPlayer from "../reusable-components/LessonAudioPlayer";
import {AudioContext} from "../context/AudioContext";
import {useNavigate} from "react-router";
import PointingSide from "../images/rewardImages/pointinghand2.gif";
import leftPoint from "../images/rewardImages/leftPoint.gif";

function Lessons({state, dispatch, lessonId}){
    const { isPlaying, stopAudio, isEnded, audioRef,setIsEnding} = useContext(AudioContext);
    const currentLesson = state.lessons[lessonId]
    //const [currentIndex, setCurrentIndex] = useState(state.currentLessonIndex);
    const currentIndex= state.currentLessonIndex
    const [shouldRenderNextToAudioIcons, setShouldRenderNextToAudioIcon] = useState(true)
    const [shouldDoTutorial, setShouldDoTutorial] = useState(true)
    const [shouldRenderNextToForwardButton, setShouldRenderNextToForwardButton] = useState(false)
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    //It is basicLessonData.
    const progressWidth = Math.round(((currentIndex + 1) / currentLesson.length ) * 100);
    const getNextLesson = () => {
        if (currentIndex >= currentLesson.length) {
            dispatch({type: "SET_CURRENT_LESSON_INDEX", payload: { lesson: state.id, value: 0 }});
            //setCurrentIndex(0);
        }
        else {
            if (currentIndex === currentLesson.length -1) {
                dispatch(
                    {type: "INCREASE_NUMBER_OF_LESSONS_COMPLETED",
                    payload: { lesson: state.id, value: 1 }}
                );
                dispatch({type: "SET_CURRENT_LESSON_INDEX", payload: { lesson: state.id, value: 0 }});
            }else{
                dispatch({type: "INCREASE_CURRENT_LESSON_INDEX",
                        payload: { lesson: state.id, value: 1 }});
                //alert(state.currentLessonIndex)
                //setCurrentIndex(currentIndex + 1);
                setError(null);
            }
        }
        if(isPlaying){
            stopAudio()
        }
        if(state.id==="BasicLessons"){
            setIsEnding(false)
            setShouldRenderNextToAudioIcon(true)
            setShouldRenderNextToForwardButton(false)
        }
    };





    const getPreviousLesson = () => {
        if(currentIndex === 0 && lessonId === 0){
            //navigate('/')
        }
        if (currentIndex === 0) {
            dispatch({ type: "DECREASE_NUMBER_OF_LESSONS_COMPLETED", payload: { lesson: state.id, value: 1 }});
            setError('No previous items');
        } else {
            setError(null)
            dispatch({type: "DECREASE_CURRENT_LESSON_INDEX",
                payload: { lesson: state.id, value: 1 }});
            //alert(state.currentLessonIndex)
            //setCurrentIndex(currentIndex - 1);
        }
        if(isPlaying){
            stopAudio()
        }
        if(state.id==="BasicLessons"){
            setIsEnding(false)
            setShouldRenderNextToAudioIcon(true)
            setShouldRenderNextToForwardButton(false)
        }
    };

    useEffect(()=>{
        if(audioRef.current){
            const tutorialLevel = "BasicLessons"
            const currentAudio= audioRef.current.src
            const audioPath = new URL(currentAudio).pathname;
            const currentTwiLessonAudio = currentLesson[currentIndex].TwiAudio
            const currentEnglishLessonAudio = currentLesson[currentIndex].EnglishAudio
            const audioCheck = audioPath === currentTwiLessonAudio || audioPath ===currentEnglishLessonAudio
            console.log(audioCheck)
            let setShouldRenderNextToAudioIconToFalse = isPlaying || isEnded && audioCheck  || state.id!==tutorialLevel
            if(setShouldRenderNextToAudioIconToFalse){
                setShouldRenderNextToAudioIcon(false)
            }else{
                setShouldRenderNextToAudioIcon(true)
            }
            const shouldRenderNextToForwardButton= isEnded && audioCheck && state.id===tutorialLevel
            if(shouldRenderNextToForwardButton){
                setShouldRenderNextToForwardButton(true)
            }else{
                setShouldRenderNextToForwardButton(false)
            }

        }

    }, [isPlaying, state])


    useEffect(()=>{
        //dispatch({type: "SET_CURRENT_LESSON_INDEX", payload: { lesson: state.id, value: 0 }});
    }, [lessonId])

    useEffect(()=> {
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




    return(
        <div className="overall_lessons_container">
            {currentLesson.length > 0  && (
                <div>
                    <div className="lesson_card_visuals lessonBlueOutline">
                        <div className="lesson_card_media">
                            <img src={currentLesson[currentIndex].Image} className="card_lesson_image"/>
                        </div>
                        <div className="lesson_card_keywords">
                            <h3 className="lesson_titles">{currentLesson[currentIndex].EnglishWord}</h3>
                            <div>
                                <p className="text_content">{currentLesson[currentIndex].KeyMessageEnglish}</p>
                            </div>
                            <div className="lessons_pointer_container">
                                <div>
                                    {shouldRenderNextToAudioIcons  && shouldDoTutorial &&(
                                        <img
                                            src={PointingSide}
                                            className="pointing_hands top_app_pointing"
                                            alt="pointing hands"
                                        />
                                    )}

                                </div>
                                <AudioPlayer
                                    twiAudio={currentLesson[currentIndex].TwiAudio}
                                    englishAudio={currentLesson[currentIndex].EnglishAudio}
                                    englishAudioName={currentLesson[currentIndex].EnglishWord}
                                    twiAudioName={currentLesson[currentIndex].TwiWord}
                                />
                            </div>


                        </div>
                    </div>
                </div>
            )}
            <div className="testprogressbar" className="progress_bar_style">
                <span  className="progress_text_style">{progressWidth}%</span>
                <progress id="file" value={progressWidth} max="100"> </progress>
            </div>
            <div className="lesson_buttons_div">
                <button onClick={getPreviousLesson} /*disabled={currentIndex===0}*/ className="lesson_buttons icon-buttons">
                    <i className="material-icons" alt="help icon">arrow_back</i>
                    <p>Back</p>
                </button>
                {shouldRenderNextToForwardButton && shouldDoTutorial&&(
                    <img
                        src={PointingSide}
                        className="pointing_hands top_app_pointing"
                        alt="pointing hands"
                    />
                )}
                <button onClick={getNextLesson} disabled={currentIndex === currentLesson.length} className="lesson_buttons icon-buttons">
                    <p>Next </p>
                    <i className="material-icons" alt="help icon">arrow_forward</i>
                </button>


            </div>


            {/*   <div className="progress_bar_padding">
                <div className="progress_bar_main">
                    <div className="progress_bar_secondary"
                         style={{ width: `${progressWidth}%` }}
                    >
                        <div className="progress_bar_text_container">
                            <p className="lesson_progress_text">{currentIndex + 1}/ {basicLessonData.length}</p>
                        </div>
                    </div>
            </div>
            </div>*/}
        </div>

    )
}

export default Lessons;