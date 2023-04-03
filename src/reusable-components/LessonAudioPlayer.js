
import {AudioContext} from "../context/AudioContext";
import {useContext} from "react";
 const LessonAudioButtons = ({ twiAudio, englishAudio }) => {
     const {playAudio, isPlaying } = useContext(AudioContext);
    return (
        <div className="question_audio_icons">
            <div className="volume_button_divs">
                <div>🇬🇭</div>
                <button
                    className={`volume_icon lesson_volume_icon keyword_volume_icon ${isPlaying === true ? 'audio_active' : ''}`}
                    onClick={() => {
                        playAudio(new Audio(twiAudio));
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
                    className={`volume_icon lesson_volume_icon keyword_volume_icon ${isPlaying === true ? 'audio_active' : ''}`}
                    onClick={() => {
                        playAudio(new Audio(englishAudio));
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