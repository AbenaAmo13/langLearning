import {useReducer, useEffect, useContext, useState} from "react";
import Lessons from "../../reusable-components/Lessons"
import {LessonContext, LessonDispatchContext} from "../../context/GlobalStateContext";
import Question from "../../reusable-components/Questions";
import RetakeCourse from "../../reusable-components/RetakeCourse";
import {Link} from "react-router-dom";



function Basics() {
    const lessons = useContext(LessonContext)
    const dispatch = useContext(LessonDispatchContext)
    const basicLessonState = lessons.BasicLessons;
    const [passedBasicLesson, setPassedBasicLesson] = useState(false)
    let allQuestionsAnswered

    useEffect(()=>{
        dispatch({ type: "RESET_LESSON", payload: { lesson: basicLessonState.id}});
    }, [])

    useEffect(()=>{
        const userPoints = basicLessonState.scores;
        const pointsRequired = basicLessonState.pointsToPassLesson;
        if(userPoints > pointsRequired && localStorage.getItem('lockedStatusData')) {
            const lockedStatus = JSON.parse(localStorage.getItem('lockedStatusData'))
            lockedStatus.Health = false
            localStorage.setItem('lockedStatusData', JSON.stringify(lockedStatus))
            setPassedBasicLesson(true);
        }
    }, [basicLessonState.mcqComplete])




    if(!basicLessonState.lessonCompleted ){
        return( <Lessons state={basicLessonState} dispatch={dispatch}/>)
    }else if(!basicLessonState.trueOrFalseComplete){
            return(<Question state={basicLessonState} questionType={"trueorfalse"} dispatch={dispatch}/>)
    }else if(!basicLessonState.mcqComplete){
            return(<Question state={basicLessonState} questionType={"mcq"} dispatch={dispatch}/>)
    }else if(passedBasicLesson) {
        // All questions answered, quiz complete
        return(
            <div className="card_component_container lightOrangeCardOutline padding">
                <h1>You passed this course! Congratualtions</h1>
                <h3>To continue to the first course which click the button below:</h3>

                    <Link  to="/Health" className= "nav_link_routers">
                        <button className="start-button ">START</button>
                    </Link>

        </div>
        )
    }else{
        return(
            <RetakeCourse/>
        )
    }

}


export default Basics;