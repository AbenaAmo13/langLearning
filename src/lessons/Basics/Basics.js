import {useReducer, useEffect, useContext} from "react";
import Lessons from "../../reusable-components/Lessons"
import {LessonContext, LessonDispatchContext} from "../../context/GlobalStateContext";
import Question from "../../reusable-components/Questions";
import MulitpleChoiceQuestions from "../../reusable-components/MulitpleChoiceQuestions";



function Basics() {
    const lessons = useContext(LessonContext)
    const dispatch = useContext(LessonDispatchContext)

    useEffect(()=>{
        console.log(lessons.BasicLessons.lessonCompleted)
        dispatch({ type: "SET_LESSON_COMPLETED", payload: { lesson: lessons.BasicLessons.id, completed: false }});

    }, [])

    console.log(lessons.BasicLessons.lessonCompleted)

    if(!lessons.BasicLessons.lessonCompleted ){
        return( <Lessons state={lessons.BasicLessons} dispatch={dispatch}/>)
    }else {
        if(!lessons.BasicLessons.trueOrFalseComplete){
            return(<Question state={lessons.BasicLessons} questionType={"trueorfalse"} dispatch={dispatch}/>)
        }else{
            return(<Question state={lessons.BasicLessons} questionType={"mcq"} dispatch={dispatch}/>)
        }
    }



    /*    return(
            <div>
                {
                    (!lessons.BasicLessons.lessonCompleted ?
                            <Lessons state={lessons.BasicLessons} dispatch={dispatch}/>:

                            <Question state={lessons.BasicLessons} questionType={"trueorfalse"} dispatch={dispatch}/>
                    )
                }

            </div>
        )*/
}


export default Basics;