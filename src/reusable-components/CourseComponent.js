import {useContext, useEffect, useState} from "react";
import {LessonContext, LessonDispatchContext} from "../context/GlobalStateContext";
import {LockedStatusObjContext} from "../App.js";
import PassedCourse from "./PassedCourse";
import RetakeCourse from "./RetakeCourse";
import MultipleLessons from "./MultipleLessons";
import Questions from "./Questions";
import KeyWordsLessons from "./KeyWordsLessons";
import CourseSummary from "./CourseSummary";
import CourseIntroduction from "./CourseIntroduction";

function CourseComponent({lessonName, lockedStatusItem,redirectToLink, lessonComponentsData, failRedirectTo, progressKeyName}){
    const {lockedStatusJsonObj, setLockedStatusJsonObj} = useContext(LockedStatusObjContext)
    const lessons = useContext(LessonContext)
    const dispatch = useContext(LessonDispatchContext)
    const lessonState = lessons[lessonName];
    const numberOfCompletedQuestions = lessonState.numberOfCompletedQuestions
    const numberOfCompletedLessons = lessonState.numberOfCompletedLessons
    const lastLessonIndex = lessonState.currentLessonIndex
    const lessonCompleted = lessonState.lessonCompleted

    const [passedLesson, setPassedLesson] = useState(false)
    useEffect(()=>{
        dispatch({ type: "RESET_LESSON", payload: { lesson: lessonState.id}});
    }, [])

    useEffect(()=>{
        const userPoints = lessonState.scores;
        const pointsRequired = lessonState.pointsToPassLesson;
        const userScores = JSON.parse(localStorage.getItem("userScores"));
        userScores[lessonState.userScoreName] = userPoints
        localStorage.setItem("userScores", JSON.stringify(userScores));
        if (numberOfCompletedQuestions === lessonState.questions.length) {
            if (userPoints > pointsRequired) {
                //console.log("you have passed the lessons");
                const lockedStatus = JSON.parse(localStorage.getItem("lockedStatusData"));
                lockedStatus[lockedStatusItem] = false;
                localStorage.setItem("lockedStatusData", JSON.stringify(lockedStatus));
                setLockedStatusJsonObj(lockedStatus);
                setPassedLesson(true);
            } else {
                setPassedLesson(false);
            }
        }
    }, [lessonCompleted, numberOfCompletedQuestions]);

    useEffect(()=>{
        /*console.log("lessonState:", lessonState);
        console.log("lessonCompleted:", lessonCompleted);
        console.log("numberOfCompletedQuestions:", numberOfCompletedQuestions);
        console.log("numberOfCompletedLessons:", numberOfCompletedLessons);
        console.log("progressKeyName:", progressKeyName);*/
        if(numberOfCompletedLessons > 0){
            let userProgress={
                numberOfCompletedQuestion: numberOfCompletedQuestions ,
                numberOfCompletedLessons: numberOfCompletedLessons,
                lessonCompleted: lessonCompleted,
                lastLessonIndex: lastLessonIndex,
                currentQuestionIndex: lessonState.currentQuestionIndex,
                correctNumberOfAnswers: lessonState.correctNumberOfAnswers,
                questionStarted: lessonState.questionStarted,
                keyLessonState: lessonState.keyLessonState,
                savedUserProgress: true,
                scores:lessonState.scores

            }
            localStorage.setItem(progressKeyName, JSON.stringify(userProgress))
        }


    }, [lessonCompleted, numberOfCompletedQuestions, numberOfCompletedLessons, lastLessonIndex, lessonState])


    //Used for component mapping
    const componentMapping = {
        MultipleLessons,
        Questions,
        KeyWordsLessons,
        CourseSummary,
      CourseIntroduction,
    };
    // Generate lesson components dynamically
    const lessonCourseComponents = lessonComponentsData.map((componentData, index) => {
        const ComponentName =componentMapping[componentData.type];
        return <ComponentName {...componentData.props} state={lessonState} dispatch={dispatch} key={index} />;
    });
    const currentComponentIndex = Math.min(
        lessonState.numberOfCompletedLessons + lessonState.numberOfCompletedQuestions,
        lessonCourseComponents.length - 1
    );

    if (lessonCompleted) {
        if(passedLesson){
            return <PassedCourse to={redirectToLink} />;
        }else{
            return <RetakeCourse to={failRedirectTo} state={lessonState} dispatch={dispatch}/>
        }

    } else {
        return lessonCourseComponents[currentComponentIndex];
    }

}

export default CourseComponent