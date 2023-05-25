import pointhands from "../images/rewardImages/pointinghand.gif";
import pointhands2 from "../images/rewardImages/pointinghand2.gif";
import LessonAudioPlayer from "./LessonAudioPlayer";
import {useContext} from "react";
import {AudioContext} from "../context/AudioContext";

function OverviewAudios({englishAudio, twiAudio, englishAudioName, twiAudioName}){
    const {playAudio, isPlaying, stopAudio,stopAnswerAudio} = useContext(AudioContext);
    return(<div className="navCard importantAudioPlayer">
        <div>
            <div className="audio_container">
                {isPlaying===false && (
                    <img src={pointhands2} className="pointing_hands"/>
                )}

                <LessonAudioPlayer
                    englishAudio={englishAudio}
                    englishAudioName={englishAudioName}
                    twiAudio={twiAudio}
                    twiAudioName={twiAudioName}
                />
            </div>

        </div>
    </div>)
}

export default OverviewAudios