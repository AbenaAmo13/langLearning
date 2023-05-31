import healthImage from "../../images/greyhealthcare.webp";

import GHS1Twi from "../../audios/healthCare/GhanaHealthService/GHS_audio_Twi_1_main.mp3"
import GHS2Twi from "../../audios/healthCare/GhanaHealthService/GHS_audioTwi_2.mp3"
import GHS3Twi from "../../audios/healthCare/GhanaHealthService/GHS_audioTwi_3.mp3"
import GHS4Twi from "../../audios/healthCare/GhanaHealthService/GHS_audiotwi_4.mp3"


import GHS1English from "../../audios/healthCare/GhanaHealthService/GHS1English.mp3"
import GHS2English from "../../audios/healthCare/GhanaHealthService/GHS2English.mp3"
import GHS3English from "../../audios/healthCare/GhanaHealthService/GHS3English.mp3"
import GHS4English from "../../audios/healthCare/GhanaHealthService/GHS4English.mp3"




import KeyWord1English from "../../audios/healthCare/keywords/GhanaHealthServiceKeyWord.mp3"
import KeyWord1Twi from "../../audios/healthCare/keywords/KeyWord1Twi.mp3"
import KeyWord2English from "../../audios/healthCare/keywords/NHISEnglish.mp3"
import KeyWord2Twi from "../../audios/healthCare/keywords/NHISTwi.mp3"

import aduro from "../../audios/healthCare/keywords/aduro.mp3"
import ayaresabea from "../../audios/healthCare/keywords/ayaresabea.mp3"
import hospital from "../../audios/healthCare/keywords/hospital.mp3"
import medicine from "../../audios/healthCare/keywords/medicine.mp3"







import NHIS1Twi from "../../audios/healthCare/NHISLessonDataAudios/NHIS_1_Twi.mp3"
import NHIS2Twi from "../../audios/healthCare/NHISLessonDataAudios/NHIS_KeyMessage_Object2.mp3"


import NHIS_English1 from "../../audios/healthCare/NHISLessonDataAudios/NHIS_1_English.mp3"
import NHIS_English2 from "../../audios/healthCare/NHISLessonDataAudios/NHIS_2_English.mp3"



import NHIS3Twi from "../../audios/healthCare/NHISLessonDataAudios/NHIS_3_Twi.mp3"
import KorleBuTwi from "../../audios/healthCare/NHISLessonDataAudios/Korele_Bu_Twi.mp3"
import KomfoAnokyeTwi from "../../audios/healthCare/NHISLessonDataAudios/Komfo_Anokye_Twi.mp3"
import ThirtySevenMillitaryTwi from "../../audios/healthCare/NHISLessonDataAudios/37_Military_Hospital_Twi.mp3"
import TemaGeneralHospital from "../../audios/healthCare/NHISLessonDataAudios/tema_hospital_twi.mp3"
import MoreHospitalProvidersTwi from "../../audios/healthCare/NHISLessonDataAudios/More_Hospital_Providers_Twi.mp3"
import NHISInterviewTwi from "../../audios/healthCare/NHISLessonDataAudios/NHIS_Interview_Twi.mp3"
import NHIS_ExemptGroupExample from "../../audios/healthCare/NHISLessonDataAudios/NHIS_ExemptGroup_Examples.mp3"

import NHISRegistrationFormTwi from "../../audios/healthCare/NHISRegistrationFormAudios/NHISRegistrationFormTwi.mp3"
import FullNameTwiAudios from "../../audios/healthCare/NHISRegistrationFormAudios/FullNameTwiAudio.mp3"
import DateOfBirthTwi from "../../audios/healthCare/NHISRegistrationFormAudios/DateOfBirthTwiAudio.mp3"
import HomeAndAddressTwi from "../../audios/healthCare/NHISRegistrationFormAudios/HomeAddressTwiAudio.mp3"
import MaritalStatusTwi from "../../audios/healthCare/NHISRegistrationFormAudios/MaritalStatusTwiAudio.mp3"
import NHIS_Registration_And_FingerPrintTwi from "../../audios/healthCare/NHISRegistrationFormAudios/NHIS_Registration_And_FingerPrint_Twi.mp3"
import Preferred_Provider_Twi from "../../audios/healthCare/NHISRegistrationFormAudios/Preffered_Provider_Twi.mp3"
import WhenIllTwi from "../../audios/healthCare/NHISRegistrationFormAudios/WhenIllTwi.mp3"
import AgeTwiAudio from "../../audios/healthCare/NHISRegistrationFormAudios/AgeTwiAudio.mp3"
import TelephoneNumberTwiAudio from "../../audios/healthCare/NHISRegistrationFormAudios/TelephoneNumberTwi.mp3"





//Key lesson data
export const healthCareLessonData=[
    {
        Image: healthImage,
        EnglishWord: "Ghana Health Service",
        TwiWord: "Aban",
        TwiAudio:GHS1Twi ,
        EnglishAudio: GHS1English,
        KeyMessageEnglish: "In the government, there are a team of people who work to ensure that everyone in Ghana can get good healthcare even if you can't afford it",
    },

    {
        Image:"" ,
        EnglishWord: "Ghana Health Service",
        TwiWord: "",
        TwiAudio: GHS2Twi,
        EnglishAudio: GHS2English,
        KeyMessageEnglish: 'They do this by  providing us with hospitals that we can go to and medicines that we can take to make us feel better when we are sick. '
    },
    {
        Image: "",
        EnglishWord: "Ghana Health Service",
        TwiWord: "Adesua",
        TwiAudio:GHS3Twi ,
        EnglishAudio: GHS3English,
        KeyMessageEnglish:'Hospital bills can be expensive but there are ways that we can still be taken care of when we our sick.',
    },
    {
        Image: "" ,
        EnglishWord: "Ghana Health Service",
        TwiWord: "TwiID",
        TwiAudio: GHS4Twi,
        EnglishAudio: GHS4English,
        KeyMessageEnglish:'One of the ways that the government help us get access to healthcare even when we our sick is known as the National Health Insurance Scheme.',
    },
]

export const NHISLessonData=[
    {
        Image: "" ,
        EnglishWord: "National Health Insurance Scheme (NHIS)",
        TwiWord: "",
        TwiAudio: NHIS1Twi,
        EnglishAudio: NHIS_English1,
        KeyMessageEnglish:'The national health insurance scheme is made to help us access healthcare at an affordable price',
    },
    {
        Image: "" ,
        EnglishWord: "National Health Insurance Scheme (NHIS)",
        TwiWord: "",
        TwiAudio: NHIS2Twi,
        EnglishAudio: NHIS_English2,
        KeyMessageEnglish:'To register for the National Health Insurance Scheme, you must follow a set of instructions',
    },
    {
        Image: "" ,
        EnglishWord: "NHIS Registration: Find a provider ",
        TwiWord: "",
        TwiAudio: NHIS3Twi,
        EnglishAudio: "",
        KeyMessageEnglish:'First step is to find a hospital where you can get NHIS services. The most famous ones include:',
    },
    {
        Image: "" ,
        EnglishWord: " Korle Bu Hospital",
        TwiWord: "TwiID",
        TwiAudio: KorleBuTwi,
        EnglishAudio: "",
        KeyMessageEnglish:'This is located in Accra',
    },
    {
        Image: "" ,
        EnglishWord: "Komfo Anoche Teaching Hospital",
        TwiWord: "",
        TwiAudio: KomfoAnokyeTwi,
        EnglishAudio: "",
        KeyMessageEnglish:'This is located in Kumasi',
    },
    {
        Image: "" ,
        EnglishWord: "37 Military Hospital",
        TwiWord: "",
        TwiAudio: ThirtySevenMillitaryTwi,
        EnglishAudio: "",
        KeyMessageEnglish:'This is located in Accra on Liberation Road, near the Tetteh Quarshie Interchange',
    },
    {
        Image: "" ,
        EnglishWord: "Tema General Hospital",
        TwiWord: "",
        TwiAudio: TemaGeneralHospital,
        EnglishAudio: "",
        KeyMessageEnglish:'This is located in Tema. ',
    },
    {
        Image: "" ,
        EnglishWord: "More Hospital Providers",
        TwiWord: "",
        TwiAudio: MoreHospitalProvidersTwi,
        EnglishAudio: "",
        KeyMessageEnglish:'To find the hospital providers in your area, you can call: 📞 030 223 8136 or  📞 030 223 3255',
    }, {
        Image: "" ,
        EnglishWord: "NHIS Interview",
        TwiWord: "",
        TwiAudio: NHISInterviewTwi,
        EnglishAudio: "",
        KeyMessageEnglish:'Next, a person will talk to you to find which group you belong to: Annual premium or exempt group',

    },{
        Image: "" ,
        EnglishWord: "NHIS Interview: Exempt Group",
        TwiWord: "",
        TwiAudio: NHIS_ExemptGroupExample,
        EnglishAudio: "",
        KeyMessageEnglish:'Exempt Group include: a pregnant woman, A SSNIT contributor, the elderly (above 70 years old), a disabled person, person with a mental disorder, and a low income person',

    }
]


export const NHISRegistrationForm=[
    {
        Image: "" ,
        EnglishWord: "NHIS: Registration Form",
        TwiWord: "",
        TwiAudio: NHISRegistrationFormTwi,
        EnglishAudio: "",
        KeyMessageEnglish:'After the interview, you will have to fill a registration form with the following information:',
    },
    {
        Image: "" ,
        EnglishWord: "Full Name",
        TwiWord: "",
        TwiAudio: FullNameTwiAudios,
        EnglishAudio: "",
        KeyMessageEnglish:'This is your full name as shown in your passport, for e.g Kofi Poku',
    },
    {
        Image: "" ,
        EnglishWord: "Date of Birth",
        TwiWord: "",
        TwiAudio: DateOfBirthTwi,
        EnglishAudio: "",
        KeyMessageEnglish:'This is the date that you were born',
    },
    {
        Image: "" ,
        EnglishWord: "Age",
        TwiWord: "",
        TwiAudio: AgeTwiAudio,
        EnglishAudio: "",
        KeyMessageEnglish:'This is how old you are currently',
    },
    {
        Image: "" ,
        EnglishWord: "Marital Status",
        TwiWord: "",
        TwiAudio: MaritalStatusTwi,
        EnglishAudio: "",
        KeyMessageEnglish:'This is whether or not you are married',
    },
    {
        Image: "" ,
        EnglishWord: "Mobile Phone Number",
        TwiWord: "",
        TwiAudio: TelephoneNumberTwiAudio,
        EnglishAudio: "",
        KeyMessageEnglish:'This is the number on your phone',
    },
    {
        Image: "" ,
        EnglishWord: "Home Address",
        TwiWord: "",
        TwiAudio: HomeAndAddressTwi,
        EnglishAudio: '',
        KeyMessageEnglish:'This is where you live',
    },
    {
        Image: "" ,
        EnglishWord: "NHIS: Picture and Fingerprint",
        TwiWord: "",
        TwiAudio: NHIS_Registration_And_FingerPrintTwi,
        EnglishAudio: "",
        KeyMessageEnglish:'After filling the form, you will take a picture and scan your fingerprints',
    }, {
        Image: "" ,
        EnglishWord: "NHIS: Select Prefered primary provider",
        TwiWord: "",
        TwiAudio: Preferred_Provider_Twi,
        EnglishAudio: "",
        KeyMessageEnglish:'Finally you will choose which of the hospitals you would go to when you get sick. ',

    },{
        Image: "" ,
        EnglishWord: "When ill... ",
        TwiWord: "",
        TwiAudio: WhenIllTwi,
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
        TwiAudio: KeyWord1Twi,
        EnglishAudio: KeyWord1English,
        KeyMessageEnglish:'These are the group of people in the government that are tasked with helping us with our healthcare ',
    },
     {
        Image:"",
        EnglishWord: "National Health Insurance Scheme (NHIS)",
        TwiWord: "ɔman Apɔmuden nsiakyibaa",
        TwiAudio:KeyWord2Twi,
        EnglishAudio:KeyWord2English,
        KeyMessageEnglish: "The government provides cheap health care through a programme in english known as called the National Health Insurance Scheme"
    }, {
        Image:"",
        EnglishWord: "Medicine",
        TwiWord: "aduro",
        TwiAudio:aduro,
        EnglishAudio:medicine,
        KeyMessageEnglish: "This is what you use when you're sick to feel better."

    },
    {
        Image:"",
        EnglishWord: "Hospital",
        TwiWord: "Ayaresabea",
        TwiAudio:hospital,
        EnglishAudio:ayaresabea,
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
export const MatchingWordsQuestions=[
    {
        id: 1,
        Task: "Match the english word to the twi word",
        leftColumn:["Medicine","Ghana Health Service", "Hospital", "National Health Insurance Scheme (NHIS)" ],
        rightColumn:["ɔman Apɔmuden nsiakyibaa", "Ayaresabea", "Aduro", "Ghana Akwahosan Dwumadibea" ],
        leftColumnAudios: {Medicine: medicine, Hospital: hospital, "National Health Insurance Scheme (NHIS)": KeyWord2English, "Ghana Health Service": KeyWord1English},
        rightColumnAudios: {"ɔman Apɔmuden nsiakyibaa": KeyWord2Twi, Ayaresabea: ayaresabea, Aduro:  aduro, "Ghana Akwahosan Dwumadibea": KeyWord1Twi},
        correctAnswerPairs:[
            { leftColumn: "Medicine", rightColumn: "Aduro" },
            { leftColumn: "Ghana Health Service", rightColumn: "Ghana Akwahosan Dwumadibea" },
            { leftColumn: "Hospital", rightColumn: "Ayaresabea" },
            { leftColumn: "National Health Insurance Scheme (NHIS)", rightColumn: "ɔman Apɔmuden nsiakyibaa" }
        ],
        Answer:"Matched",
       componentScore : "HealthScore",
        isAnswered: false,
        TwiAudio:"testforTwi",
        EnglishAudio: "",

    }
]


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
    courseListItems : ["Ghana Health Service", "How to register for the national health insurance scheme"],
    TwiAudio: "",
    EnglishAudio: "",


}

