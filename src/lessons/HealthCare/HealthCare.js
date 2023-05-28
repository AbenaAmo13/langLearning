import MultipleLessons from "../../reusable-components/MultipleLessons";
import KeyWordsLessons from "../../reusable-components/KeyWordsLessons";
import CourseSummary from "../../reusable-components/CourseSummary";
import CourseComponent from "../../reusable-components/CourseComponent";
import lesson1Image from "../../images/lessonCourseImage/course_intro.webp";

function HealthCare(){
    const questionTypeArray=["matching", "mcq", "trueorfalse"]
    const healthCarePromptData = {
        cardTextContent:[
            "For this section, we will be going introducing the topics that you will cover for the application. To complete this course and start the next one, you must get at least 7 questions right"
        ],
        quizImage : lesson1Image,
        cardTitle: "Course Outline",
        cardTitleTwi: "twiTitle",
        EnglishAudio: "",
        TwiAudio: "",
    }
    // Dynamic lesson components data
    const lessonComponentsData = [
        { type: 'StartCourseComponent', props: {id: 0, startCoursePromptData: healthCarePromptData}},
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
}

export default HealthCare