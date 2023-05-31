import {Link} from "react-router-dom";
import retakeLesson from "../audios/transitionalaudios/retakelesson.mp3"
import LessonAudioPlayer from "./LessonAudioPlayer";
import {useContext} from "react";
import {AudioContext} from "../context/AudioContext";

function RetakeCourse({to}){
    const {isPlaying, stopAudio} = useContext(AudioContext)
    return(
        <div className="card_component_container lightOrangeCardOutline padding">
            <h1 className="text_content"> You did not pass the test, please click the square button to retake the lesson</h1>
            <Link  to={to} className= "nav_link_routers">
                <button className="lesson_buttons mcq_buttons retake"
                        onClick={()=>{
                    if(isPlaying){
                        stopAudio()
                    }
                }}>
                    Retake course
                </button>
            </Link>
            <LessonAudioPlayer
                englishAudio={retakeLesson}
                englishAudioName={retakeLesson}

            />
        </div>
    )
}

export default RetakeCourse