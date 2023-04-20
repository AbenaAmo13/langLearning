import {useContext, useEffect, useReducer, useState} from "react";

import AudioPlayer from "../reusable-components/LessonAudioPlayer";

function Lessons({state, dispatch}){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [error, setError] = useState(null);
    //It is basicLessonData.
    const progressWidth = Math.round(((currentIndex + 1) / state.lessons.length ) * 100);
    const getNextLesson = () => {
        if (currentIndex >= state.lessons.length) {
            setCurrentIndex(0);
        }
        else {
            if (currentIndex === state.lessons.length -1) {
                dispatch({ type: "SET_LESSON_COMPLETED", payload: { lesson: state.id, completed: true }});
            }else{
                setError(null);
                setCurrentIndex(currentIndex + 1);
            }
        }
    };


    const getPreviousLesson = () => {
        if (currentIndex === 0) {
            setError('No previous items');
        } else {
            setError(null)
            setCurrentIndex(currentIndex - 1);
        }
    };
    return(
        <div className="overall_lessons_container">
            {state.lessons.length > 0  && (
                <div>

                 {/*   <div className="lesson_card">
                        <h3 className="lesson_card_heading_title"> {mainCardTitle + ": "+ lessonStates.lessons[currentIndex].EnglishWord}
                        </h3>
                        <button className=" volume_icon lesson_volume_icon main_audio" onClick={()=>{playAudio(new Audio(introductionAudio))}}  >
                            <i className="material-icons" alt="help icon">volume_up</i>
                        </button>
                    </div>*/}
                    <div className="lesson_card_visuals lessonBlueOutline">
                        <div className="lesson_card_media">
                            <img src={state.lessons[currentIndex].Image} className="card_lesson_image"/>
                        </div>
                        <div className="lesson_card_keywords">
                            <h3 className="lesson_titles">{state.lessons[currentIndex].EnglishWord}</h3>
                            <p className="text_content">{state.lessons[currentIndex].KeyMessageEnglish}</p>
                            <AudioPlayer
                                twiAudio={state.lessons[currentIndex].TwiAudio}
                                englishAudio={state.lessons[currentIndex].EnglishAudio}
                                englishAudioName={state.lessons[currentIndex].EnglishWord}
                                twiAudioName={state.lessons[currentIndex].TwiWord}
                            />
                        </div>
                    </div>
                </div>
            )}
            <div className="testprogressbar" className="progress_bar_style">
                <span  className="progress_text_style">{progressWidth}%</span>
                <progress id="file" value={progressWidth} max="100"> </progress>
            </div>
            <div className="lesson_buttons_div">
                <button onClick={getPreviousLesson} disabled={currentIndex===0} className="lesson_buttons icon-buttons">
                    <i className="material-icons" alt="help icon">arrow_back</i>
                    <p>Back</p>
                </button>
                <button onClick={getNextLesson} disabled={currentIndex === state.lessons.length} className="lesson_buttons icon-buttons">
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