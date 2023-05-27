import CourseComponentSimplified from "../../reusable-components/CourseComponentMoreSimplified";

function Education(){
    const questionTypeArray=["matching", "mcq", "trueorfalse"]
    // Dynamic lesson components data
    const lessonComponentsData = [
        { type: 'MultipleLessons', props: {lessonId: 0} },
        { type: 'KeyWordsLessons', props:{lessonId: 1} },
        { type: 'Questions', props:{questionType: questionTypeArray[0], id: 0} },
        // Add more lesson component data objects as needed
    ];
    return(
        <div>
            <CourseComponentSimplified
                lessonName="EducationLessons"
                lockedStatusItem="Identification"
                redirectToLink="/Id"
                lessonComponentsData = {lessonComponentsData}
            />
        </div>
    )
}

export default Education