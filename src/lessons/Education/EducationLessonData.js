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
        componentScore : "HealthScore",
        isAnswered: false,
        TwiAudio:"testforTwi",
        EnglishAudio: "",

    }
]











export const NHISRegistrationForm=[
    {
        Image: "" ,
        EnglishWord: "NHIS: Registration Form",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'After the interview, you will have to fill a registration form with the following information:',
    },
    {
        Image: "" ,
        EnglishWord: "Full Name",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'This is your full name as shown in your passport, for e.g Kofi Poku',
    },
    {
        Image: "" ,
        EnglishWord: "Date of Birth",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'This is the date that you were born',
    },
    {
        Image: "" ,
        EnglishWord: "Age",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'This is how old you are currently',
    },
    {
        Image: "" ,
        EnglishWord: "Marital Status",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'This is whether or not you are married',
    },
    {
        Image: "" ,
        EnglishWord: "Mobile Phone Number",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'This is the number on your phone',
    },
    {
        Image: "" ,
        EnglishWord: "Home Address",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: '',
        KeyMessageEnglish:'This is where you live',
    },
    {
        Image: "" ,
        EnglishWord: "NHIS: Picture and Fingerprint",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'After filling the form, you will take a picture and scan your fingerprints',
    }, {
        Image: "" ,
        EnglishWord: "NHIS: Select Prefered primary provider",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'Finally you will choose which of the hospitals will be the place you would go to when you get sick. ',

    },{
        Image: "" ,
        EnglishWord: "When ill... ",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'When sick, you must go to your chosen hospital but if it is an emergency you can get any health care at any health care facility',

    }
]

export const healthLessonData=[
    {
        Image: "" ,
        EnglishWord: "Malaria",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'In this lesson, we will learn about malaria and ways to keep ourselves healthy by preventing and treating it.' ,

    },
    {
        Image: "" ,
        EnglishWord: "Malaria",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'This is a diseases we get when we are bitten by mosquitoes' ,

    },

    {
        Image: "" ,
        EnglishWord: "Malaria Prevention: Mosquito Nets",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'To prevent malaria, you must get and sleep under mosquito nets',

    },  {
        Image: "" ,
        EnglishWord: "Malaria Prevention: Mosquito Coils",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'To prevent malaria, you must buy and use mosquito coils in your house',

    }, {
        Image: "" ,
        EnglishWord: "Malaria Treatment: Medicine",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'To treat malaria, you must go to a hospital or a drug store and ask for medicine for malaria',

    },{
        Image: "" ,
        EnglishWord: "Malaria Treatment: Self Care",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'To treat malaria, you must also make sure you are eating properly, drinking lots of water and sleeping well',

    },{
        Image: "" ,
        EnglishWord: "Keeping Healthy",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'Next we will going over ways that we can keep ourselves healthy',

    },
    {
        Image: "" ,
        EnglishWord: "Wash your Hands",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'To keep healthy: you must wash your hands before and after meals',

    },  {
        Image: "" ,
        EnglishWord: "Balanced Diet",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'To keep healthy: you must eat a balanced diet with plenty fruits and vegetables',

    }, {
        Image: "" ,
        EnglishWord: "Exercise",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'To keep healthy: you must get lots of exercise such as dancing, walking, and/or playing sports',

    },


]




/*Key Words Lesson Data*/

export const healthCareKeyWordsData=[
    {
        Image: "" ,
        EnglishWord: "Ghana Health Service",
        TwiWord: "Ghana Akwahosan Dwumadibea",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'These are the group of people in the government that are tasked with helping us with our healthcare ',
    },
     {
        Image:"",
        EnglishWord: "National Health Insurance Scheme (NHIS)",
        TwiWord: "ɔman Apɔmuden nsiakyibaa",
        TwiAudio:"",
        EnglishAudio:"",
        KeyMessageEnglish: "The government provides cheap health care through a programme in english known as called the National Health Insurance Scheme"
    }, {
        Image:"",
        EnglishWord: "Medicine",
        TwiWord: "aduro",
        TwiAudio:"",
        EnglishAudio:"",
        KeyMessageEnglish: "This is what you use when you're sick to feel better."

    },
    {
        Image:"",
        EnglishWord: "Hospital",
        TwiWord: "Ayaresabea",
        TwiAudio:"",
        EnglishAudio:"",
        KeyMessageEnglish: "This is where we go when we are sick."
    },

]



export const NHISKeyWordsData=[
    {
        Image:"",
        EnglishWord: "NHIS Registration",
        TwiWord: "NHIS atwerɛtwerɛ",
        TwiAudio:"",
        EnglishAudio:"",
        KeyMessageEnglish: "This is the process of registering for the NHIS"
    },
    {
        Image:"",
        EnglishWord: "NHIS Providers",
        TwiWord: "NHIS nnwanhwɛfoɔ",
        TwiAudio:"",
        EnglishAudio:"",
        KeyMessageEnglish: "These are the hospitals that provide NHIS services"
    },
    {
        Image:"",
        EnglishWord: "Interview",
        TwiWord: "Nkɔmmɔbɔ",
        TwiAudio:"",
        EnglishAudio:"",
        KeyMessageEnglish: "A formal conversation with someone. "
    },
    {
        Image:"",
        EnglishWord: "Exempt Group",
        TwiWord: "Yi nnipakuw bi firi mu",
        TwiAudio:"",
        EnglishAudio:"",
        KeyMessageEnglish: "These are individuals that are not included in a certain rule"
    },
    {
        Image:"",
        EnglishWord: "Annual Premium",
        TwiWord: "Afe biara sika",
        TwiAudio:"",
        EnglishAudio:"",
        KeyMessageEnglish: "A yearly fee"
    },
]


export const RegistrationFormKeyWords=[
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



export const basicsMCQHealthCare =[
    {
        id: 1,
        Question: "Which of the following hospitals provide NHS services",
        Options: ["Korle Bu Hospital", "Ghana International Hospital", "HealthCare"],
        EnglishAudio:'' ,
        TwiAudio: '',
        IncorrectEnglishAudio: '' ,
        IncorrectTwiAudio: '',
        Answer: "Korle Bu Hospital",
        isAnswered: false,
        componentScore : "HealthScore",
        type: "mcqs",
    },
    {
        id: 2,
        Question: "Which of the following people are part of the exempt group",
        Options: ["Pregnant women", "Rich Politicians", "Celebrities"],
        EnglishAudio: '',
        TwiAudio:'',
        IncorrectEnglishAudio: '',
        IncorrectTwiAudio: '',
        Answer: "Pregnant women",
        isAnswered: false,
        componentScore : "HealthScore"

    },
    {
        id: 3,
        Question: "Which of the following hospitals does not provide NHS services ?",
        Options: ["37 Military Hospital", "Tema Hospital", "Ghana Card"],
        EnglishAudio: '',
        TwiAudio:'',
        IncorrectEnglishAudio: '',
        IncorrectTwiAudio: '',
        Answer: "Ghana Card",
        isAnswered: false,
        componentScore : "HealthScore",
    },
    {
        id: 4,
        Question: "What is the first step in registering for NHIS?",
        Options: ["Finding a provider", "Pay money", "Getting interviewed"],
        EnglishAudio: '',
        TwiAudio:'',
        IncorrectEnglishAudio: '',
        IncorrectTwiAudio: '',
        Answer: "Finding a provider",
        isAnswered: false,
        componentScore : "HealthScore",
    }
    ,
    {
        id: 5,
        Question: "What is the second step in registering for NHIS ",
        Options: ["An interview", "Paying a registration fee", "Free SHS"],
        EnglishAudio: '',
        TwiAudio:'',
        IncorrectEnglishAudio: '',
        IncorrectTwiAudio: '',
        Answer: "An interview",
        isAnswered: false,
        componentScore : "HealthScore"
    }
]

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
