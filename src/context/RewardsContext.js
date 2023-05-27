import {createContext, useState} from "react";
export const RewardsContext = createContext();


function RewardsContextProvider({children}) {
    const [userCoins, setUserCoins]= useState(0)


    const updateUserCoins=(value)=>{
        const originalUserCoins = JSON.parse(localStorage.getItem('userCoins'));
        const updatedCoinScore = originalUserCoins + value;
        setUserCoins(updatedCoinScore)
        //alert('Your coins have increased by' + value)
        localStorage.setItem('userCoins', JSON.stringify(updatedCoinScore));
    }

    const buyItem=(value)=>{
        const originalUserCoins = JSON.parse(localStorage.getItem('userCoins'));
        const updatedCoinScore = originalUserCoins - value;
        setUserCoins(updatedCoinScore)
        //alert('Your coins have increased by' + value)
        localStorage.setItem('userCoins', JSON.stringify(updatedCoinScore));
    }




    return(
        <RewardsContext.Provider value={{userCoins, setUserCoins, updateUserCoins, buyItem}}>
            {children}
        </RewardsContext.Provider>
    )
}

export default RewardsContextProvider