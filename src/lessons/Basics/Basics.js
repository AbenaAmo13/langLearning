import {useReducer, useEffect, useContext} from "react";
import Lessons from "../../reusable-components/Lessons"
import {LessonContext, LessonDispatchContext} from "../../context/GlobalStateContext";
import Question from "../../reusable-components/Questions";
import MulitpleChoiceQuestions from "../../reusable-components/MulitpleChoiceQuestions";



function Basics() {
    const lessons = useContext(LessonContext)
    const dispatch = useContext(LessonDispatchContext)
    let allQuestionsAnswered

    useEffect(()=>{
        dispatch({ type: "RESET_LESSON", payload: { lesson: lessons.BasicLessons.id}});

    }, [])

    useEffect(()=>{
         allQuestionsAnswered = lessons.BasicLessons.questions.every((questionArray) => {
            return questionArray.every((question) => question.isAnswered);
        });
    }, [lessons.BasicLessons.trueOrFalseComplete, lessons.BasicLessons.mcqComplete])


    console.log("Answered all status" + allQuestionsAnswered)


    if(!lessons.BasicLessons.lessonCompleted ){
        return( <Lessons state={lessons.BasicLessons} dispatch={dispatch}/>)
    }else if(!lessons.BasicLessons.trueOrFalseComplete){
            return(<Question state={lessons.BasicLessons} questionType={"trueorfalse"} dispatch={dispatch}/>)
        }else if(!lessons.BasicLessons.mcqComplete){
            return(<Question state={lessons.BasicLessons} questionType={"mcq"} dispatch={dispatch}/>)
        }else {
        // All questions answered, quiz complete
        return(<div><h1>You are done with the quiz</h1></div>)
    }

}


export default Basics;