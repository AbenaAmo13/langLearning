import QuestionContextProvider from "../context/Questions";
import TrueOrFalseComponent from "./TrueOrFalseComponent";
import MulitpleChoiceQuestions from "./MulitpleChoiceQuestions";
import FreeFormQuestions from "./FreeForm";



function Question({questionType, state, dispatch}){
    return(
            <QuestionContextProvider state={state} dispatch={dispatch}>

                {questionType === "trueorfalse" && <TrueOrFalseComponent />}
                {questionType === "mcq" && <MulitpleChoiceQuestions />}
                {questionType === "free" && <FreeFormQuestions />}

            </QuestionContextProvider>
        )

}
export default Question
