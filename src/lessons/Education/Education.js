import CourseComponent from "../../reusable-components/CourseComponent";

function Education(){
    const questionTypeArray=["matching", "mcq", "trueorfalse"]
    return(
        <div>
           <CourseComponent
               lessonName="EducationLessons"
               lockedStatusItem="EducationLessons"
               questionTypeArray={questionTypeArray}
               redirectToLink="/Id"
           />
        </div>
    )
}

export default Education