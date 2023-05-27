import MultipleLessons from "../../reusable-components/MultipleLessons";
import KeyWordsLessons from "../../reusable-components/KeyWordsLessons";
import CourseSummary from "../../reusable-components/CourseSummary";
import CourseComponent from "../../reusable-components/CourseComponent";

function Basics() {
    const questionTypeArray=["trueorfalse", "mcq"]
    // Dynamic lesson components data
    const lessonComponentsData = [
        { type: 'MultipleLessons', props: {lessonId: 0} },
        { type: 'KeyWordsLessons', props:{lessonId: 1} },
        { type: 'Questions', props:{questionType: questionTypeArray[0], id: 0} },
        { type: 'Questions', props:{questionType: questionTypeArray[1], id: 1} },
        { type: 'CourseSummary', props:{lessonId: 2}}
    ];
    return(
        <div>
            <CourseComponent
                lessonName="BasicLessons"
                lockedStatusItem="Health"
                redirectToLink="/Health"
                lessonComponentsData = {lessonComponentsData}
            />
        </div>
    )
}
export default Basics;


