import React,{useState} from "react";
import  { Coffee, DotCircle, Home, Journals, Timer,
    HomeFilled, DotCircleFilled, CoffeeFilled, JournalsFilled}from "../../../../utils/Icons/Header/LeftHeader";
import TimerToolTip from "./TimerToolTip";
export default function NonTiming (prop) {
    const { 
        setIsTimerRunning,
        setSession,
        focusInterval, 
        setFocusInterval,
        setBreakInterval,
        breakInterval, 
} = prop



// const [btnId, setBtnId] = useState ("home")
// const handleBtnClick = ({target}) => {
//     const timerToolTip = document.querySelector("#timerToolTip")
//     console.log(timerToolTip.style.display)
//     setBtnId(() => target.id)
//     if (target.id === "timer") 
//     if (timerToolTip) timerToolTip.style.display = "flex"
//     // // if (timerToolTip.style.display === "none") 
//     // timerToolTip.style.display = "flex"
//     // // else setToolTipDisplay(() => false)
// }

const [btnId, setBtnId] = useState ("home")
const [toolTipDisplay, setToolTipDisplay] = useState (false)

const handleBtnClick = ({target}) => {
    const targetId= target.id
    setBtnId(() => targetId)
    if (targetId==="timer" ) setToolTipDisplay(() => !toolTipDisplay)
    else setToolTipDisplay(() => false)
}

window.addEventListener("click",({target}) => {
    const targetId= target.id
    if (targetId === "focusInterval" || targetId === "breakInterval") return setToolTipDisplay(() => true)
    if ((targetId !== "timer" && targetId !== "timerToolTip") && (toolTipDisplay))
    return setToolTipDisplay(() => false)
})  


const timerToolTip = document.querySelector("#timerToolTip")
if(timerToolTip)
toolTipDisplay
?timerToolTip.style.display = "flex"
:timerToolTip.style.display = "none"


return <ul className = "nav ">
    <li className = "nav-item me-3">  
        <button className = "button "> logo
        </button>
    </li>
    <li className = "nav-item me-3">
        {btnId === "home"
          ? <div className="toolTip button d-flex justify-content-center align-items-center border-white">
                <button className = "button d-flex justify-content-center align-items-center border-white"
                        id = "home"
                        onClick = {handleBtnClick}
                    >
                <HomeFilled />
                </button>
                <div className = 'barFilled'> </div>
            </div>            
                 
          : <div className="toolTip d-flex justify-content-center align-items-center border-white">
                <button className = "button d-flex justify-content-center align-items-center border-white"
                    id = "home"
                    onClick = {handleBtnClick}
                    > 
                    <Home />
                </button>
                <span className = "tooltiptext" > Home </span>
            </div>
        }
    </li>
    <li className = "nav-item me-3">
        {btnId === "focus" 
              ? <div className="toolTip button d-flex justify-content-center align-items-center border-white">
                    <div >
                    <button className = "button d-flex justify-content-center align-items-center border-white"
                        onClick = {handleBtnClick}
                        id = "focus" >
                        <DotCircleFilled />
                    </button>
                    </div>
                    <div className = 'barFilled'> </div>
                </div>
              : <div className="toolTip d-flex justify-content-center align-items-center border-white">
                    <button className = "button d-flex justify-content-center align-items-center border-white"
                        onClick = {handleBtnClick}
                        id = "focus"
                        > 
                        <DotCircle />
                    </button>
                    <span className = "tooltiptext" > Projects </span>
                </div>
        }

    </li>
    <li className = "nav-item me-3">
        {btnId === "social"
          ? <div className="toolTip button d-flex justify-content-center align-items-center border-white">
                <div> 
                    <button className = " button d-flex justify-content-center align-items-center border-white"
                            onClick = {handleBtnClick}
                            id = "social"
                    > 
                    <CoffeeFilled /> 
                    </button>
                    </div>
                <div className = 'barFilled'> </div>
            </div>
           
          : <div className="toolTip button d-flex justify-content-center align-items-center border-white">
                <button className = " button d-flex justify-content-center align-items-center border-white"
                    onClick = {handleBtnClick}
                    id = "social"
                    > 
                    <Coffee />
                </button>
                <span className = "tooltiptext" > Social </span>
            </div>
        } 
    </li>
    <li className = "nav-item me-3">
    {btnId === "journal"
          ? <div className="toolTip button d-flex justify-content-center align-items-center border-white">
                <div 
                > 
                <button className = " button d-flex justify-content-center align-items-center border-white"
                    onClick = {handleBtnClick}
                    id = "journal"     
                    > 
                    <JournalsFilled />
                </button></div>
                <div className = 'barFilled'> </div>
            </div>
           
          : <div className="toolTip button d-flex justify-content-center align-items-center border-white">
                <button className = " button d-flex justify-content-center align-items-center border-white"
                    onClick = {handleBtnClick}
                    id = "journal"
                    > 
                    <Journals />
                </button>
                <span className = "tooltiptext" > Writings </span>
            </div>
        } 

    </li> 
    <li className = "nav-item ">
        <div className="toolTip button d-flex justify-content-center align-items-center border-white">
           <button  className = "button d-flex justify-content-center align-items-center border-white"
                    id = "timer"
                    onClick = {handleBtnClick}
                    >
                <Timer />
           </button>
            <div > </div>
        </div>
            <TimerToolTip
                setIsTimerRunning = {setIsTimerRunning}
                focusInterval = {focusInterval} 
                breakInterval = {breakInterval} 
                setFocusInterval={setFocusInterval}
                setBreakInterval={setBreakInterval}
                setSession = {setSession}      
            />     
    </li>
</ul>
}