import {Link} from "react-router-dom";
import retakeLesson from "../audios/transitionalaudios/retakelesson.mp3"
import LessonAudioPlayer from "./LessonAudioPlayer";

function RetakeCourse(){
    return(
        <div className="card_component_container lightOrangeCardOutline padding">
            <h1 className="text_content"> You did not pass the test, please click the square button to retake the lesson</h1>
            <Link  to="/" className= "nav_link_routers">
                <button className="lesson_buttons mcq_buttons retake">Retake course</button>
            </Link>
            <LessonAudioPlayer
                englishAudio={retakeLesson}
                englishAudioName={retakeLesson}

            />
        </div>
    )
}

export default RetakeCourse