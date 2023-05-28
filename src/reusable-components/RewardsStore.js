
import africaImage from "../images/rewardImages/africa.webp"
import trophy from "../images/rewardImages/trophy.webp"
import cediRewards from "../images/rewardImages/cedis_rewards.webp"
import goldMedal from "../images/rewardImages/gold-medal.webp"
import afroBeat from "../images/rewardImages/afrobeat.webp"
import blackStart from "../images/rewardImages/black-star.webp"
import coins from "../images/rewardImages/cedi.webp"
import pointhands from "../images/rewardImages/pointinghand.gif"
import testingAudios from "../audios/introduction.mp3"
import rewardOverviewTwi from "../audios/rewardspage/rewards_twi_audio.mp3"
import rewardOverviewEnglish  from "../audios/rewardspage/rewards_audio_english.mp3"
import celebrations from "../images/rewardImages/confetti.webp"
import {useContext, useEffect, useState} from "react";
import {RewardsContext} from "../context/RewardsContext";
import LessonAudioPlayer from "./LessonAudioPlayer";
import OverviewAudios from "./OverViewAudios";
import {AudioContext} from "../context/AudioContext";

 function RewardsStore() {
     const {userCoins, setUserCoins, buyItem} = useContext(RewardsContext);
     const overViewText ="Use the coins you won from completing your course to get downloadable pictures of Ghana items on your phone"
     const [userRewards, setPersonalRewards] = useState([])
     const [successPurchase, setSuccessPurchase] = useState(null)
     useEffect(() => {
         const personalRewards = localStorage.getItem('personalRewards');
         const initialRewards = personalRewards ? JSON.parse(personalRewards) : [];
         setPersonalRewards(initialRewards);
         //alert(window.location.pathname)
     }, []);
     useEffect(() => {
         // Save the updated userRewards to localStorage whenever it changes
         localStorage.setItem('personalRewards', JSON.stringify(userRewards));
     }, [userRewards]);
     const unlockableRewardsItems = [
        { name: 'AfricaImage', coinsRequired: 50, image: africaImage, purchased: false},
        { name: 'AfroBeat', coinsRequired: 120, image: afroBeat, purchased: false },
        { name: 'CediRewards', coinsRequired: 120, image: cediRewards, purchased: false },
        { name: 'BlackStar', coinsRequired: 250, image: blackStart, purchased:false},
        { name: 'GoldMedal', coinsRequired: 700, image: goldMedal, purchased: false },
        { name: 'Trophy', coinsRequired: 800, image: trophy, purchased: false },
        // Add more virtual items and their respective coin thresholds
    ];
     const unlockedRewards = unlockableRewardsItems.filter(reward => userRewards.includes(reward.name))
     const lockedRewards = unlockableRewardsItems.filter(reward => !userRewards.includes(reward.name))

    // const unPurchasedRewards = unlockableRewardsItems.filter(item => !item.purchased);

     //unlocked rewards based on the ones that are saved in the unpurchasedRewards sector
/*     const unlockedRewards = unlockableRewardsItems.filter(reward => rewardsPurchased.includes(reward.name));
     const lockedRewards = unlockableRewardsItems.filter(reward => !rewardsPurchased.includes(reward.name));*/


     const purchaseItem=(price, itemName, purchased)=>{
         if(price> userCoins || purchased ){
             setSuccessPurchase(false)
             //alert(successPurchase)
         }else{
             //alert(price)
             buyItem(price)
             //updateUserCoins(price)
             setSuccessPurchase(true)
             // Add the purchased item to the userRewards array
             setPersonalRewards(prevRewards => [...prevRewards, itemName]);
         }
     }
     return (
         <div>
             <OverviewAudios
                 text={overViewText}
                 englishAudio={rewardOverviewEnglish}
                 englishAudioName={rewardOverviewEnglish}
                 twiAudio={rewardOverviewTwi}
                 twiAudioName={rewardOverviewTwi}
             />
             {
                 successPurchase !== null &&(
                     successPurchase=== true ? (
                         <div>
                             <p> You have bought the item</p>
                         </div>
                     ):(
                         <div>
                             <p> Purchase was unsuccessful</p>
                         </div>
                     )

                 )
             }
             <div className="reward_container">
                 {unlockedRewards.map((item, index) => (
                     <div key={index} className="navCard rewards_cards">
                         <div className="purchased_item">
                             {/*<img src={celebrations} alt="celebrations" />*/}
                             <i className="material-icons" alt="circle checkmark" aria-label="check_circle">check_circle</i>
                         </div>
                         <div className="cardmedia">
                             <img src={item.image} alt={item.name} />
                         </div>
                         <div className="coins_div">
                             <p className="pruchased_styling">Purchased</p>
                         </div>
                         <div className="downloaad_me_div purchase_div">
                             <a href={item.image} className="start-button purchase-button link"download >Download</a>
                         </div>

                     </div>
                 ))}

                 {lockedRewards.map((item, index) => (
                     <div key={index} className="navCard rewards_cards">
                         <div className="cardmedia">
                             <img src={item.image} alt={item.name} />
                         </div>
                         <div>
                             <div className="coins_div">
                                 <img src={coins} alt="coins" className="coin_style" />
                                 <p className="coins_text">{item.coinsRequired}</p>
                             </div>
                             <div className="purchase_div">
                                 <button className="start-button purchase-button" onClick={()=> purchaseItem(item.coinsRequired, item.name, item.purchased)}>Buy me</button>
                             </div>

                         </div>
                     </div>
                 ))}
             </div>
         </div>
    );

}
export default RewardsStore