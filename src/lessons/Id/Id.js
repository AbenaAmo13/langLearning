import lesson1Image from "../../images/lessonCourseImage/course_intro.webp";
import courseIntroEnglish from "../../audios/basics/course_intro_english.mp3";
import courseIntroTwi from "../../audios/basics/course_intro_twi_full.mp3";
import CourseComponent from "../../reusable-components/CourseComponent";

function Id(){
    const questionTypeArray=["trueorfalse", "mcq"]
    const basicsPromptData = {
        cardTextContent:[
            "For this section, we will be going through how the government helps us to identify ourselves. To complete this course and start the next one, you must get at least 4 questions right. Click the button with the triangle to start/restart or click the button with the circle to continue from where you last left off.",
        ],

        quizImage : lesson1Image,
        cardTitle: "Identification",
        cardTitleTwi: "twiTitle",
        EnglishAudio: courseIntroEnglish,
        TwiAudio: courseIntroTwi,
        progressKeyName: "ID"
    }
    // Dynamic lesson components data
    const lessonComponentsData = [
        { type: 'CourseIntroduction', props: {id: 0, startCoursePromptData: basicsPromptData}},
        { type: 'MultipleLessons', props: {lessonId: 0} },
        { type: 'KeyWordsLessons', props:{lessonId: 1} },
        { type: 'Questions', props:{questionType: questionTypeArray[0], id: 0} },
        { type: 'CourseSummary', props:{lessonId: 2}}
    ];
    return(
        <div>
            <CourseComponent
                lessonName="IdLessons"
                lockedStatusItem="Jobs"
                redirectToLink="/Jobs"
                lessonComponentsData = {lessonComponentsData}
                failRedirectTo="/Id"
                progressKeyName="ID"
            />
        </div>
    )
}
export default Id