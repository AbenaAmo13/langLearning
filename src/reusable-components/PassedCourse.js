import {Link} from "react-router-dom";
import LessonAudioPlayer from "./LessonAudioPlayer";
import congratsAudio from "../audios/transitionalaudios/congratulations.mp3"
import congratsAudioTwi from "../audios/transitionalaudios/congratulations_twi_final.mp3"
import {useContext, useEffect, useState} from "react";
import {AudioContext} from "../context/AudioContext";

export default function PassedCourse({to}){
    const [fullyComplete , setFullyComplete] = useState(false)
    let path = window.location.pathname
    useEffect(()=>{
        // Retrieve the lockedStatusData from localStorage
        const lockedStatusData = JSON.parse(localStorage.getItem('lockedStatusData'));
        // Check if all values are false
        const allFalse = Object.values(lockedStatusData).every(value => value === false);
        if(path === "/Jobs" && allFalse){
            setFullyComplete(true)
        }

    }, [path])

    const {isPlaying, stopAudio} = useContext(AudioContext)
    return(
        <div className="card_component_container lightOrangeCardOutline padding">
            {fullyComplete ?
                <div>
                    <h1>Congratulations, you have passed all courses</h1>
                    <h3>You can now revisit any of the courses whenever you want</h3>
                    <h3>Click the button down below to go to the home page</h3>
                </div>
                :
                <div>
                    <h1>You passed this course! Congratulations</h1>
                    <h3>To continue to the next course, click the button below:</h3>
                </div>
            }


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
                twiAudio={congratsAudioTwi}
                twiAudioName={congratsAudioTwi}

            />
        </div>
    )
}

