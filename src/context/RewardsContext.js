import {createContext, useState} from "react";
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from "react-toastify";
export const RewardsContext = createContext();


function RewardsContextProvider({children}) {
    const [userCoins, setUserCoins]= useState(0)


    const updateUserCoins=(value)=>{
        const originalUserCoins = JSON.parse(localStorage.getItem('userCoins'));
        const updatedCoinScore = originalUserCoins + value;
        const message = "You have gained: " + value + " coins"
        toast.success(message, { autoClose: 2000 }); // Success toast with auto-close after 3 seconds
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
            <ToastContainer/>
        </RewardsContext.Provider>
    )
}

export default RewardsContextProvider