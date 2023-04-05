import CardComponent from "./CardComponent";

function QuestionPrompt({state,dispatch, questionPromptData}) {
  function notReady(){
      dispatch({ type: "SET_LESSON_COMPLETED", payload: { lesson: state.id, completed: false }});
    }
    function ready(){
        if(questionPromptData.questionType ==="trueorfalse"){
            dispatch({ type: "RESET_QUESTION", payload: { lesson: state.id, index: 0}});
            if(state.firstQuestionTypeRendered === "trueorfalse"){
                dispatch({type:"RESET_SCORE",  payload: { lesson: state.id, score: questionPromptData.questions.componentScore}})
            }
            //console.log(state.questions)
        }else if(questionPromptData.questionType==="mcqs"){
            dispatch({ type: "RESET_QUESTION", payload: { lesson: state.id, index: 1}});
            if(state.firstQuestionTypeRendered === "mcqs"){
                dispatch({type:"RESET_SCORE",  payload: { lesson: state.id, score: questionPromptData.questions.componentScore}})
            }
        }
        dispatch({ type: "SET_QUESTION_STARTED", payload: { lesson: state.id, started: true }});
    }

    return(
        <div>
           <CardComponent
           cardImage={questionPromptData.quizImage}
           cardTitle={questionPromptData.cardTitle}
           cardTextContent={questionPromptData.cardTextContent}
           englishAudio={questionPromptData.englishAudio}
           twiAudio={questionPromptData.twiAudio}
           />

            <div className="question_buttons">
                <button  className="lesson_buttons icon-buttons" onClick={()=>ready()}>
                    <p>Yes</p>
                    <i className="material-icons" alt="help icon">thumb_up_alt</i>
                </button>
                <button  className="lesson_buttons icon-buttons" onClick={()=>notReady()}>
                    <p>No</p>
                    <i className="material-icons" alt="help icon">thumb_down_off_alt</i>
                </button>
            </div>

        </div>

    )
}

export default QuestionPrompt;