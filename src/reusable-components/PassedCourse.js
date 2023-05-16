import {Link} from "react-router-dom";
import LessonAudioPlayer from "./LessonAudioPlayer";
import congratsAudio from "../audios/transitionalaudios/congratulations.mp3"
import {useContext} from "react";
import {AudioContext} from "../context/AudioContext";

export default function PassedCourse({to}){
    const {isPlaying, stopAudio} = useContext(AudioContext)
    return(
        <div className="card_component_container lightOrangeCardOutline padding">
            <h1>You passed this course! Congratualtions</h1>
            <h3>To continue to the first course which click the button below:</h3>

            <Link  to={to} className= "nav_link_routers">
                <button className="start-button complete_button "
                        onClick={()=>{
                            if(isPlaying){
                                stopAudio()
                            }
                        }}>
                    START
                </button>
            </Link>
            <LessonAudioPlayer
                englishAudio={congratsAudio}
                englishAudioName={congratsAudio}

            />
        </div>
    )
}

