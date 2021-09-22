import React, {useEffect, useState} from "react";
import { Switch, Route,useHistory } from "react-router-dom";
import Footer from "./Footer"
import Header from "./Header";
import Main from "./Main";
import "./index.css"

export default function Layout () {
    const [isTimerRunning, setIsTimerRunning] = useState(false)
    const [session, setSession] = useState(null)
    const [focusInterval, setFocusInterval] = useState(1)
    const [breakInterval, setBreakInterval] = useState(1)
    // Run the past history from localStorage
    const history = useHistory()
    useEffect (() => {
        let storedUrl = window.localStorage.getItem('Url')
            storedUrl = JSON.parse(storedUrl)
        history.push(storedUrl) 
        let storedSession = window.localStorage.getItem('storedSession')
            storedSession = JSON.parse(storedSession)
        let storedBreakInterval = window.localStorage.getItem('storedBreakInterval')
            storedBreakInterval = JSON.parse(storedBreakInterval)
        let storedFocusInterval = window.localStorage.getItem('storedFocusInterval')
            storedFocusInterval = JSON.parse(storedFocusInterval)
        // console.log("storedSession",storedSession)
        // console.log("storedBreakInterval", storedBreakInterval)
        if (storedUrl="/Timer" && session === null) {
            setSession (() => storedSession)
            setBreakInterval(() => storedBreakInterval)
            setFocusInterval (() => storedFocusInterval)
        }
        const timerToolTip = document.querySelector("#timerToolTip")
        if(timerToolTip) timerToolTip.style.display = "none"
    }, [session])
    
    useEffect (() => {
        const lockerBox = document.querySelector(".lockerField");
        if(lockerBox) lockerBox.style.display = "none" 
    },[])
 
    return <>
    <div className = "container-fluid m-0 p-0 position-relative">
        <header className = "mb-3">
            <Header 
                        isTimerRunning = {isTimerRunning} 
                        setIsTimerRunning = {setIsTimerRunning}
                        focusInterval = {focusInterval} 
                        setFocusInterval={setFocusInterval}
                        breakInterval = {breakInterval} 
                        setBreakInterval={setBreakInterval}
                        session = {session} 
                        setSession = {setSession}     
            />
        </header>

        <main className = "vh-100">
            <Main />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
    </>
}