import LessonAudioPlayer from "./LessonAudioPlayer";



function CardComponent({cardImage, cardTitle, cardTextContent, englishAudio, twiAudio}){
    return(
        <div className="card_component_container">
            <div className="card_component_image" >
                <img src={cardImage}/>
            </div>
            <div className="card_component_content">
                <p className="card_component_title">{cardTitle}</p>
                {cardTextContent.map((cardTextContent, index) => (
                    <p key={index} className="card_component_text">
                        {cardTextContent.text}
                    </p>
                ))}

            </div>
            <div className="card_audio_controls">
                <LessonAudioPlayer twiAudio={twiAudio} englishAudio={englishAudio}/>
            </div>
        </div>
    )
}

export default CardComponent;