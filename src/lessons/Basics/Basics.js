import {useReducer, useEffect, useContext} from "react";
import Lessons from "../../reusable-components/Lessons"
import {LessonContext, LessonDispatchContext} from "../../context/GlobalStateContext";
import Question from "../../reusable-components/Questions";
import MulitpleChoiceQuestions from "../../reusable-components/MulitpleChoiceQuestions";



function Basics() {
    const lessons = useContext(LessonContext)
    const dispatch = useContext(LessonDispatchContext)

    useEffect(()=>{
        dispatch({ type: "RESET_LESSON", payload: { lesson: lessons.BasicLessons.id}});
    }, [])


    if(!lessons.BasicLessons.lessonCompleted ){
        return( <Lessons state={lessons.BasicLessons} dispatch={dispatch}/>)
    }else {
        if(!lessons.BasicLessons.trueOrFalseComplete){
            return(<Question state={lessons.BasicLessons} questionType={"trueorfalse"} dispatch={dispatch}/>)
        }else{
            return(<Question state={lessons.BasicLessons} questionType={"mcq"} dispatch={dispatch}/>)
        }
    }

}


export default Basics;