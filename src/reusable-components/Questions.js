import QuestionContextProvider from "../context/QuestionsContext";
import TrueOrFalseComponent from "./TrueOrFalseComponent";
import MulitpleChoiceQuestions from "./MulitpleChoiceQuestions";
import FreeFormQuestions from "./FreeForm";
import MatchingOptionsQuestions from "./MatchingOptionsQuestions";



function Question({questionType, state, dispatch, id}){
    return(
            <QuestionContextProvider state={state} dispatch={dispatch}>
                {questionType === "trueorfalse" && <TrueOrFalseComponent id={id} />}
                {questionType === "mcq" && <MulitpleChoiceQuestions id={id} />}
                {questionType === "matching" && <MatchingOptionsQuestions id={id} />}
                {questionType === "free" && <FreeFormQuestions />}
            </QuestionContextProvider>
        )

}
export default Question
