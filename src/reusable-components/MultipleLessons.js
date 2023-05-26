import {useContext, useEffect, useReducer, useState} from "react";

import AudioPlayer from "../reusable-components/LessonAudioPlayer";
import {AudioContext} from "../context/AudioContext";
import {useNavigate} from "react-router";
import PointingSide from "../images/rewardImages/pointinghand2.gif";
import leftPoint from "../images/rewardImages/leftPoint.gif";

function Lessons({state, dispatch, lessonId}){
    const { isPlaying, stopAudio, isEnded, audioRef,setIsEnding} = useContext(AudioContext);
    const currentLesson = state.lessons[lessonId]
    const [currentIndex, setCurrentIndex] = useState(0);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    //It is basicLessonData.
    const progressWidth = Math.round(((currentIndex + 1) / currentLesson.length ) * 100);
    const getNextLesson = () => {
        if (currentIndex >= currentLesson.length) {
            setCurrentIndex(0);
        }
        else {
            if (currentIndex === currentLesson.length -1) {
                dispatch({ type: "INCREASE_NUMBER_OF_LESSONS_COMPLETED", payload: { lesson: state.id, value: 1 }});
               // dispatch({ type: "SET_LESSON_COMPLETED", payload: { lesson: state.id, completed: true }});
            }else{
                setError(null);
                setCurrentIndex(currentIndex + 1);
            }
        }
        if(isPlaying){
            stopAudio()
        }
        setIsEnding(false)

    };


    const getPreviousLesson = () => {
        if(currentIndex === 0 && lessonId === 0){
            navigate('/')
        }
        if (currentIndex === 0) {
            dispatch({ type: "DECREASE_NUMBER_OF_LESSONS_COMPLETED", payload: { lesson: state.id, value: 1 }});
            setError('No previous items');
        } else {
            setError(null)
            setCurrentIndex(currentIndex - 1);
        }
        if(isPlaying){
            stopAudio()
        }
        setIsEnding(false)
    };
    // Check if state1 is false and state2 is equal to a specific object
    const tutorialLevel = "BasicLessons"
    const shouldRenderNextToAudioIcons = !isPlaying && !isEnded && state.id===tutorialLevel
    const shouldRenderNextToForwardButton= isEnded && state.id===tutorialLevel


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
                                    {shouldRenderNextToAudioIcons&&(
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
                {shouldRenderNextToForwardButton&&(
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