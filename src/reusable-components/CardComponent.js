import LessonAudioPlayer from "./LessonAudioPlayer";



function CardComponent({cardImage, cardTitle, cardTextContent, englishAudio, twiAudio, className}){
    return(
        <div className={`card_component_container ${className}`}>
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
                <div className="question_buttons">
                    <button  className="lesson_buttons icon-buttons" onClick={()=>ready()}>
                        <p>Yes</p>
                        <i className="material-icons" alt="help icon">thumb_up_alt</i>
                    </button>
                    <button  className="lesson_buttons icon-buttons" onClick={()=>notReady()}>
                        <p>No</p>
                        <i className="material-icons" alt="help icon">thumb_down_off_alt</i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardComponent;