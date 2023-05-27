import educationalImage from "../../images/greyeducation.webp";
import scholarship_english from "../../audios/education/questions/matching/scholarship_english.mp3"
import ghanaEducationMatching from "../../audios/education/questions/matching/ghanaEducationService.mp3"
import schoolMatching from "../../audios/education/questions/matching/school.mp3"
import freeshsEnglish from "../../audios/education/questions/matching/freeshsenglish.mp3"

import scholarship_twi from "../../audios/education/questions/matching/scholarship_twi.mp3"
import ghanaEducationMatchingTwi from "../../audios/education/questions/matching/ghanaeducationtwi.mp3"
import sukuu from "../../audios/education/questions/matching/sukuu.mp3"
import freeShsTwi from "../../audios/education/questions/matching/freeshstwi.mp3"

//Key lesson data
export const educationLessonData=[
    {
        Image: educationalImage,
        EnglishWord: "Ghana Education Service",
        TwiWord: "Aban",
        TwiAudio:"" ,
        EnglishAudio: "",
        KeyMessageEnglish: "In the government, there are a team people who work to ensure that everyone in Ghana has access to good quality education",
    },

    {
        Image:"" ,
        EnglishWord: "Ghana Education Service",
        TwiWord: "",
        TwiAudio:"" ,
        EnglishAudio: "",
        KeyMessageEnglish: 'They do this by providing Free SHS, School Feeding Programs, and scholarships'
    },
    {
        Image: "",
        EnglishWord: "Free SHS",
        TwiWord: "Adesua",
        TwiAudio:"" ,
        EnglishAudio: "",
        KeyMessageEnglish:'Free SHS is a program that allows students to go to Senior high school for free. Any individual who attends a public secondary school has the right to free education ',
    },
    {
        Image: "",
        EnglishWord: "Free SHS: Requirements",
        TwiWord: "Adesua",
        TwiAudio:"" ,
        EnglishAudio: "",
        KeyMessageEnglish:'You must have passed the BECE and been admitted to a public Senior High School',
    },
    {
        Image: "" ,
        EnglishWord: "Free SHS: Examples",
        TwiWord: "TwiID",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'Basic senior high schools one can attend for free include: Achimota School in Accra, Opoku Ware School in Kumasi, and Wesley Girls High School in Cape Coast',
    },
]

export const educationLessonDataKeyWords=[
    {
        Image: "" ,
        EnglishWord: "Ghana Education Service",
        TwiWord: "Ghana Nhomasua Dwumadibea",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'The national health insurance scheme is made to help us access healthcare at an affordable price',
    },
    {
        Image: "" ,
        EnglishWord: "School",
        TwiWord: "Sukuu",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'This is where you go to learn',
    },
    {
        Image: "" ,
        EnglishWord: "Free Senior High School",
        TwiWord: "Ntoaso sukuu a wontua hwee",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'This is a government program that gives free senior high school education to students ',
    },
    {
        Image: "" ,
        EnglishWord: "Scholarship",
        TwiWord: "Sika a wɔde ma kwa a wontua hwee",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'This is when you get someone gets help to pay their school fees',
    },


]


export const EducationMatchingWordsQuestions=[
    {
        id: 1,
        Task: "Match the english word to the twi word",
        leftColumn:["Scholarship","Free Senior High School", "School", "Ghana Education Service" ],
        leftColumnAudios:{Scholarship: scholarship_english, "Free Senior High School": freeshsEnglish,
            "School": schoolMatching, "Ghana Education Service": ghanaEducationMatching
        },
        rightColumn:["Sukuu", "Sika a wɔde ma kwa a wontua hwee", "Ntoaso sukuu a wontua hwee", "Ghana Nhomasua Dwumadibea" ],
        rightColumnAudios:{Sukuu: sukuu, "Sika a wɔde ma kwa a wontua hwee": scholarship_twi,
            "Ntoaso sukuu a wontua hwee": freeShsTwi, "Ghana Nhomasua Dwumadibea": ghanaEducationMatchingTwi
        },
        correctAnswerPairs:[
            { leftColumn: "Scholarship", rightColumn: "Sika a wɔde ma kwa a wontua hwee" },
            { leftColumn: "Free Senior High School", rightColumn: "Ntoaso sukuu a wontua hwee" },
            { leftColumn: "School", rightColumn: "Sukuu" },
            { leftColumn: "Ghana Education Service", rightColumn: "Ghana Nhomasua Dwumadibea" }
        ],
        Answer:"Matched",
        isAnswered: false,
        TwiAudio:"testforTwi",
        EnglishAudio: "",

    }
]










/*Second set of questions*/
export const educationLessonSection2=[
    {
        Image: "" ,
        EnglishWord: "Free Compulsory Universal Basic Education (FCUBE)",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'This is a policy that ensures that basic education is free for all children of school-going age',
    },
    {
        Image: "" ,
        EnglishWord: "Free Compulsory Universal Basic Education (FCUBE)",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'The government pays for school fees, textbooks, and other educational things ',
    },
    {
        Image: "" ,
        EnglishWord: "Free Compulsory Universal Basic Education (FCUBE)",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'This applies for children between the ages of 4 and 15',
    },
    {
        Image: "" ,
        EnglishWord: "Free Compulsory Universal Basic Education (FCUBE)",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'You can take your child to any government public middle and/or primary school to get free education for your child',
    },
    {
        Image: "" ,
        EnglishWord: "Free Compulsory Universal Basic Education (FCUBE): Optional",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'You are not forced to take your child to a government public school, you can take them to a private school if you wish to do so',
    },

]




export const educationKeyWordsSection2=[
    {
        Image: "" ,
        EnglishWord: "Basic Education",
        TwiWord: "Mfitiase Nhomasua",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'This includes primary education and lower secondary education',
    },
     {
        Image:"",
        EnglishWord: "Universal",
        TwiWord: "Amansan nyinaa",
        TwiAudio:"",
        EnglishAudio:"",
        KeyMessageEnglish: "This means it is available for everyone"
    }, {
        Image:"",
        EnglishWord: "School Fees",
        TwiWord: "Sukuu ho ka",
        TwiAudio:"",
        EnglishAudio:"",
        KeyMessageEnglish: "This is what you pay to get an education, usually for private schools."

    },
    {
        Image:"",
        EnglishWord: "Government school",
        TwiWord: "Aban no sukuu",
        TwiAudio:"",
        EnglishAudio:"",
        KeyMessageEnglish: "These are schools that receive funding from the government."
    },

]


export const educationQuestionSet2 =[
    {
        id: 1,
        Question: "What is the name of the policy that ensures all children can go to school for free?",
        Options: ["Free Compulsory Universal Basic Education (FCUBE)", "Basic Education Plan", "Government School Initiative"],
        EnglishAudio:'' ,
        TwiAudio: '',
        IncorrectEnglishAudio: '' ,
        IncorrectTwiAudio: '',
        Answer: "Free Compulsory Universal Basic Education (FCUBE)",
        isAnswered: false,
        type: "mcqs",
    },
    {
        id: 2,
        Question: "Which age group does the FCUBE policy apply to",
        Options: [" 4-10 years", " 6-12 years", "D) 4-15 years"],
        EnglishAudio: '',
        TwiAudio:'',
        IncorrectEnglishAudio: '',
        IncorrectTwiAudio: '',
        Answer: "Pregnant women",
        isAnswered: false,

    },
    {
        id: 3,
        Question: "What does the government cover under the FCUBE policy",
        Options: ["After-school activities and programs", "School fees, textbooks and others", "Food and transportation for students"],
        EnglishAudio: '',
        TwiAudio:'',
        IncorrectEnglishAudio: '',
        IncorrectTwiAudio: '',
        Answer: "School fees, textbooks and others",
        isAnswered: false,
    },
    {
        id: 4,
        Question: "What is Aban no sukuu in English?",
        Options: ["Government church", "Government school", "Government home"],
        EnglishAudio: '',
        TwiAudio:'',
        IncorrectEnglishAudio: '',
        IncorrectTwiAudio: '',
        Answer: "Government school",
        isAnswered: false,
    }
    ,
    {
        id: 5,
        Question: "What is Sukuu ho ka in English",
        Options: ["School fees", "School attendance", "School teacher"],
        EnglishAudio: '',
        TwiAudio:'',
        IncorrectEnglishAudio: '',
        IncorrectTwiAudio: '',
        Answer: "School fees",
        isAnswered: false,
    }
]






/*Third set of lesson */
export const UniversityEducationSupport=[
    {
        Image:"",
        EnglishWord: "Ghana Education Service",
        TwiWord: "NHIS atwerɛtwerɛ",
        TwiAudio:"",
        EnglishAudio:"",
        KeyMessageEnglish: "The government allows for student to apply for student loans to help pay for their education "
    },
    {
        Image:"",
        EnglishWord: "University Student Loans",
        TwiWord: "NHIS nnwanhwɛfoɔ",
        TwiAudio:"",
        EnglishAudio:"",
        KeyMessageEnglish: "The government allows university student to apply for student loans"
    },
    {
        Image:"",
        EnglishWord: "University Student Loans: Things you need",
        TwiWord: "Nkɔmmɔbɔ",
        TwiAudio:"",
        EnglishAudio:"",
        KeyMessageEnglish: "To apply for this loan, you must be a Ghanaian and have a Ghanaian Card Number. You need to be accepted by a university and be going there soon."
    },
    {
        Image:"",
        EnglishWord: "University Student Loans: Things you need",
        TwiWord: "Yi nnipakuw bi firi mu",
        TwiAudio:"",
        EnglishAudio:"",
        KeyMessageEnglish: "You must also have a E-zwich Card which you can get from a bank, an email address and phone number"
    },
    {
        Image:"",
        EnglishWord: "University Student Loans: Application",
        TwiWord: "Afe biara sika",
        TwiAudio:"",
        EnglishAudio:"",
        KeyMessageEnglish: "To get this loan, you must apply online using the following address: https://www.sltf.gov.gh/"
    },
]


export const universityKeyWordEducation=[
    {
        Image:"",
        EnglishWord: "Registration Form",
        TwiWord: "deɛ wɔakyerɛ no din", //Not sure about this one
        TwiAudio:"",
        EnglishAudio:"",
        KeyMessageEnglish: "\n" +
            "A registration form is a paper or online form where you write down your details to join or sign up for something "
    },
    {
        Image:"",
        EnglishWord: "Full Name",
        TwiWord: "edin a wɔahyɛ no nyinaa",
        TwiAudio:"",
        EnglishAudio:"",
        KeyMessageEnglish: "This is your first and last name together"
    },
    {
        Image:"",
        EnglishWord: "Date Of Birth",
        TwiWord: "ɛda a yɛ wɔwoo no",
        TwiAudio:"",
        EnglishAudio:"",
        KeyMessageEnglish: "Date of birth is the day, month, and year when you were born."

    },
    {
        Image:"",
        EnglishWord: "Marital Status",
        TwiWord: "aware my gyinabea",
        TwiAudio:"",
        EnglishAudio:"",
        KeyMessageEnglish: "Marital status means whether a person is married or not married (single)."

    },
    {
        Image:"",
        EnglishWord: "Phone Number",
        TwiWord: "telefon nɔma",
        TwiAudio:"",
        EnglishAudio:"",
        KeyMessageEnglish: "This is the number people can use to call you"
    },
    {
        Image:"",
        EnglishWord: "Home address",
        TwiWord: "Fie akwankyerɛ",
        TwiAudio:"",
        EnglishAudio:"",
        KeyMessageEnglish: "Home address is the place where you live. It includes the name of your street, the number of your house or apartment, and the name of your city or town."
    },
    {
        Image:"",
        EnglishWord: "Primary Provider",
        TwiWord: "ɔhwɛfoɔ titiriw",
        TwiAudio:"",
        EnglishAudio:"This is the first hospital/person you go to when you are sick",
        KeyMessageEnglish: ""
    },
]

export const healthyKeyWords=[
    {
        Image:"",
        EnglishWord: "Malaria",
        TwiWord: "Malaria",
        TwiAudio:"",
        EnglishAudio:"",
        KeyMessageEnglish: ""
    },
    {
        Image:"",
        EnglishWord: "Mosquito Nets",
        TwiWord: "Nwansena afiri",
        TwiAudio:"",
        EnglishAudio:"",
        KeyMessageEnglish: ""
    },
    {
        Image:"",
        EnglishWord: "Mosquito Coils",
        TwiWord: "Nwansena coil",
        TwiAudio:"",
        EnglishAudio:"",
        KeyMessageEnglish: ""
    },
    {
        Image:"",
        EnglishWord: "Mosquito Coils",
        TwiWord: "Nwansena coil",
        TwiAudio:"",
        EnglishAudio:"",
        KeyMessageEnglish: ""
    },
    {
        Image:"",
        EnglishWord: "Balanced Diet", //Not sure about this one
        TwiWord: "Aduan a ɛkari pɛ",
        TwiAudio:"",
        EnglishAudio:"",
        KeyMessageEnglish: ""
    },
    {
        Image:"",
        EnglishWord: "Exercise", //Not sure about this one
        TwiWord: "Dwumadie",
        TwiAudio:"",
        EnglishAudio:"",
        KeyMessageEnglish: ""
    },




]





/*Questions for the HealthCareSession*/





export const trueOrFalseQuestionsHealth=[
    {
        id: 1,
        Question: "When you sign up for NHIS, you will be given a form to fill out with your information.",
        TwiAudio:'' ,
        EnglishAudio: '',
        Answer:'True',
        isAnswered: true,
        componentScore : "HealthScore",
        type: "trueorfalse",
    },
    {
        id: 2,
        Question: "You will be asked to write your full name in the form",
        TwiAudio: '',
        EnglishAudio: '',
        Answer:'True',
        isAnswered: true,
        componentScore : "HealthScore",
        type: "trueorfalse",
    },

    {
        id: 3,
        Question: "You will not be asked to write your date of birth",
        TwiAudio: '',
        EnglishAudio: '',
        Answer:'False',
        isAnswered: false,
        componentScore : "HealthScore",
        type: "trueorfalse",
    },

    {

        id:4,
        Question: "Your prefered primary provider is the hospital you want to go to first",
        EnglishAudio:'',
        TwiAudio: '',
        Answer:'True',
        isAnswered: true,
        componentScore : "HealthScore",
        type: "trueorfalse",
    },
    {
        id: 5,
        Question: "In the case of an emergency,you have to go to the hospital you chose during the registration process",
        EnglishAudio: '',
        TwiAudio:'' ,
        Answer:'True',
        isAnswered: false,
        componentScore : "HealthScore",
        type: "trueorfalse",
    },
]





export const MatchingWordsQuestions2=[
    {
        id: 1,
        Task: "Match the english word to the twi word",
        leftColumn:["Mosquito Nets","Balanced Diet", "Exercise", "Mosquito Coils", "Malaria" ],
        rightColumn:["Dwumadie", "Aduan a ɛkari pɛ", "Nwansena afiri", "Malaria","Nwansena coil" ],
        correctAnswerPairs:[
            { leftColumn: "Mosquito Nets", rightColumn: "Nwansena afiri" },
            { leftColumn: "Malaria", rightColumn: "Malaria" },
            { leftColumn: "Balanced Diet", rightColumn: "Aduan a ɛkari pɛ" },
            { leftColumn: "Exercise", rightColumn: "Dwumadie" },
            { leftColumn: "Mosquito Coils", rightColumn: "Nwansena coil" },
        ],
        Answer:"Matched",
        componentScore : "HealthScore",
        isAnswered: false,
        TwiAudio:"testforTwi",
        EnglishAudio: "",

    }
]



/*Course Summary Data*/
export const healthCareCourseSummary={
    courseSummaryImage: "",
    courseSummaryTitle: "Health Care Lesson Summary",
    courseSummaryParagraph: "During this course you have learnt",
    courseListItems : ["Ghana Health Service", "How to register for the national health insurance scheme", "Malaria, its prevention and cure", "How to keep ourselves healthy"],
    TwiAudio: "",
    EnglishAudio: "",


}

