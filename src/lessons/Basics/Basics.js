
import {useContext, useEffect, useState} from "react";
import {AudioContext} from "../../context/AudioContext";
import {EnglishAudioContext} from "../../context/PlayEnglishContext";
import introductionAudio from "../../audios/testing.mp3"
import {basicLessonData} from "./BasicsLessonData"


function Basics() {
    const [lessonCompleted, setLessonCompleted] = useState(false);
    const [score, setScore] = useState(0);
    console.log(lessonCompleted)
    if(!lessonCompleted){
        return(
            <BasicLessons {...{lessonCompleted, setLessonCompleted}} />
        )
    }else if(lessonCompleted){
        return(
            <BasicTrueOrFalseQuestions {...{lessonCompleted, setLessonCompleted}} />
        )
    }




}



function BasicLessons({lessonCompleted, setLessonCompleted}){
    const {renderAsking, setRenderAsking} = useState(false);
    const { isPlaying, playAudio, stopAudio } = useContext(AudioContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [error, setError] = useState(null);
    const progressWidth = Math.round(((currentIndex +1) / basicLessonData.length) * 100);
    console.log("The progress width" + progressWidth);
    let [progress, setProgress] = useState(progressWidth);
    const mainCardTitle = "Introduction"
    console.log(progress)
    /*
    * onClick={() => (language === English ? speakEnglishWords() : playAudio())}
    * */
    const getNextLesson = () => {
        if (currentIndex >= basicLessonData.length) {
            setCurrentIndex(0);
        }
        else {
            if (currentIndex === basicLessonData.length) {
                //setError('No more items to show');
            }else{

                setError(null);
                setCurrentIndex(currentIndex + 1);
               setProgress(progressWidth + 20)
            }
        }
    };

    const getPreviousLesson = () => {
        if (currentIndex === 0) {
            setError('No previous items');
        } else {
            setError(null)
            setCurrentIndex(currentIndex - 1);
            setProgress(progressWidth -20)
        }
    };

    useEffect(()=>{
        if(progress ===100){
            setLessonCompleted(true)
            console.log('This lesson is complete')
        }
    }, [progress])
    return(
        <div className="overall_lessons_container">
            {!lessonCompleted && basicLessonData.length > 0  && (
                <div >
                    <div className="lesson_card">
                        <h3 className="lesson_card_heading_title"> {mainCardTitle + ": "+ basicLessonData[currentIndex].EnglishWord}
                        </h3>
                        <button className=" volume_icon lesson_volume_icon main_audio" onClick={()=>{playAudio(new Audio(introductionAudio))}}  >
                            <i className="material-icons" alt="help icon">volume_up</i>
                        </button>
                    </div>
                    <div className="lesson_card_visuals">
                        <div className="lesson_card_media">
                            <img src={basicLessonData[currentIndex].Image} className="card_lesson_image"/>
                        </div>
                        <div className="lesson_card_keywords">
                            {basicLessonData[currentIndex].KeyMessageEnglish}
                            <div className="audio_icons">
                                <div className="volume_button_divs">
                                    <div>🇬🇭</div>
                                    <button className=" volume_icon lesson_volume_icon keyword_volume_icon" onClick={()=>{playAudio(new Audio(introductionAudio))}}  >
                                        <i className="material-icons" alt="help icon">volume_up</i>
                                    </button>
                                </div>

                                <div className="volume_button_divs">
                                    <div>🇬🇧</div>
                                    <button className=" volume_icon lesson_volume_icon keyword_volume_icon" onClick={()=>{playAudio(new Audio(introductionAudio))}}  >
                                        <i className="material-icons" alt="help icon">volume_up</i>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="lesson_buttons_div">
                        <button onClick={getPreviousLesson} disabled={currentIndex===0} className="lesson_buttons icon-buttons">
                            <i className="material-icons" alt="help icon">arrow_back</i>
                            <p>Back</p>

                        </button>
                        <button onClick={getNextLesson} disabled={currentIndex === basicLessonData.length-1} className="lesson_buttons icon-buttons">
                            <p>Next </p>
                            <i className="material-icons" alt="help icon">arrow_forward</i>

                        </button>

                    </div>

                </div>


            )}
            <div className="testprogressbar" className="progress_bar_style">
                <span  className="progress_text_style">{progressWidth}%</span>
                <progress id="file" value={progressWidth} max="100"> </progress>
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

function BasicTrueOrFalseQuestions() {
    return(
        <div>
            <h1> Are you ready to begin the questions</h1>
        </div>
    )

}

export default Basics;