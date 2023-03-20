import testImage from "./images/3dspaceship.png"
import testAudio from "./audios/testing.mp3"
import test2Audio from "./audios/introduction.mp3"
import audioFile from "./audios/introduction.mp3";

const status = JSON.parse(localStorage.getItem('lockedStatusData'));
 console.log(status)
export const navBarElements=[

    {  "Image":testImage,
        "NavBarTitleEnglish": "Basics",
        "NavBarTitleTwi": "Mfitiaseɛ no",
        "TwiAudio":testAudio,
        "Link": "Basics",
        "locked_status": status.Basics
    }, {
        "Image":testImage,
        "NavBarTitleEnglish": "HealthCare",
        "NavBarTitleTwi": "Apomuden",
        "TwiAudio":test2Audio,
        "Link": "Health",
        "locked_status": status.Health
    },
    {
        "Image":testImage,
        "NavBarTitleEnglish": "Education",
        "NavBarTitleTwi": "Adesua ne nhomasua",
        "TwiAudio":testAudio,
        "Link":"Education",
        "locked_status": status.Education
    },
    {
        "Image":testImage,
        "NavBarTitleEnglish": "Identification",
        "NavBarTitleTwi": "Nipakuo ho nnwuma",
        "TwiAudio":testAudio,
        "Link": "Identification",
        "locked_status": status.Identification


    }, {
        "Image":testImage,
        "NavBarTitleEnglish": "Jobs",
        "NavBarTitleTwi": "Adwuma",
        "TwiAudio":testAudio,
        "Link": "Jobs",
        "locked_status": status.Jobs


    }

]


