import {useContext, useEffect, useReducer, useState} from "react";

import AudioPlayer from "../reusable-components/LessonAudioPlayer";
import QuestionPrompt from "./QuestionPrompt";


function KeyWordsLessons({state, dispatch, lessonId}){
    const currentLesson = state.lessons[lessonId]
    const [keyLessonState, setKeyLessonState] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [error, setError] = useState(null);
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
    };

    //This goes to the previous lesson group
    function goToPreviousLessonGroup(){
        dispatch({ type: "DECREASE_NUMBER_OF_LESSONS_COMPLETED", payload: { lesson: state.id, value: 1 }});
    }


    const getPreviousLesson = () => {
        if (currentIndex === 0) {
            setError('No previous items');
        } else {
            setError(null)
            setCurrentIndex(currentIndex - 1);
        }
    };

    const renderLessons=()=>{
        return(
            <div className="overall_lessons_container">
                {currentLesson.length > 0  && (
                    <div>
                        <div className="lesson_card_visuals lessonBlueOutline">
                            <div className="lesson_card_media">
                                <img src={currentLesson[currentIndex].Image} className="card_lesson_image"/>
                            </div>
                            <div className="lesson_card_keywords">
                                <h2> Keywords</h2>
                                <div className="keywords_div">
                                    <div className="keywords_icon">🇬🇭 </div>
                                    <h3>{currentLesson[currentIndex].TwiWord}</h3>
                                </div>
                                <div className="keywords_div">
                                    <div className="keywords_icon">🇬🇧 </div>
                                    <h3>{currentLesson[currentIndex].EnglishWord}</h3>
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
                    <button onClick={getNextLesson} disabled={currentIndex === currentLesson.length} className="lesson_buttons icon-buttons">
                        <p>Next </p>
                        <i className="material-icons" alt="help icon">arrow_forward</i>
                    </button>
                </div>
            </div>
        )
    }

    const promptView=()=>{
        return(
            <div>
                <div className="card_component_container purpleCardOutline">
                    <div className="card_component_content">
                        <h3 className="card_component_title">Keywords</h3>
                        <p className="card_component_text">In this section, we are going to cover some keywords that you should know their English definition.</p>
                        <p className="card_component_text">To continue, click the rectangle button with the forward/right arrow</p>
                        <p className="card_component_text">To revisit the previous lesson section, click the rectangle button with the left/back arrow</p>

                    </div>
                    <AudioPlayer/>
                    <div className="keyword_button_div">
                        <button  className="lesson_buttons icon-buttons" onClick={()=> goToPreviousLessonGroup()}>
                            <i className="material-icons" alt="forward arrow icon">arrow_back</i>
                            <p>Back</p>
                        </button>
                        <button  className="lesson_buttons icon-buttons" onClick={()=>setKeyLessonState(true)}>
                            <p>Continue</p>
                            <i className="material-icons" alt="forward arrow icon">arrow_forward</i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    return(
       <div>
           {!keyLessonState ? (
               /* Gives intro of what this view is going to be */
               promptView()

           ) : (
               /* Render the rest of the condition */

                renderLessons()


           )}
       </div>
    )
}

export default KeyWordsLessons;