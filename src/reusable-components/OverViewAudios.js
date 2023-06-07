import pointhands from "../images/rewardImages/pointinghand.gif";
import pointhands2 from "../images/rewardImages/pointinghand2.gif";
import LessonAudioPlayer from "./LessonAudioPlayer";
import {useContext} from "react";
import {AudioContext} from "../context/AudioContext";

function OverviewAudios({englishAudio, twiAudio, englishAudioName, twiAudioName, text, title, }){

    const location = window.location.pathname
/*    const condition = location==="/RewardStore" && !failedPurchase*/

    const {playAudio, isPlaying, stopAudio,stopAnswerAudio} = useContext(AudioContext);
    return(<div className="navCard importantAudioPlayer">
        <div>
            <div className="audio_container">
                <h1>{title}</h1>
                {text.map((item, index)=>(
                    <p key={index} className="pruchased_styling overviewmessage"> {item}</p>

                    ))}
                <div className="overview_point_container">
                   {/* {isPlaying===false && (
                        <img src={pointhands2} className="pointing_hands"/>
                    )}*/}

                    <LessonAudioPlayer
                        englishAudio={englishAudio}
                        englishAudioName={englishAudioName}
                        twiAudio={twiAudio}
                        twiAudioName={twiAudioName}
                    />
                </div>


            </div>

        </div>
    </div>)
}

export default OverviewAudios