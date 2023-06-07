import jobs from "../../images/greyjobs.webp"
import courseSummaryTwi from "../../audios/courseoutline/courseSummaryTwi.mp3";
import courseSummaryEnglish from "../../audios/courseoutline/courseSummaryEnglish.mp3";


export const jobsLessonData=[
    {
        Image: jobs,
        EnglishWord: "Ministry of Employment and Labour Relations (MELR)",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish: "These are a group of people in Ghana's government that help people with jobs",
    },

    {
        Image: jobs,
        EnglishWord: "MELR: Job Creation",
        TwiWord: "Apumoden",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish: 'This group of government people are in charge of creating jobs in the country'
    },
    {
        Image: jobs,
        EnglishWord: "MELR: Labour Laws",
        TwiWord: "Adesua",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'They also create labour laws to ensure that all workers are treated fairly and paid properly',
    },
    {
        Image: jobs,
        EnglishWord: "MERL: Employment Services",
        TwiWord: "TwiID",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'They also provide or support services that help people find jobs ',
    },
    {
        Image: jobs,
        EnglishWord: "MERL: Safety and support",
        TwiWord: "Adwuma",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:"They also provide programs like health insurance, retirement plans, and other benefits to ensure the worker is safe.",
    }
]


export const jobsKeyWordsLessonData=[
    {
        Image: jobs,
        EnglishWord: "Job Creation",
        TwiWord: "Adwuma a wɔbɛma ayɛ adwuma",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish: "T",
    },

    {
        Image: "",
        EnglishWord: "Labour Laws",
        TwiWord: "Adwumayɛ ho mmara",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish: 'This group of government people are in charge of creating jobs in the country'
    },
    {
        Image: "",
        EnglishWord: "Employment services",
        TwiWord: "Adwumayɛ ho adwumayɛbea ahorow",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'They also create labour laws to ensure that all workers are treated fairly and paid properly',
    },
    {
        Image: "",
        EnglishWord: "Safety",
        TwiWord: "Ahwɛyie",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'They also provide or support services that help people find jobs ',
    },
    {
        Image: jobs,
        EnglishWord: "Support",
        TwiWord: "Mmoa",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:"They also provide programs like health insurance, retirement plans, and other benefits to ensure the worker is safe.",
    }
]


export const jobsLessonTrueOrFalseQuestions=[
    {
        id: 1,
        Question: "Mmoa in English means support.",
        TwiAudio:"" ,
        EnglishAudio: "",
        Answer:'True',
        isAnswered: false,
        type: "trueorfalse",
    },
    {
        id: 2,
        Question: "The Ministry of Employment and Labour Relations don't help Ghanaians with jobs",
        TwiAudio: "",
        EnglishAudio: "",
        Answer:'False',
        isAnswered: false,
        type: "trueorfalse",
    },

    {
        id: 3,
        Question: "The government helps us with job creation ",
        TwiAudio: "",
        EnglishAudio: "",
        Answer:'True',
        isAnswered: false,
        type: "trueorfalse",
    },

    {

        id:4,
        Question: "The MERL ensure that workers are not treated and paid fairly",
        EnglishAudio:"",
        TwiAudio: "",
        Answer:'False',
        isAnswered: false,
        type: "trueorfalse",
    },
    {
        id: 5,
        Question: "The government provide programs like health insurance, retirement plans, and other benefits to ensure the worker is safe.",
        EnglishAudio: "",
        TwiAudio: "",
        Answer:'True',
        isAnswered: false,
        type: "trueorfalse",
    },
]

export const jobsCourseSummary={
    courseSummaryImage: "",
    courseSummaryTitle: "Jobs Course Summary",
    courseSummaryParagraph: "In this lesson, you have been introduced to the topics that we will cover in the application which includes: ",
    courseListItems : ["Ministry of Employment Relations", "Workplace Laws", "Employment services", ],
    TwiAudio: courseSummaryTwi,
    EnglishAudio:courseSummaryEnglish ,


}
