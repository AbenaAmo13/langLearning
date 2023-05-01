import ghanaGovernment from "../../images/greygovernment.webp"
import healthImage from "../../images/greyhealthcare.webp"
import educationalImage from "../../images/greyeducation.webp"
import jobs from "../../images/greyjobs.webp"
import id from "../../images/greyid.webp"
import question1english from "../../audios/courseoutline/trueorfalsequestions/question1english.mp3"
import question1twi from "../../audios/courseoutline/trueorfalsequestions/question1.mp3"
import question2twi from "../../audios/courseoutline/trueorfalsequestions/question2twi.mp3"
import question3twi from "../../audios/courseoutline/trueorfalsequestions/question3twi.mp3"
import question4twi from "../../audios/courseoutline/trueorfalsequestions/question4twi.mp3"
import question5twi from "../../audios/courseoutline/trueorfalsequestions/question5twi.mp3"

import mcqQuestion1 from "../../audios/courseoutline/mcquestions/mcquestion1twi.mp3"
import mcqQuestion2 from "../../audios/courseoutline/mcquestions/mcquestion2.mp3"
import mcqQuestion3 from "../../audios/courseoutline/mcquestions/mcquestion3.mp3"
import mcqQuestion4 from "../../audios/courseoutline/mcquestions/mcquestion4.mp3"
import mcQuestion5 from "../../audios/courseoutline/mcquestions/mcquestion5.mp3"


import theGovernmentEnglishAudio from "../../audios/courseoutline/thegovernmentenglish.ogg"
import theGovernmentTwiAudio from "../../audios/courseoutline/thegovernmenttwi.mp3"
import healthCareTwiAudio from "../../audios/courseoutline/healthcaretwi.mp3"
import healthCareEnglishAudio from "../../audios/courseoutline/healthCareEnglishAudio.ogg"
import educationEnglishAudio from "../../audios/courseoutline/educationEnglishAudio.ogg"
import educationTwiAudio from "../../audios/courseoutline/educationTwi.mp3"
import idTwiAudio from "../../audios/courseoutline/idtwi.mp3"
import identificationEnglishAudio from "../../audios/courseoutline/identificationenglishAudio.ogg"
import jobsEnglishAudio from "../../audios/courseoutline/jobsEnglishAudio.ogg"
import jobsTwiAudio from "../../audios/courseoutline/jobstwi.mp3"


//

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
        ExplanationAudio:"" ,
        Answer:'True',
        isAnswered: false,
        componentScore : "BasicsScore",
        type: "trueorfalse",
    },
    {
        id: 2,
        Question: "The course will cover ways that we can keep ourselves healthy",
        TwiAudio: question2twi,
        EnglishAudio: "",
        Answer:'True',
        isAnswered: false,
        componentScore : "BasicsScore",
        type: "trueorfalse",
    },

    {
        id: 3,
        Question: " The course will not cover Free SHS",
        EnglishAudio: "",
        TwiAudio: question3twi,
        Answer:'False',
        isAnswered: false,
        componentScore : "BasicsScore",
        type: "trueorfalse",
    },

    {

        id:4,
        Question: "Job creation programs and workplace laws are some of the ways that the government helps to make our life easier",
        EnglishAudio: "",
        TwiAudio: question4twi,
        Answer:'True',
        isAnswered: false,
        componentScore : "BasicsScore",
        type: "trueorfalse",
    },
    {
        id: 5,
        Question: "The government provide services to improve our health, education, and well being",
        EnglishAudio: "",
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
        EnglishAudio: "",
        TwiAudio:mcqQuestion1,
        Answer: "Banking",
        isAnswered: false,
        componentScore : "BasicsScore",
        type: "mcqs",
    },
    {
        id: 2,
        Question: "Free SHS is made to help students get free... ",
        Options: ["Education", "HealthCare", "Money"],
        EnglishAudio: "",
        TwiAudio:mcqQuestion2,
        Answer: "Education",
        isAnswered: false,
        componentScore : "BasicsScore"

    },
    {
        id: 3,
        Question: "Which of the following is used to help us officially identify ourselves in Ghana?",
        Options: ["Our names", "Phones", "Ghana Card"],
        EnglishAudio: "",
        TwiAudio:mcqQuestion3,
        Answer: "Ghana Card",
        isAnswered: false,
        componentScore : "BasicsScore",
    },
    {
        id: 4,
        Question: "Which of these does the government use to help make our job life easier?",
        Options: ["Passports", "Workplace laws", "National Health Insurance"],
        EnglishAudio: "",
        TwiAudio:mcqQuestion4,
        Answer: "Workplace laws",
        isAnswered: false,
        componentScore : "BasicsScore",
    }
    ,
    {
        id: 5,
        Question: "Which of these does the government use to give everyone access to healthcare?",
        Options: ["National Health Insurance Scheme", "Passports", "Free SHS"],
        EnglishAudio: "",
        TwiAudio:mcQuestion5,
        Answer: "National Health Insurance Scheme",
        isAnswered: false,
        componentScore : "BasicsScore"
    }
]

export const FreeForm =[
    {
        Question: "Name one way the government helps us"
    }

]






