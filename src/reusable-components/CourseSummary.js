import AudioPlayer from "./LessonAudioPlayer";
import {healthCareCourseSummary} from "../lessons/HealthCare/HealthCareLessonData";

function CourseSummary({state, dispatch, lessonId}){
    const currentLesson = state.lessons[lessonId]
    const courseSummaryItems = currentLesson.courseListItems.map((courseLessons, index) =>
        <li key={index}>{courseLessons}</li>
    );

    const previousComponent=()=>{
        dispatch({ type: "DECREASE_NUMBER_OF_LESSONS_COMPLETED", payload: { lesson: state.id, value: 1 }});

    }

    const nextComponent=()=>{
        dispatch({ type: "SET_LESSON_COMPLETED", payload: { lesson: state.id, completed:true }});



    }
         return (<div className="overall_lessons_container">
             <div className="lesson_card_visuals lessonBlueOutline">
                 <div className="lesson_card_media">

                 </div>
                 <div className="lesson_card_keywords">
                     <h2>{currentLesson.courseSummaryTitle}</h2>
                     <p>{currentLesson.courseSummaryParagraph}</p>
                     <ol>
                         {courseSummaryItems}
                     </ol>
                     <p>To complete and find out if you passed the course, click continue </p>
                     <p>If you want to go back to the last set of questions click Back </p>
                 </div>
                 <AudioPlayer
                 englishAudio={currentLesson.EnglishAudio}
                 englishAudioName={currentLesson.EnglishAudio}
                 twiAudio={currentLesson.TwiAudio}
                 twiAudioName={currentLesson.TwiAudio}


                 />
                 <div className="keyword_button_div">
                     <button className="lesson_buttons icon-buttons" onClick={()=>previousComponent()}>
                         <i className="material-icons" alt="forward arrow icon">arrow_back</i>
                         <p>Back</p></button>
                     <button className="lesson_buttons icon-buttons" onClick={()=> nextComponent()}>
                         <p>Continue</p>
                         <i className="material-icons" alt="forward arrow icon">arrow_forward</i>
                     </button>
                 </div>


             </div>
         </div>
 )
}
export  default CourseSummary