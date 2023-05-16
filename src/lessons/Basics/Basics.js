import {useReducer, useEffect, useContext, useState} from "react";
import Lessons from "../../reusable-components/Lessons"
import {LessonContext, LessonDispatchContext} from "../../context/GlobalStateContext";
import Question from "../../reusable-components/Questions";
import RetakeCourse from "../../reusable-components/RetakeCourse";
import {Link} from "react-router-dom";
import LessonAudioPlayer from "../../reusable-components/LessonAudioPlayer";
import PassedCourse from "../../reusable-components/PassedCourse";
import {LockedStatusObjContext} from "../../App";
import {AudioContext} from "../../context/AudioContext";
import MultipleLessons from "../../reusable-components/MultipleLessons";

function Basics() {
    const {lockedStatusJsonObj, setLockedStatusJsonObj} = useContext(LockedStatusObjContext)
    const {isPlaying, stopAudio} = useContext(AudioContext)
    const lessons = useContext(LessonContext)
    const dispatch = useContext(LessonDispatchContext)
    const basicLessonState = lessons.BasicLessons;
    const numberOfCompletedLessons = basicLessonState.numberOfCompletedLessons
    const numberOfCompletedQuestions = basicLessonState.numberOfCompletedQuestions

    const [passedBasicLesson, setPassedBasicLesson] = useState(false)
    let allQuestionsAnswered

    useEffect(()=>{
        dispatch({ type: "RESET_LESSON", payload: { lesson: basicLessonState.id}});
    }, [])

    useEffect(()=>{
        const userPoints = basicLessonState.scores;
        const pointsRequired = basicLessonState.pointsToPassLesson;
        console.log("Number of completed questions: " + numberOfCompletedQuestions)
        if(numberOfCompletedQuestions === basicLessonState.questions.length){
            if(userPoints > pointsRequired ) {
                console.log('you have passed the lessons')
                const lockedStatus = JSON.parse(localStorage.getItem('lockedStatusData'))
                lockedStatus.Health = false
                localStorage.setItem('lockedStatusData', JSON.stringify(lockedStatus))
                //console.log("Final object: "+ lockedStatus)
                setLockedStatusJsonObj(lockedStatus)
                return(
                    <PassedCourse to="/Health"/>
                )

            }else{
                return(
                    <RetakeCourse/>
                )

            }

        }



    }, [numberOfCompletedQuestions])

    const basicsComponent=[
        <MultipleLessons state={basicLessonState} dispatch={dispatch} lessonId={0}/>,
        <Question state={basicLessonState} questionType={"trueorfalse"} dispatch={dispatch} id={0}/>,
        <Question state={basicLessonState} questionType={"mcq"} dispatch={dispatch} id={1}/>,
    ]

    //Math.min is used to ensure that the component index does not exceed the maximum index of the lessonComponents Array
    const currentComponentIndex = Math.min(
        numberOfCompletedLessons + numberOfCompletedQuestions,
        basicsComponent.length - 1
    );

    return basicsComponent[currentComponentIndex]



 /*   useEffect(()=>{
        if(isPlaying){
            stopAudio()
        }

        const userPoints = basicLessonState.scores;
        const pointsRequired = basicLessonState.pointsToPassLesson;
        if(userPoints > pointsRequired && localStorage.getItem('lockedStatusData')) {
            const lockedStatus = JSON.parse(localStorage.getItem('lockedStatusData'))
            lockedStatus.Health = false
            localStorage.setItem('lockedStatusData', JSON.stringify(lockedStatus))
            console.log("Final object: "+ lockedStatus)
            setLockedStatusJsonObj(lockedStatus)

            setPassedBasicLesson(true);
        }
    }, [basicLessonState.mcqComplete])




    if(!basicLessonState.lessonCompleted ){
        return( <Lessons state={basicLessonState} dispatch={dispatch}/>)
    }else if(!basicLessonState.trueOrFalseComplete){
            return(<Question state={basicLessonState} questionType={"trueorfalse"} dispatch={dispatch} id={0}/>)
    }else if(!basicLessonState.mcqComplete){
            return(<Question state={basicLessonState} questionType={"mcq"} dispatch={dispatch} id={1}/>)
    }else if(passedBasicLesson) {
        // All questions answered, quiz complete
        return(
           <PassedCourse to="/Health"/>
        )
    }else{
        return(
            <RetakeCourse/>
        )
    }*/

}


export default Basics;