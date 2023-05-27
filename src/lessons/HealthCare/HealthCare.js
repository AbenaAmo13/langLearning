import {useContext, useEffect, useState} from "react";
import MultipleLessons from "../../reusable-components/MultipleLessons";
import {LessonContext, LessonDispatchContext} from "../../context/GlobalStateContext";
import KeyWordsLessons from "../../reusable-components/KeyWordsLessons";
import Question from "../../reusable-components/Questions";
import CourseSummary from "../../reusable-components/CourseSummary";
import {LockedStatusObjContext} from "../../App";
import PassedCourse from "../../reusable-components/PassedCourse";
import RetakeCourse from "../../reusable-components/RetakeCourse";
import CourseComponent from "../../reusable-components/CourseComponent";

function HealthCare(){
    const questionTypeArray=["matching", "mcq", "trueorfalse"]
    // Dynamic lesson components data
    const lessonComponentsData = [
        { type: 'MultipleLessons', props: {lessonId: 0} },
        { type: 'KeyWordsLessons', props:{lessonId: 1} },
        { type: 'Questions', props:{questionType: questionTypeArray[0], id: 0} },
        { type: 'MultipleLessons', props: {lessonId: 2} },
        { type: 'KeyWordsLessons', props:{lessonId: 3} },
        { type: 'Questions', props:{questionType: questionTypeArray[1], id: 1} },
        { type: 'MultipleLessons', props: {lessonId: 4} },
        { type: 'KeyWordsLessons', props:{lessonId: 5} },
        { type: 'Questions', props:{questionType: questionTypeArray[2], id: 2} },
        { type: 'CourseSummary', props:{lessonId: 2}}

        // Add more lesson component data objects as needed
    ];
    return(
        <div>
            <CourseComponent
                lessonName="HealthCareLessons"
                lockedStatusItem="Education"
                redirectToLink="/Health"
                lessonComponentsData = {lessonComponentsData}
            />
        </div>
    )





    /*const {lockedStatusJsonObj, setLockedStatusJsonObj} = useContext(LockedStatusObjContext)
    const lessons = useContext(LessonContext)
    const dispatch = useContext(LessonDispatchContext)
    const healthcareLessonsState = lessons.HealthCareLessons;
    const numberOfCompletedLessons = healthcareLessonsState.numberOfCompletedLessons
    const numberOfCompletedQuestions = healthcareLessonsState.numberOfCompletedQuestions
    const lessonCompleted = healthcareLessonsState.lessonCompleted


    const [passedHealthLesson, setHealthCareLesson] = useState(false)
    useEffect(()=>{
        dispatch({ type: "RESET_LESSON", payload: { lesson: healthcareLessonsState.id}});
    }, [])

    useEffect(()=>{
        const userPoints = healthcareLessonsState.scores;
        const pointsRequired = healthcareLessonsState.pointsToPassLesson;
        //console.log("Number of completed questions: " + numberOfCompletedQuestions);
        if (numberOfCompletedQuestions === healthcareLessonsState.questions.length) {
            if (userPoints > pointsRequired) {
                //console.log("you have passed the lessons");
                const lockedStatus = JSON.parse(localStorage.getItem("lockedStatusData"));
                lockedStatus.Education = false;
                localStorage.setItem("lockedStatusData", JSON.stringify(lockedStatus));
                setLockedStatusJsonObj(lockedStatus);
                setHealthCareLesson(true);
            } else {
                setHealthCareLesson(false);
            }
        }
    }, [lessonCompleted, numberOfCompletedQuestions]);



    const healthCareComponents = [
        <MultipleLessons state={healthcareLessonsState} dispatch={dispatch} lessonId={0} />,
        <KeyWordsLessons state={healthcareLessonsState} dispatch={dispatch} lessonId={1} />,
        <Question state={healthcareLessonsState} questionType={"matching"} dispatch={dispatch} id={0}/>,
        <MultipleLessons state={healthcareLessonsState} dispatch={dispatch} lessonId={2} />,
        <KeyWordsLessons state={healthcareLessonsState} dispatch={dispatch} lessonId={3} />,
        <Question state={healthcareLessonsState} questionType={"mcq"} dispatch={dispatch} id={1}/>,
        <MultipleLessons state={healthcareLessonsState} dispatch={dispatch} lessonId={4} />,
        <KeyWordsLessons state={healthcareLessonsState} dispatch={dispatch} lessonId={5} />,
        <Question state={healthcareLessonsState} questionType={"trueorfalse"} dispatch={dispatch} id={2}/>,
        <CourseSummary state={healthcareLessonsState} dispatch={dispatch} lessonId={8}/>
      /!*  <MultipleLessons state={healthcareLessonsState} dispatch={dispatch} lessonId={6} />,
        <KeyWordsLessons state={healthcareLessonsState} dispatch={dispatch} lessonId={7} />,
        <Question state={healthcareLessonsState} questionType={"matching"} dispatch={dispatch} id={3}/>,
        <CourseSummary state={healthcareLessonsState} dispatch={dispatch} lessonId={8}/>*!/
    ];
    //Math.min is used to ensure that the component index does not exceed the maximum index of the lessonComponents Array
    const currentComponentIndex = Math.min(
        healthcareLessonsState.numberOfCompletedLessons + healthcareLessonsState.numberOfCompletedQuestions,
        healthCareComponents.length - 1
    );

    if (lessonCompleted) {
        if(passedHealthLesson){
            return <PassedCourse to="/Education" />;
        }else{
            return <RetakeCourse/>
        }

    } else {
        return healthCareComponents[currentComponentIndex];
    }
*/
}

export default HealthCare