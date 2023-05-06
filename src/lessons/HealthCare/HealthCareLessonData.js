import healthImage from "../../images/greyhealthcare.webp";


export const healthCareLessonData=[
    {
        Image: healthImage,
        EnglishWord: "Ghana Health Service",
        TwiWord: "Aban",
        TwiAudio:"" ,
        EnglishAudio: "",
        KeyMessageEnglish: "In the government, there are a team people who work to ensure that everyone in Ghana can get good healthcare even if you can't afford it",
    },

    {
        Image:"" ,
        EnglishWord: "Ghana Health Service",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish: 'They do this by  providing us with hospitals that we can go to and medicines that we can take to make us feel better when we are sick. '
    },
    {
        Image: "",
        EnglishWord: "Ghana Health Service",
        TwiWord: "Adesua",
        TwiAudio:"" ,
        EnglishAudio: "",
        KeyMessageEnglish:'Hospital bills can be expensive but there are ways that we can get still be taken care of when we our sick.',
    },
    {
        Image: "" ,
        EnglishWord: "Ghana Health Service",
        TwiWord: "TwiID",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'One of the ways that the government help us get access to healthcare even when we our sick is known as the National Health Insurance Scheme,',
    },
]

export const healthCareKeyWordsData=[
    {
        Image: "" ,
        EnglishWord: "Ghana Health Service",
        TwiWord: "Ghana Akwahosan Dwumadibea",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'The group of people in the government that are tasked with helping us with our healthcare are known in english as the Ghana Health Service',
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
        KeyMessageEnglish: "This is where we go when we are sick."
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

export const NHISLessonData=[
    {
        Image: "" ,
        EnglishWord: "National Health Insurance Scheme (NHIS)",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'The national health insurance scheme is made to help us access healthcare at an affordable price',
    },
    {
        Image: "" ,
        EnglishWord: "National Health Insurance Scheme (NHIS)",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'To register for the National Health Insurance Scheme, you must follow a set of instructions',
    },
    {
        Image: "" ,
        EnglishWord: "NHIS Registration: Find a provider ",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'First step is to find a hospital where you can get NHIS services. The most famous ones include',
    },
    {
        Image: "" ,
        EnglishWord: " Korle Bu Hospital",
        TwiWord: "TwiID",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'This is located in Accra',
    },
    {
        Image: "" ,
        EnglishWord: "Komfo Anoche Teaching Hospital",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'This is located in Kumasi',
    },
    {
        Image: "" ,
        EnglishWord: "37 Military Hospita",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'This is located in Accra on Liberation Road, near the Tetteh Quarshie Interchange',
    },
    {
        Image: "" ,
        EnglishWord: "Tema General Hospital",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'This is located in Tema. ',
    },
    {
        Image: "" ,
        EnglishWord: "More Hospital Providers",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'To find the hospital providers in your area, you can call: 📞 030 223 8136 or  📞 030 223 3255',
    }, {
        Image: "" ,
        EnglishWord: "NHIS Interview",
        TwiWord: "",
        TwiAudio: "",
        EnglishAudio: "",
        KeyMessageEnglish:'Next, a person will talk to you to find which group you belong to: Annual premium or exempt group',

    }
]


export const NHISKeyWordsData=[
    {
        Image:"",
        TwiAudio:"",
        EnglishAudio:"",
        Word: "Ghana HealthService",
        Definition: "The group of people in the government that are tasked with helping us with our healthcare are known in english as the Ghana Health Service "

    }, {
        Image:"",
        TwiAudio:"",
        EnglishAudio:"",
        Word: "National Health Insurance Scheme (NHIS)",
        Definition: "The government provides cheap health care through a programme in english known as called the National Health Insurance Scheme"

    }

]

export const MatchingWordsQuestions=[
    {
        id: 1,
        Task: "Match the english word to the twi word",
        leftColumn:["Medicine","Ghana Health Service", "Hospital", "National Health Insurance Scheme (NHIS)" ],
        rightColumn:["ɔman Apɔmuden nsiakyibaa", "Ayaresabea", "Aduro", "Ghana Akwahosan Dwumadibea" ],
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
