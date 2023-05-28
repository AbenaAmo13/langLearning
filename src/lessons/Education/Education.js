import CourseComponent from "../../reusable-components/CourseComponent";
function Education(){
    const questionTypeArray=["matching", "mcq", "trueorfalse"]
    // Dynamic lesson components data
    const lessonComponentsData = [
        { type: 'MultipleLessons', props: {lessonId: 0} },
        { type: 'KeyWordsLessons', props:{lessonId: 1} },
        { type: 'Questions', props:{questionType: questionTypeArray[0], id: 0} },
    ];
    return(
        <div>
            <CourseComponent
                lessonName="EducationLessons"
                lockedStatusItem="Identification"
                redirectToLink="/Id"
                lessonComponentsData = {lessonComponentsData}
            />
        </div>
    )
}
export default Education