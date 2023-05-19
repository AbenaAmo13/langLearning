import AudioPlayer from "./LessonAudioPlayer";
import {healthCareCourseSummary} from "../lessons/HealthCare/HealthCareLessonData";

function CourseSummary({state, dispatch, lessonId}){
    //const currentLesson = state.lessons[lessonId]
    const courseSummaryItems = healthCareCourseSummary.courseListItems.map(courseLessons =>
        <li>{courseLessons}</li>
    );

    const previousComponent=()=>{
        dispatch({ type: "DECREASE_NUMBER_OF_LESSONS_COMPLETED", payload: { lesson: state.id, value: 1 }});

    }

    const nextComponent=()=>{

    }
         return (<div className="overall_lessons_container">
             <div className="lesson_card_visuals lessonBlueOutline">
                 <div className="lesson_card_media">

                 </div>
                 <div className="lesson_card_keywords">
                     <h2>{healthCareCourseSummary.courseSummaryTitle }</h2>
                     <p>During this course you have learnt the following: </p>
                     <ol>
                         {courseSummaryItems}
                     </ol>
                 </div>
                 <AudioPlayer/>
                 <div className="keyword_button_div">
                     <button className="lesson_buttons icon-buttons" onClick={()=>previousComponent()}>
                         <i className="material-icons" alt="forward arrow icon">arrow_back</i>
                         <p>Back</p></button>
                     <button className="lesson_buttons icon-buttons">
                         <p>Continue</p>
                         <i className="material-icons" alt="forward arrow icon">arrow_forward</i>
                     </button>
                 </div>

             </div>
         </div>
 )
}
export  default CourseSummary