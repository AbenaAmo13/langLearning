
import {useContext, useState} from "react";
import {AudioContext} from "../../context/AudioContext";
import {EnglishAudioContext} from "../../context/PlayEnglishContext";
import {LanguageContext} from "../../context/LanguageContext";
import introductionAudio from "../../audios/testing.mp3"
import {basicLessonData} from "./BasicsLessonData"


function Basics() {
    const { isPlaying, playAudio, stopAudio } = useContext(AudioContext);
    const {speakEnglishWords} = useContext(EnglishAudioContext);
    const {language, updateLanguage} = useContext(LanguageContext)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [error, setError] = useState(null);
    const English = "English";
    const mainCardTitle = "Introduction"
    const mainCardTitleTwi ="Mfitiaseɛ no"
    console.log(language)

    /*
    * onClick={() => (language === English ? speakEnglishWords() : playAudio())}
    * */

    const getNextLesson = () => {
        if (currentIndex >= basicLessonData.length) {
            setCurrentIndex(0);
        }
        else {
            if (currentIndex === basicLessonData.length - 1) {
                setError('No more items to show');
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
        <div>
            {basicLessonData.length > 0 && (
                <div >
                    <div className="lesson_card">
                        <div className="lesson_card_title">
                            <h3> {language === English ? mainCardTitle + ": "+ basicLessonData[currentIndex].EnglishWord : mainCardTitleTwi +": " +  basicLessonData[currentIndex].TwiWord}
                            </h3>
                        </div>
                        <div className="volume_div_lesson">
                            <button className="icon-buttons volume_icon lesson_volume_icon main_audio" onClick={()=>{language===English? speakEnglishWords(basicLessonData[currentIndex].EnglishScript): playAudio(new Audio(introductionAudio))}}  >
                                <i className="material-icons" alt="help icon">volume_up</i>
                            </button>
                        </div>
                    </div>
                    <div className="lesson_card_visuals">
                        <div className="lesson_card_media">
                            <img src={basicLessonData[currentIndex].Image} className="card_lesson_image"/>
                        </div>
                        <div className="lesson_card_keywords">
                            {language===English ? basicLessonData[currentIndex].KeyMessageEnglish: basicLessonData[currentIndex].KeyMessageTwi}
                            <button className="icon-buttons volume_icon lesson_volume_icon" onClick={()=>{language===English? speakEnglishWords(basicLessonData[currentIndex].KeyMessageEnglish): playAudio(new Audio(introductionAudio))}}  >
                                <i className="material-icons" alt="help icon">volume_up</i>
                            </button>
                        </div>
                    </div>
                    <button onClick={getNextLesson} disabled={currentIndex === basicLessonData.length - 1}>Next Item</button>
                    <button onClick={getPreviousLesson} disabled={currentIndex===0}>Previous Button</button>

                </div>

            )}
        </div>

    )

}

export default Basics;