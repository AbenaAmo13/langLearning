
import {AudioContext} from "../context/AudioContext";
import {useContext} from "react";
 const LessonAudioButtons = ({ twiAudio, englishAudio, englishAudioName, twiAudioName }) => {
     const {playAudio, isPlaying, activeName, stopAudio } = useContext(AudioContext);
    return (
        <div className="question_audio_icons">
            <div className="volume_button_divs">
                <div>🇬🇭</div>
                <button
                    className={`volume_icon lesson_volume_icon keyword_volume_icon ${activeName === twiAudioName ? 'audio_active' : ''}`}
                    onClick={() => {
                        if(isPlaying && activeName === twiAudioName){
                            stopAudio()
                        }else{
                            playAudio(new Audio(twiAudio),twiAudioName );
                        }
                    }}
                >
                    <i className="material-icons" alt="help icon">
                        volume_up
                    </i>
                </button>
            </div>

            <div className="volume_button_divs">
                <div>🇬🇧</div>
                <button
                    className={`volume_icon lesson_volume_icon keyword_volume_icon ${activeName === englishAudioName ? 'audio_active' : ''}`}
                    onClick={() => {
                        if(isPlaying && activeName === englishAudioName){
                            stopAudio()
                        }else{
                            playAudio(new Audio(englishAudio), englishAudioName);
                        }
                        //onEnglishClick();
                    }}
                >
                    <i className="material-icons" alt="help icon">
                        volume_up
                    </i>
                </button>
            </div>
        </div>
    );
};
 export default LessonAudioButtons;