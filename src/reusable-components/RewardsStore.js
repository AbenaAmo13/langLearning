
import africaImage from "../images/rewardImages/africa.webp"
import trophy from "../images/rewardImages/trophy.webp"
import cediRewards from "../images/rewardImages/cedis_rewards.webp"
import goldMedal from "../images/rewardImages/gold-medal.webp"
import afroBeat from "../images/rewardImages/afrobeat.webp"
import blackStart from "../images/rewardImages/black-star.webp"
import coins from "../images/rewardImages/cedi.webp"

 function RewardsStore() {
    const unlockableRewardsItems = [
        { name: 'Arfica Image', coinsRequired: 50, image: africaImage },
        { name: 'AfroBeat', coinsRequired: 120, image: afroBeat },
        { name: 'CediRewards', coinsRequired: 120, image: cediRewards },
        { name: 'BlackStar', coinsRequired: 250, image: blackStart },
        { name: 'GoldMedal', coinsRequired: 700, image: goldMedal },
        { name: 'Trophy', coinsRequired: 800, image: trophy },
        // Add more virtual items and their respective coin thresholds
    ];

    return (
        <div className="reward_container">
            {unlockableRewardsItems.map((item, index) => (
                <div key={index} className="navCard">
                    <div className="cardmedia">
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div>
                        <div className="coins_div">
                            <img src={coins} alt="coins" className="coin_style" />
                            <p className="coins_text">{item.coinsRequired}</p>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );

}
export default RewardsStore