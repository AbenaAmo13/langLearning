import {Link} from "react-router-dom";

function RetakeCourse(){
    return(
        <div className="card_component_container lightOrangeCardOutline padding">
            <h1 className="text_content"> You did not pass this course, please click the button to do this course</h1>
            <Link  to="/" className= "nav_link_routers">
                <button className="lesson_buttons mcq_buttons retake">Retake course</button>
            </Link>
        </div>
    )
}

export default RetakeCourse