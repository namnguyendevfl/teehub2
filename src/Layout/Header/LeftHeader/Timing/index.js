import React, {useRef, useEffect} from "react";
import { secondsToMinutes } from "../../../../utils/Duration";
import { Home, Play, Pause, PlayFilled, PauseFilled } from "../../../../utils/Icons/Header/LeftHeader";
import { useHistory } from "react-router-dom";
export default function Timing (prop) {
    const { 
        isTimerRunning, 
        setIsTimerRunning,  
        setSession,
        focusInterval, 
        breakInterval,
        session 
    } = prop
  //Step 1: Set interval to run the callback function every second  
  function useInterval (nextTick, delay) {
    const savedNextTick = useRef()
    //Then set up the interval
    useEffect (() => {
      //Remember the lastest callback
      savedNextTick.current = nextTick
      if (delay !== null){
        //Note: We should use a callback function we passing it into setInterval
        let id = setInterval(() => savedNextTick.current(),delay)
        return () => clearInterval(id)}
    },[delay, nextTick])
  }
  

  //Step 2: Step up nextTick function with a parameter "preState"

  const nextTick = (prevState) => {
    const timeRemaining = Math.max(0,prevState.timeRemaining - 1)
    const timeElapsed = prevState.timeElapsed + 1
    const timeElapsedPercent = timeElapsed/(prevState.interval*60)*100
    const session = {
        ...prevState,
        timeRemaining,
        timeElapsed,
        timeElapsedPercent
      }
    window.localStorage.setItem('storedSession',JSON.stringify(session))
    return session
  }  
  
  //Step 3: Define the nextSession as either focusing or on break by stating function to transition the current session type to the next session
  //Fixing a bug which does not memorize the interval of focusing and on break
  const nextSession = (focusInterval, breakInterval) => {
    return (currentSession) => 
      (currentSession.label === "Focusing")
      ?   { label: "On Break",
            timeRemaining: breakInterval *60,
            interval: breakInterval,
            timeElapsed:0,
            timeElapsedPercent:0,
            numSession: currentSession.numSession}
      :   { label: "Focusing",
            timeRemaining: focusInterval *60,
            interval: focusInterval,
            timeElapsed:0,
            timeElapsedPercent:0,
            numSession: currentSession.numSession + 1
            }
        }
  //Step5: call the useInterval function: if play (istimerRunning): delay 1s, and run the call back function to set state of session with label and timeremining decrementing by 1
    useInterval(() => {
      if (session.timeRemaining === 0) {
        console.log("voice")
        return setSession(nextSession(focusInterval, breakInterval))
      }
      return setSession(nextTick)
      }, 
    isTimerRunning ? 1000 : null
    )

    const handleClick = () => {
        //Switch the "pause" state variable when the playPause button is clicked   
        setIsTimerRunning((prevState) => {
          const nextState = !prevState;
          if (nextState) {            
            setSession((prevStateSession) => {
              // If the timer is starting and the previous session is null,
              // start a focusing session.
              if (prevStateSession === null) {
                return {
                  label: "Focusing",
                  timeRemaining: focusInterval * 60,
                  numSession: 1
                };
              }
              return prevStateSession;
            });        
          }
          return nextState;
        });
      }
   
    //Set timeElapsed
    const secsToMins = secondsToMinutes(session?.timeElapsed)
    
    const history = useHistory()
    const handleStop = (event) => { 
        event.preventDefault();
        setIsTimerRunning(() => false);
        setSession(()=>null);
        localStorage.removeItem('storedSession')
        localStorage.removeItem('storedBreakInterval')
        localStorage.removeItem('storedFocusInterval')
        window.localStorage.setItem('Url',JSON.stringify("/"))
        history.push("/")  

    }
    
    return <ul className = "nav">
    <li className = "nav-item me-3">  
        <button className = "button "> logo
        </button>
    </li>
    <li className = "nav-item me-3">           
        <div className="toolTip d-flex justify-content-center align-items-center border-white">
                <form 
                >
                <button className = "button p-0"
                    id = "home"
                    type = "submit"
                    onClick = {handleStop}
                    > 
                    <Home />
                </button>
                </form>
                <span className = "tooltiptext"> Home </span>
        </div>
    </li>
    {isTimerRunning
    ?   <>
        <li className = "nav-item me-3">
            <div className="toolTip button d-flex justify-content-center align-items-center border-white">
                <div >
                <PlayFilled />
                </div>
            <div className = 'barFilled'> </div>
            </div>
        </li>
        <li className = "nav-item me-3">
            <div className="toolTip d-flex justify-content-center align-items-center border-white">
                <button className = "button p-0"
                    id = "home"
                    onClick = {handleClick}
                    > 
                    <Pause />
                </button>
                <span className = "tooltiptext"> Pause </span>
            </div>
        </li>
        <li className = "nav-item d-flex">
            <div className ="d-flex align-items-center justify-content-center timerTitle">
                    <span className = "d-flex align-items-center justify-content-center px-1" style = {{color:"#0d6efd"}}> 
                    <b className = "ms-2">{session?.label} {secsToMins} </b> 
                    </span>
            </div>
        </li>
        </>
    :   <>
        <li className = "nav-item me-3">

        <div className="toolTip d-flex justify-content-center align-items-center border-white">
            <button className = "button p-0"
                id = "home"
                onClick = {handleClick}
                > 
                <Play />
            </button>
                <span className = "tooltiptext"> Play </span>
            </div>
        </li>
        <li className = "nav-item me-3">
            <div className="toolTip button d-flex justify-content-center align-items-center border-white">
                <div >
                <PauseFilled />
                </div>
                <div className = 'pauseBarFilled'> </div>
            </div>
        </li>
        <li className = "nav-item d-flex">
            <div className ="d-flex align-items-center justify-content-center timerTitle">
                    <span className = "d-flex align-items-center justify-content-center px-1" style = {{color:"#d00000"}}> 
                    <b className = "ms-2">{session?.label} {secsToMins} </b> 
                    {/* <b>Focusing 40:00 </b>  */}
                    </span>
            </div>
        </li>
    </>
    }
</ul>
}
