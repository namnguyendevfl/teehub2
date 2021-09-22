import React, {useEffect} from "react";
import { Switch, Route,useHistory } from "react-router-dom";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";
import SearchBox from "./Search";
import "./index.css"
import ProgressBar from "./Progress";
export default function Header (prop) {
    const { 
        isTimerRunning, 
        setIsTimerRunning,  
        session, 
        setSession,
        focusInterval, 
        setFocusInterval,
        setBreakInterval,
        breakInterval,  
    } = prop

    return <>
        <div className ="row w-100 p-1 d-flex align-items-center justify-content-start flex-nowrap headerBar" >
            <div className =" col leftBar ms-3 me-md-3 me-2 d-flex flex-nowrap justify-content-start m-0 p-0">
                <LeftHeader     
                      isTimerRunning = {isTimerRunning} 
                      setIsTimerRunning = {setIsTimerRunning}
                      focusInterval = {focusInterval} 
                      setFocusInterval={setFocusInterval}
                      breakInterval = {breakInterval} 
                      setBreakInterval={setBreakInterval}
                      session = {session} 
                      setSession = {setSession}  
                />                  
            </div>
            <div className = " col">
                <SearchBox />
            </div>
            <div className =" col d-flex flex-nowrap justify-content-end ms-md-3 p-0 me-3 rightBar">
                <RightHeader />
            </div>
        </div>
        {/* {session && */}
             <div> 
               <ProgressBar  isTimerRunning = {isTimerRunning} session = {session}  
               />
             </div>
            {/* // : <div style={{ background:"blue", height:"13px" }}> </div> */}
        {/* } */}
    </>
}