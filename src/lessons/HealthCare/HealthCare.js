import {useContext, useEffect, useState} from "react";
import MultipleLessons from "../../reusable-components/MultipleLessons";
import {LessonContext, LessonDispatchContext} from "../../context/GlobalStateContext";
import KeyWordsLessons from "../../reusable-components/KeyWordsLessons";
import MatchingOptionsQuestions from "../../reusable-components/MatchingOptionsQuestions";
import Question from "../../reusable-components/Questions";


function HealthCare(){
    const lessons = useContext(LessonContext)
    const dispatch = useContext(LessonDispatchContext)
    const healthcareLessonsState = lessons.HealthCareLessons;
    const [passedBasicLesson, setPassedBasicLesson] = useState(false)

    useEffect(()=>{
        dispatch({ type: "RESET_LESSON", payload: { lesson: healthcareLessonsState.id}});
    }, [])

    useEffect(()=>{
       // console.log("The value of numberOfCompletedLessons are: " + healthcareLessonsState.numberOfCompletedLessons)

    }, [healthcareLessonsState.numberOfCompletedLessons])


    const healthCareComponents = [
        <MultipleLessons state={healthcareLessonsState} dispatch={dispatch} lessonId={0} />,
        <KeyWordsLessons state={healthcareLessonsState} dispatch={dispatch} lessonId={1} />,
        <Question state={healthcareLessonsState} questionType={"matching"} dispatch={dispatch} id={0}/>,
        <MultipleLessons state={healthcareLessonsState} dispatch={dispatch} lessonId={2} />,
    ];

    //Math.min is used to ensure that the component index does not exceed the maximum index of the lessonComponents Array
    const currentComponentIndex = Math.min(
        healthcareLessonsState.numberOfCompletedLessons + healthcareLessonsState.numberOfCompletedQuestions,
        healthCareComponents.length - 1
    );
    return healthCareComponents[currentComponentIndex];



}

export default HealthCare