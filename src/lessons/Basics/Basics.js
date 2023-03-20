
import {useContext} from "react";
import {AudioContext} from "../../context/AudioContext";
import {EnglishAudioContext} from "../../context/PlayEnglishContext";
import {LanguageContext} from "../../context/LanguageContext";
import introductionAudio from "../../audios/testing.mp3"


function Basics() {
    const { isPlaying, playAudio, stopAudio } = useContext(AudioContext);
    const {speakEnglishWords} = useContext(EnglishAudioContext);
    const {language, updateLanguage} = useContext(LanguageContext)
    const English = "English";
    const mainCardTitle = "Introduction"
    const mainCardTitleTwi ="Mfitiaseɛ no"

    /*
    * onClick={() => (language === English ? speakEnglishWords() : playAudio())}
    * */

    return(
        <div className="card_box">
            <div className="card_title">
                <h1> {language === English ? mainCardTitle  : mainCardTitleTwi}
                </h1>
            </div>
            <div className="volume_div">
                <button className="icon-buttons volume_icon lesson_volume_icon" onClick={()=>{language===English? speakEnglishWords(mainCardTitle): playAudio(new Audio(introductionAudio))}}  >
                    <i className="material-icons" alt="help icon">volume_up</i>
                </button>
            </div>

        </div>
    )

}

export default Basics;