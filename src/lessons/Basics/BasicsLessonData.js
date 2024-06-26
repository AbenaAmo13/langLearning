import ghanaGovernment from "../../images/greygovernment.webp"
import healthImage from "../../images/greyhealthcare.webp"
import educationalImage from "../../images/greyeducation.webp"
import jobs from "../../images/greyjobs.webp"
import id from "../../images/greyid.webp"
import question1english from "../../audios/courseoutline/trueorfalsequestions/question1english.mp3"
import question1twi from "../../audios/courseoutline/trueorfalsequestions/question1.mp3"
import question2twi from "../../audios/courseoutline/trueorfalsequestions/question2twi.mp3"
import question2English from "../../audios/courseoutline/trueorfalsequestions/question2english.mp3"
import question3twi from "../../audios/courseoutline/trueorfalsequestions/question3twi.mp3"
import  question3english from "../../audios/courseoutline/trueorfalsequestions/question3english.mp3"
import question4twi from "../../audios/courseoutline/trueorfalsequestions/question4twi.mp3"
import question4english from "../../audios/courseoutline/trueorfalsequestions/question4english.mp3"
import question5twi from "../../audios/courseoutline/trueorfalsequestions/question5twi.mp3"
import question5english from "../../audios/courseoutline/trueorfalsequestions/question5english.mp3"


import mcqQuestion1 from "../../audios/courseoutline/mcquestions/mcquestion1twi.mp3"
import mcqQuestion1English from "../../audios/courseoutline/mcquestions/mcquestion1english.mp3"
import mcqQuestion2 from "../../audios/courseoutline/mcquestions/mcquestion2.mp3"
import mcQuestion2English from "../../audios/courseoutline/mcquestions/mcquestion2english.mp3"
import mcqQuestion3 from "../../audios/courseoutline/mcquestions/mcquestion3.mp3"
import mcqQuestion3english from "../../audios/courseoutline/mcquestions/mcquestion3english.mp3"
import mcqQuestion4 from "../../audios/courseoutline/mcquestions/mcquestion4.mp3"
import mcqQuestion4English from "../../audios/courseoutline/mcquestions/mcquestion4english.mp3"
import mcQuestion5 from "../../audios/courseoutline/mcquestions/mcquestion5.mp3"
import mcqQuestion5English from "../../audios/courseoutline/mcquestions/mcquestion5english.mp3"


import answerIsBanking from "../../audios/courseoutline/mcquestions/incorrectaudios/answerisbanking.mp3"
import answerIsEducation from "../../audios/courseoutline/mcquestions/incorrectaudios/answeriseducation.mp3"
import answerIsGhanaCard from "../../audios/courseoutline/mcquestions/incorrectaudios/answerisGhanaCard.mp3"
import answerIsWorkPlaceLaws from "../../audios/courseoutline/mcquestions/incorrectaudios/answerisworkplacelaws.mp3"
import answerIsNHIS from "../../audios/courseoutline/mcquestions/incorrectaudios/answerisnhis.mp3"

import answerIsBankingTwi from "../../audios/courseoutline/mcquestions/incorrectaudios/answerisBankingTwi.mp3"
import answerIsEducationTwi from "../../audios/courseoutline/mcquestions/incorrectaudios/answeriseducationTwi.mp3"
import answerIsGhanaCardTwi from "../../audios/courseoutline/mcquestions/incorrectaudios/answerisGhanaCardTwi.mp3"
import answerIsWorkPlaceLawsTwi from "../../audios/courseoutline/mcquestions/incorrectaudios/answerisworkplacelawsTwi.mp3"
import answerIsNHISTwi from "../../audios/courseoutline/mcquestions/incorrectaudios/answerisnhisTwi.mp3"



import theGovernmentEnglishAudio from "../../audios/courseoutline/thegovernmentenglish.mp3"
import theGovernmentTwiAudio from "../../audios/courseoutline/thegovernmenttwi.mp3"
import healthCareTwiAudio from "../../audios/courseoutline/healthcaretwi.mp3"
import healthCareEnglishAudio from "../../audios/courseoutline/healthCareEnglishAudio.mp3"
import educationEnglishAudio from "../../audios/courseoutline/educationEnglishAudio.mp3"
import educationTwiAudio from "../../audios/courseoutline/educationTwi.mp3"
import idTwiAudio from "../../audios/courseoutline/idtwi.mp3"
import identificationEnglishAudio from "../../audios/courseoutline/identificationenglishAudio.mp3"
import jobsEnglishAudio from "../../audios/courseoutline/jobsEnglishAudio.mp3"
import jobsTwiAudio from "../../audios/courseoutline/jobstwi.mp3"


import aban from "../../audios/courseoutline/keywords/aban.mp3"
import educationTwi from "../../audios/courseoutline/keywords/edcationtwi.mp3"
import healthCareTwi from "../../audios/courseoutline/keywords/healthCareTwi.mp3"
import identificationTwi from "../../audios/courseoutline/keywords/identificationtwi.mp3"
import jobsTwi from "../../audios/courseoutline/keywords/jobstwi.mp3"

import educationenglishkeyword from "../../audios/courseoutline/keywords/educationenglish.mp3"
import identificationEnglishKeyword from "../../audios/courseoutline/keywords/identificationkeywordenglish.mp3"
import healthcarekeywordenglish from "../../audios/courseoutline/keywords/healthcare.mp3"
import jobsEnglishKeyWord from "../../audios/courseoutline/keywords/jobsEnglish.mp3"
import thegovernmentenglishKeyWord from "../../audios/courseoutline/keywords/thegovernmentenglish.mp3"

import courseSummaryEnglish from "../../audios/courseoutline/courseSummaryEnglish.mp3"
import courseSummaryTwi from "../../audios/courseoutline/courseSummaryTwi.mp3"




export const basicLessonData=[
    {
        Image: ghanaGovernment,
        EnglishWord: "The Government",
        TwiWord: "Aban",
        TwiAudio: theGovernmentTwiAudio,
        EnglishAudio: theGovernmentEnglishAudio,
        KeyMessageEnglish: "We will be going over the course outline for the application. By the end of the entire course, you should know how the government helps us with our healthcare, education, identification and jobs. ",
    },

    {
        Image: healthImage,
        EnglishWord: "Health Care",
        TwiWord: "Apumoden",
        TwiAudio: healthCareTwiAudio,
        EnglishAudio: healthCareEnglishAudio,
        KeyMessageEnglish: 'For this topic, we will learn how the government helps us with our healthcare. We will look at the National Health Insurance Scheme, free maternal healthcare and other things that the government does to improve our health. We will also learn ways that we can keep ourselves healthy.'
    },
    {
        Image: educationalImage,
        EnglishWord: "Education",
        TwiWord: "Adesua",
        TwiAudio: educationTwiAudio,
        EnglishAudio: educationEnglishAudio,
        KeyMessageEnglish:'For this topic, we will learn how the government helps us to get education. We will look at Free SHS, free primary education, loans and scholarships that the government provide to help us attain quality education. ',
    },
    {
        Image: id,
        EnglishWord: "Ghana and ID",
        TwiWord: "TwiID",
        TwiAudio: idTwiAudio,
        EnglishAudio: identificationEnglishAudio,
        KeyMessageEnglish:'For this topic, we will look at ways and that the government helps us to identify ourselves including birth/death certificates, passports, and Ghana cards and their importance.',
    },
    {
        Image: jobs,
        EnglishWord: "Jobs",
        TwiWord: "Adwuma",
        TwiAudio: jobsTwiAudio,
        EnglishAudio: jobsEnglishAudio,
        KeyMessageEnglish:"For this topic, we will look at the ways that the government helps us to make our job life easier including job creation programs, workplace laws, taxes and pensions.",
    }
]


export const trueOrFalseQuestions=[
    {
        id: 1,
        Question: " The course will cover how the government helps us with healthcare, education, identification and jobs",
        TwiAudio:question1twi ,
        EnglishAudio: question1english,
        Answer:'True',
        isAnswered: false,
        componentScore : "BasicsScore",
        type: "trueorfalse",
    },
    {
        id: 2,
        Question: "The course will cover ways that we can keep ourselves healthy",
        TwiAudio: question2twi,
        EnglishAudio: question2English,
        Answer:'True',
        isAnswered: false,
        componentScore : "BasicsScore",
        type: "trueorfalse",
    },

    {
        id: 3,
        Question: " The course will not cover Free SHS",
        TwiAudio: question3twi,
        EnglishAudio: question3english,
        Answer:'False',
        isAnswered: false,
        componentScore : "BasicsScore",
        type: "trueorfalse",
    },

    {

        id:4,
        Question: "Job creation programs and workplace laws are some of the ways that the government helps to make our life easier",
        EnglishAudio:question4english,
        TwiAudio: question4twi,
        Answer:'True',
        isAnswered: false,
        componentScore : "BasicsScore",
        type: "trueorfalse",
    },
    {
        id: 5,
        Question: "The government provide services to improve our health, education, and well being",
        EnglishAudio: question5english,
        TwiAudio: question5twi,
        Answer:'True',
        isAnswered: false,
        componentScore : "BasicsScore",
        type: "trueorfalse",
    },
]



export const basicsMCQS =[
    {
        id: 1,
        Question: "Which of the following is not going to be covered in this course?",
        Options: ["Banking", "Education", "HealthCare"],
        EnglishAudio: mcqQuestion1English,
        TwiAudio:mcqQuestion1,
        IncorrectEnglishAudio: answerIsBanking,
        IncorrectTwiAudio: answerIsBankingTwi,
        Answer: "Banking",
        isAnswered: false,
        componentScore : "BasicsScore",
        type: "mcqs",
    },
    {
        id: 2,
        Question: "Free SHS is made to help students get free... ",
        Options: ["Education", "HealthCare", "Money"],
        EnglishAudio: mcQuestion2English,
        TwiAudio:mcqQuestion2,
        IncorrectEnglishAudio: answerIsEducation,
        IncorrectTwiAudio: answerIsEducationTwi,
        Answer: "Education",
        isAnswered: false,
        componentScore : "BasicsScore"

    },
    {
        id: 3,
        Question: "Which of the following is used to help us officially identify ourselves in Ghana?",
        Options: ["Our names", "Phones", "Ghana Card"],
        EnglishAudio: mcqQuestion3english,
        TwiAudio:mcqQuestion3,
        IncorrectEnglishAudio: answerIsGhanaCard,
        IncorrectTwiAudio: answerIsGhanaCardTwi,
        Answer: "Ghana Card",
        isAnswered: false,
        componentScore : "BasicsScore",
    },
    {
        id: 4,
        Question: "Which of these does the government use to help make our job life easier?",
        Options: ["Passports", "Workplace laws", "National Health Insurance"],
        EnglishAudio: mcqQuestion4English,
        TwiAudio:mcqQuestion4,
        IncorrectEnglishAudio: answerIsWorkPlaceLaws,
        IncorrectTwiAudio: answerIsWorkPlaceLawsTwi,
        Answer: "Workplace laws",
        isAnswered: false,
        componentScore : "BasicsScore",
    }
    ,
    {
        id: 5,
        Question: "Which of these does the government use to give everyone access to healthcare?",
        Options: ["National Health Insurance Scheme", "Passports", "Free SHS"],
        EnglishAudio: mcqQuestion5English,
        TwiAudio:mcQuestion5,
        IncorrectEnglishAudio: answerIsNHIS,
        IncorrectTwiAudio: answerIsNHISTwi,
        Answer: "National Health Insurance Scheme",
        isAnswered: false,
        componentScore : "BasicsScore"
    }
]

export const FreeForm =[
    {

    }

]

export const basicsKeyWords=[
    {
        Image:"",
        EnglishWord: "The Government",
        TwiWord: "Aban",
        TwiAudio:aban,
        EnglishAudio:thegovernmentenglishKeyWord,
        KeyMessageEnglish: ""
    },
    {
        Image:"",
        EnglishWord: "Health Care",
        TwiWord: "Apumoden",
        TwiAudio:healthCareTwi,
        EnglishAudio:healthcarekeywordenglish,
        KeyMessageEnglish: ""
    },
    {
        Image:"",
        EnglishWord: "Education",
        TwiWord: "Adesua",
        TwiAudio:educationTwi,
        EnglishAudio:educationenglishkeyword,
        KeyMessageEnglish: ""
    },
    {
        Image:"",
        EnglishWord: "Jobs",
        TwiWord: "Adwuma",
        TwiAudio:jobsTwi,
        EnglishAudio:jobsEnglishKeyWord,
        KeyMessageEnglish: ""
    },
    {
        Image:"",
        EnglishWord: "Ghana Identification",
        TwiWord: "Dɛ ɛma obi yɛ Ghanani",
        TwiAudio:identificationTwi,
        EnglishAudio:identificationEnglishKeyword,
        KeyMessageEnglish: ""
    }



]


/*Course Summary Data*/
export const basicsCourseSummary={
    courseSummaryImage: "",
    courseSummaryTitle: "Course Outline Summary",
    courseSummaryParagraph: "In this lesson, you have been introduced to the topics that we will cover in the application which includes: ",
    courseListItems : ["Health Care", "Education", "Jobs", "Ghana and Identification"],
    TwiAudio: courseSummaryTwi,
    EnglishAudio:courseSummaryEnglish ,


}







