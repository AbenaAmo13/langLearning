import {useContext, useEffect, useReducer, useState} from "react";
import {AudioContext} from "../context/AudioContext";
import AudioPlayer from "../reusable-components/LessonAudioPlayer";
import twiAudioPrompt from "../audios/transitionalaudios/keywordsTwi.mp3"
import englishAudioPrompt from "../audios/transitionalaudios/keywordsEnglish.mp3"
import QuestionPrompt from "./QuestionPrompt";
import leftPoint from "../images/rewardImages/leftPoint.gif";
import PointingSide from "../images/rewardImages/pointinghand2.gif";


function KeyWordsLessons({state, dispatch, lessonId}){
    const currentLesson = state.lessons[lessonId]
    const{isPlaying, stopAudio, audioRef, isEnded, setIsEnding} = useContext(AudioContext)
    const [shouldRenderNextToAudioIcons, setShouldRenderNextToAudioIcon] = useState(true)
    const [shouldRenderNextToForwardButton, setShouldRenderNextToForwardButton] = useState(false)
   // const [keyLessonState, setKeyLessonState] = useState(false);
    const keyLessonState = state.keyLessonState
    const currentIndex= state.currentLessonIndex
    //const [currentIndex, setCurrentIndex] = useState(0);
    const [error, setError] = useState(null);
    const keyWordPromptText={
        title:"Keywords",
        paragraphs:["In this section, we are going to cover some keywords that you should know their English definition.", "To continue, click the rectangle button with the forward/right arrow", "To revisit the previous lesson section, click the rectangle button with the left/back arrow"]
    }
    const keyWordText = keyWordPromptText.paragraphs.map((keyWordsText, index) =>
        <p className="card_component_text" key={index}> {keyWordsText}</p>
    );
    //It is basicLessonData.
    const progressWidth = Math.round(((currentIndex + 1) / currentLesson.length ) * 100);
    const getNextLesson = () => {
        if (currentIndex >= currentLesson.length) {
            dispatch({type: "SET_CURRENT_LESSON_INDEX", payload: { lesson: state.id, value: 0 }});
            //setCurrentIndex(0);
        }
        else {
            if (currentIndex === currentLesson.length -1) {
                dispatch({ type: "INCREASE_NUMBER_OF_LESSONS_COMPLETED", payload: { lesson: state.id, value: 1 }});
                // dispatch({ type: "SET_LESSON_COMPLETED", payload: { lesson: state.id, completed: true }});
            }else{
                setError(null);
                dispatch({type: "INCREASE_CURRENT_LESSON_INDEX",
                    payload: { lesson: state.id, value: 1 }});
                //setCurrentIndex(currentIndex + 1);
            }
        }

        if(isPlaying){
            stopAudio()
        }
    };

    //This goes to the previous lesson group
    function goToPreviousLessonGroup(){
        dispatch({ type: "DECREASE_NUMBER_OF_LESSONS_COMPLETED", payload: { lesson: state.id, value: 1 }});
        const previousLessonLastIndex = (state.lessons[lessonId-1].length)-1
        //alert(previousLessonLastIndex)
        dispatch({ type: "SET_CURRENT_LESSON_INDEX", payload: {lesson: state.id,value: previousLessonLastIndex}});
        //alert(previousLessonLastIndex)

        if(isPlaying){
            stopAudio()
        }
    }

    //This goes to the previous lesson group
    function handleKeyWordLessonTransition(){
        dispatch({ type: "SET_KEY_LESSON_STATE", payload: { lesson: state.id, value: true }});
        dispatch({type: "SET_CURRENT_LESSON_INDEX", payload: { lesson: state.id, value: 0 }});
        if(isPlaying){
            stopAudio()
        }
    }


    const getPreviousLesson = () => {
        if (currentIndex === 0) {
            dispatch({ type: "SET_KEY_LESSON_STATE", payload: { lesson: state.id, value: false }});
            setError('No previous items');
        } else {
            setError(null)
            dispatch({type: "DECREASE_CURRENT_LESSON_INDEX",
                payload: { lesson: state.id, value: 1 }});
            //setCurrentIndex(currentIndex - 1);
        }
        if(isPlaying){
            stopAudio()
        }
    };

    useEffect(()=>{
        try{
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
        }catch (e){
            console.log(e)
        }


    }, [isPlaying, currentIndex])

    useEffect(()=>{
        const tutorialLevel = "BasicLessons"
        if(state.id!==tutorialLevel){
            setShouldRenderNextToAudioIcon(false)
            setShouldRenderNextToForwardButton(false)
        }

    }, [])

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

                                <div className="tutorial_keywords_container">
                                    {shouldRenderNextToAudioIcons&&(
                                        <img
                                            src={PointingSide}
                                            className="pointing_hands top_app_pointing"
                                            alt="pointing hands"
                                        />
                                    )}
                                    <AudioPlayer
                                        twiAudio={currentLesson[currentIndex].TwiAudio}
                                        englishAudioName={currentLesson[currentIndex].EnglishWord}
                                        twiAudioName={currentLesson[currentIndex].TwiWord}
                                        englishAudio={currentLesson[currentIndex].EnglishAudio}

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
            </div>
        )
    }

    const promptView=()=>{
        return(
            <div>
                <div className="card_component_container blueCardOutline">
                    <div className="card_component_content">
                        <h1 className="card_component_title">{keyWordPromptText.title}</h1>
                        {keyWordText}
                    </div>
                    <AudioPlayer
                        twiAudio={twiAudioPrompt}
                        twiAudioName={twiAudioPrompt}
                        englishAudio={englishAudioPrompt}
                        englishAudioName={englishAudioPrompt}
                    />
                    <div className="keyword_button_div">
                        <button  className="lesson_buttons icon-buttons" onClick={()=> goToPreviousLessonGroup()}>
                            <i className="material-icons" alt="forward arrow icon">arrow_back</i>
                            <p>Back</p>
                        </button>
                        {state.id==="BasicLessons"&&(
                            <img
                                src={PointingSide}
                                className="pointing_hands top_app_pointing"
                                alt="pointing hands"
                            />
                        )}
                        <button  className="lesson_buttons icon-buttons" onClick={()=>handleKeyWordLessonTransition()}>
                            <p>Next</p>
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