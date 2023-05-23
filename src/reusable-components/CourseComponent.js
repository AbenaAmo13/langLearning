import {useContext, useEffect, useState} from "react";
import MultipleLessons from "./MultipleLessons";
import {LessonContext, LessonDispatchContext} from "../context/GlobalStateContext";
import KeyWordsLessons from "./KeyWordsLessons";
import Question from "./Questions";
import CourseSummary from "./CourseSummary";
import {LockedStatusObjContext} from "../App.js";
import PassedCourse from "./PassedCourse";
import RetakeCourse from "./RetakeCourse";

function CourseComponent({lessonName, lockedStatusItem, questionTypeArray ,redirectToLink}){
    const {lockedStatusJsonObj, setLockedStatusJsonObj} = useContext(LockedStatusObjContext)
    const lessons = useContext(LessonContext)
    const dispatch = useContext(LessonDispatchContext)
    const lessonState = lessons[lessonName];
    const numberOfCompletedQuestions = lessonState.numberOfCompletedQuestions
    const lessonCompleted = lessonState.lessonCompleted


    const [passedHealthLesson, setHealthCareLesson] = useState(false)
    useEffect(()=>{
        dispatch({ type: "RESET_LESSON", payload: { lesson: lessonState.id}});
    }, [])

    useEffect(()=>{
        const userPoints = lessonState.scores;
        const pointsRequired = lessonState.pointsToPassLesson;
        //console.log("Number of completed questions: " + numberOfCompletedQuestions);
        if (numberOfCompletedQuestions === lessonState.questions.length) {
            if (userPoints > pointsRequired) {
                //console.log("you have passed the lessons");
                const lockedStatus = JSON.parse(localStorage.getItem("lockedStatusData"));
                lockedStatus[lockedStatusItem] = false;
                localStorage.setItem("lockedStatusData", JSON.stringify(lockedStatus));
                setLockedStatusJsonObj(lockedStatus);
                setHealthCareLesson(true);
            } else {
                setHealthCareLesson(false);
            }
        }
    }, [lessonCompleted, numberOfCompletedQuestions]);

    const lessonCourseComponents = [
        <MultipleLessons state={lessonState} dispatch={dispatch} lessonId={0} />,
        <KeyWordsLessons state={lessonState} dispatch={dispatch} lessonId={1} />,
        <Question state={lessonState} questionType={questionTypeArray[0]} dispatch={dispatch} id={0}/>,
        <MultipleLessons state={lessonState} dispatch={dispatch} lessonId={2} />,
        <KeyWordsLessons state={lessonState} dispatch={dispatch} lessonId={3} />,
        <Question state={lessonState} questionType={questionTypeArray[1]} dispatch={dispatch} id={1}/>,
        <MultipleLessons state={lessonState} dispatch={dispatch} lessonId={4} />,
        <KeyWordsLessons state={lessonState} dispatch={dispatch} lessonId={5} />,
        <Question state={lessonState} questionType={questionTypeArray[2]} dispatch={dispatch} id={2}/>,
        <CourseSummary state={lessonState} dispatch={dispatch} lessonId={8}/>
        /*  <MultipleLessons state={healthcareLessonsState} dispatch={dispatch} lessonId={6} />,
          <KeyWordsLessons state={healthcareLessonsState} dispatch={dispatch} lessonId={7} />,
          <Question state={healthcareLessonsState} questionType={"matching"} dispatch={dispatch} id={3}/>,
          <CourseSummary state={healthcareLessonsState} dispatch={dispatch} lessonId={8}/>*/
    ];
    //Math.min is used to ensure that the component index does not exceed the maximum index of the lessonComponents Array
    const currentComponentIndex = Math.min(
        lessonState.numberOfCompletedLessons + lessonState.numberOfCompletedQuestions,
        lessonCourseComponents.length - 1
    );

    if (lessonCompleted) {
        if(passedHealthLesson){
            return <PassedCourse to={redirectToLink} />;
        }else{
            return <RetakeCourse/>
        }

    } else {
        return lessonCourseComponents[currentComponentIndex];
    }

}

export default CourseComponent