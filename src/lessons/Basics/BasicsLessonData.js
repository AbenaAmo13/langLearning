import ghanaGovernment from "../../images/greygovernment.webp"
import healthImage from "../../images/greyhealthcare.webp"
import educationalImage from "../../images/greyeducation.webp"
import jobs from "../../images/greyjobs.webp"
import id from "../../images/greyid.webp"
import question1english from "../../audios/basics/trueorfalsequestion1english.ogg"
import question1twi from "../../audios/basics/trueorfalsequestion1twi.ogg"
import question1twiv2 from "../../audios/basics/question1twi.ogg"
import theGovernmentEnglishAudio from "../../audios/courseoutline/thegovernmentenglish.ogg"
import healthCareEnglishAudio from "../../audios/courseoutline/healthCareEnglishAudio.ogg"
import educationEnglishAudio from "../../audios/courseoutline/educationEnglishAudio.ogg"
import identificationEnglishAudio from "../../audios/courseoutline/identificationenglishAudio.ogg"
import jobsEnglishAudio from "../../audios/courseoutline/jobsEnglishAudio.ogg"

export const basicLessonData=[
    {
        Image: ghanaGovernment,
        EnglishWord: "The Government",
        TwiAudio: '',
        EnglishAudio: theGovernmentEnglishAudio,
        KeyMessageEnglish: "We will be going over the course outline for the application. By the end of the entire course, you should know how the government helps us with our healthcare, education, identification and jobs. ",
    },

    {
        Image: healthImage,
        EnglishWord: "Health Care",
        TwiAudio: '',
        EnglishAudio: healthCareEnglishAudio,
        KeyMessageEnglish: 'For this topic, we will learn how the government helps us with our healthcare. We will look at the National Health Insurance Scheme, free maternal healthcare and other things that the government does to improve our health. We will also learn ways that we can keep ourselves healthy.'
    },
    {
        Image: educationalImage,
        EnglishWord: "Education",
        TwiAudio: '',
        EnglishAudio: educationEnglishAudio,
        KeyMessageEnglish:'For this topic, we will learn how the government helps us to get education. We will look at Free SHS, free primary education, loans and scholarships that the government provide to help us attain quality education. ',
    },
    {
        Image: id,
        EnglishWord: "Ghana and ID",
        TwiAudio: '',
        EnglishAudio: identificationEnglishAudio,
        KeyMessageEnglish:'For this topic, we will look at ways and that the government helps us to identify ourselves including birth/death certificates, passports, and Ghana cards and their importance.',
    },
    {
        Image: jobs,
        EnglishWord: "Jobs",
        TwiAudio: '',
        EnglishAudio: jobsEnglishAudio,
        KeyMessageEnglish:"For this topic, we will look at the ways that the government helps us to make our job life easier including job creation programs, workplace laws, taxes and pensions.",
    }
]


export const trueOrFalseQuestions=[
    {
        id: 1,
        Question: " The course will cover how the government helps us with healthcare, education, identification and jobs",
        TwiAudio:question1twiv2 ,
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
        TwiAudio: "",
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
        TwiAudio: "",
        Answer:'False',
        isAnswered: false,
        componentScore : "BasicsScore",
        type: "trueorfalse",
    },

    {

        id:4,
        Question: "Job creation programs and workplace laws are some of the ways that the government helps to make our life easier",
        EnglishAudio: "",
        TwiAudio: "",
        Answer:'True',
        isAnswered: false,
        componentScore : "BasicsScore",
        type: "trueorfalse",
    },
    {
        id: 5,
        Question: "The government provide services to improve our health, education, and wellbeing",
        EnglishAudio: "",
        TwiAudio: "",
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
        Options: ["A: Banking", "B: Education", "C: HealthCare"],
        EnglishAudio: "",
        TwiAudio:",",
        Answer: "Banking",
        isAnswered: false,
        componentScore : "BasicsScore",
        type: "mcqs",
    },
    {
        id: 2,
        Question: "Free SHS is made to help students get free... ",
        Options: ["A: Education", "B: HealthCare", "C: Money"],
        EnglishAudio: "",
        TwiAudio:",",
        Answer: "Education",
        isAnswered: false,
        componentScore : "BasicsScore"

    },
    {
        id: 3,
        Question: "Which of the following is used to help us officially identify ourselves in Ghana?",
        Options: ["A: Our names", "B: Phones", "C:Ghana Card"],
        EnglishAudio: "",
        TwiAudio:",",
        Answer: "Ghana Card",
        isAnswered: false,
        componentScore : "BasicsScore",
    },
    {
        id: 4,
        Question: "Which of these does the government use to help make our job life easier?",
        Options: ["A: Passports", "B: Workplace laws", "C: National Health Insurance"],
        EnglishAudio: "",
        TwiAudio:",",
        Answer: "Workplace laws",
        isAnswered: false,
        componentScore : "BasicsScore",
    }
    ,
    {
        id: 5,
        Question: "Which of these does the government use to give everyone access to healthcare?",
        Options: ["A: National Health Insurance Scheme", "B: Passports", "C: Free SHS"],
        EnglishAudio: "",
        TwiAudio:",",
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






