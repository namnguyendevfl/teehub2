import React, {useEffect, useState} from "react";
import { Switch, Route,useHistory } from "react-router-dom";
import Footer from "./Footer"
import Header from "./Header";
import Main from "./Main";
import "./index.css"

export default function Layout () {
    //First part: Running Pomodoro
    const [isTimerRunning, setIsTimerRunning] = useState(false)
    const [session, setSession] = useState(null)
    const [focusInterval, setFocusInterval] = useState("")
    const [breakInterval, setBreakInterval] = useState("")
    // Run the past history from localStorage
    const history = useHistory()
    useEffect (() => {
        let storedUrl = window.localStorage.getItem('Url')
            storedUrl = JSON.parse(storedUrl)
        if(storedUrl)
        history.push(storedUrl) 
        let storedSession = window.localStorage.getItem('storedSession')
            storedSession = JSON.parse(storedSession)
        let storedBreakInterval = window.localStorage.getItem('storedBreakInterval')
            storedBreakInterval = JSON.parse(storedBreakInterval)
        let storedFocusInterval = window.localStorage.getItem('storedFocusInterval')
            storedFocusInterval = JSON.parse(storedFocusInterval)
        // console.log("storedSession",storedSession)
        // console.log("storedBreakInterval", storedBreakInterval)
        // console.log("storedFocuskInterval", storedFocusInterval)
        if (storedUrl="/Timer" && session === null) {
            setSession (() => storedSession)
            // setBreakInterval(() => storedBreakInterval)
            // setFocusInterval (() => storedFocusInterval)
        }
        // Fix a pomodoro bug when its not running the next session after refresshing b/c I didnt add interval to the session
        else {
            setSession (() => session)
            setBreakInterval (() => session.interval)
            setFocusInterval (() => session.interval)
        }
        const timerToolTip = document.querySelector("#timerToolTip")
        if(timerToolTip) timerToolTip.style.display = "none"
    }, [session])
    const [lock, setLock] = useState(true)
    const[password, setPassword] = useState ("hello")

    // Second part: handleLocker
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
            <Footer lock = {lock}
                    setLock = {setLock}
                    password = {password}
                    setPassword = {setPassword}
            />
        </footer>
    </div>
    </>
}