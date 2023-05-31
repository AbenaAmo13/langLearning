import MultipleLessons from "../../reusable-components/MultipleLessons";
import KeyWordsLessons from "../../reusable-components/KeyWordsLessons";
import CourseSummary from "../../reusable-components/CourseSummary";
import CourseComponent from "../../reusable-components/CourseComponent";
import lesson1Image from "../../images/lessonCourseImage/course_intro.webp";
import courseIntroEnglish from "../../audios/healthCare/courseIntroEnglish.mp3"
import courseIntroTwi from "../../audios/healthCare/courseIntroTwi.mp3"
function HealthCare(){
    const questionTypeArray=["matching", "mcq", "trueorfalse"]
    const healthCarePromptData = {
        cardTextContent:[
            "For this section, we will be going over how the Government of Ghana help us with our healthcare, If you are ready to start click yes, if not click no. "
        ],
        quizImage : lesson1Image,
        cardTitle: "Health Care",
        cardTitleTwi: "twiTitle",
        EnglishAudio: courseIntroEnglish,
        TwiAudio: courseIntroTwi,
    }
    // Dynamic lesson components data
    const lessonComponentsData = [
        { type: 'CourseIntroduction', props: {id: 0, startCoursePromptData: healthCarePromptData}},
        { type: 'MultipleLessons', props: {lessonId: 0} },
        { type: 'KeyWordsLessons', props:{lessonId: 1} },
        { type: 'Questions', props:{questionType: questionTypeArray[0], id: 0} },
        { type: 'MultipleLessons', props: {lessonId: 2} },
        { type: 'KeyWordsLessons', props:{lessonId: 3} },
        { type: 'Questions', props:{questionType: questionTypeArray[1], id: 1} },
        { type: 'MultipleLessons', props: {lessonId: 4} },
        { type: 'KeyWordsLessons', props:{lessonId: 5} },
        { type: 'Questions', props:{questionType: questionTypeArray[2], id: 2} },
        { type: 'CourseSummary', props:{lessonId: 6}}
    ];
    return(
        <div>
            <CourseComponent
                lessonName="HealthCareLessons"
                lockedStatusItem="Education"
                redirectToLink="/Education"
                lessonComponentsData = {lessonComponentsData}
                failRedirectTo="/Health"
            />
        </div>
    )
}

export default HealthCare