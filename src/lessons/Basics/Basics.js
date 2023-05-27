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
import KeyWordsLessons from "../../reusable-components/KeyWordsLessons";
import CourseSummary from "../../reusable-components/CourseSummary";
import MultipleLessonsParallel from "../../reusable-components/MultipleLessonsParallel";
import CourseComponentSimplified from "../../reusable-components/CourseComponentMoreSimplified";

function Basics() {
    const questionTypeArray=["trueorfalse", "mcq"]
    // Dynamic lesson components data
    const lessonComponentsData = [
        { type: 'MultipleLessons', props: {lessonId: 0} },
        { type: 'KeyWordsLessons', props:{lessonId: 1} },
        { type: 'Questions', props:{questionType: questionTypeArray[0], id: 0} },
        { type: 'Questions', props:{questionType: questionTypeArray[1], id: 1} },
        { type: 'CourseSummary', props:{lessonId: 2}}
        // Add more lesson component data objects as needed
    ];
    return(
        <div>
            <CourseComponentSimplified
                lessonName="BasicLessons"
                lockedStatusItem="Health"
                redirectToLink="/Health"
                lessonComponentsData = {lessonComponentsData}
            />
        </div>
    )


}


export default Basics;