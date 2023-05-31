import MultipleLessons from "../../reusable-components/MultipleLessons";
import KeyWordsLessons from "../../reusable-components/KeyWordsLessons";
import CourseSummary from "../../reusable-components/CourseSummary";
import CourseComponent from "../../reusable-components/CourseComponent";
import lesson1Image from "../../images/lessonCourseImage/course_intro.webp";
import courseIntroTwi from "../../audios/basics/course_intro_twi_full.mp3";
import courseIntroEnglish from "../../audios/basics/course_intro_english.mp3";

function Basics() {
    const questionTypeArray=["trueorfalse", "mcq"]
    const basicsPromptData = {
        cardTextContent:[
            "For this section, we will be going through the topics that you will cover in the application. To complete this course and start the next one, you must get at least 7 questions right",
            "To start click Yes. If you aren't ready to start then click No"
        ],
        quizImage : lesson1Image,
        cardTitle: "Course Outline",
        cardTitleTwi: "twiTitle",
        EnglishAudio: courseIntroEnglish,
        TwiAudio: courseIntroTwi,
    }
    // Dynamic lesson components data
    const lessonComponentsData = [
        { type: 'CourseIntroduction', props: {id: 0, startCoursePromptData: basicsPromptData}},
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


