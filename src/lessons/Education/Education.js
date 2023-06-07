import CourseComponent from "../../reusable-components/CourseComponent";
import lesson1Image from "../../images/lessonCourseImage/course_intro.webp";
import courseIntroEnglish from "../../audios/healthCare/courseIntroEnglish.mp3";
import courseIntroTwi from "../../audios/healthCare/courseIntroTwi.mp3";
function Education(){
    const questionTypeArray=["matching", "mcq", "trueorfalse"]
    const educationPromptData = {
        cardTextContent:[
            "For this section, we will be going over how the Government of Ghana help us with our education using the Ghana Education Service. Click the button with the triangle to start/restart or click the button with the square to continue from where you last left off."
        ],
        quizImage : lesson1Image,
        cardTitle: "Ghana Education Service",
        cardTitleTwi: "twiTitle",
        EnglishAudio: courseIntroEnglish,
        TwiAudio: courseIntroTwi,
        progressKeyName: "Education"
    }
    // Dynamic lesson components data
    const lessonComponentsData = [
        { type: 'CourseIntroduction', props: {id: 0, startCoursePromptData: educationPromptData}},
        { type: 'MultipleLessons', props: {lessonId: 0} },
        { type: 'KeyWordsLessons', props:{lessonId: 1} },
        { type: 'Questions', props:{questionType: questionTypeArray[0], id: 0}},
        { type: 'CourseSummary', props:{lessonId: 5}}
    ];
    return(
        <div>
            <CourseComponent
                lessonName="EducationLessons"
                lockedStatusItem="Identification"
                redirectToLink="/Id"
                lessonComponentsData = {lessonComponentsData}
                failRedirectTo="/Education"
            />
        </div>
    )
}
export default Education