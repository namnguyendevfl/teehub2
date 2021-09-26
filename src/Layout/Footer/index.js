import React,{useState, useEffect} from "react";
import { NoteIcon } from "../../utils/Icons/Footer";
import Adding from "./Adding";
import "./index.css"
import Locker from "./LockerBtn";
import LockerBar from "./LockerBar";
import Noting from "./Noting";
import LockerBox from "./LockerBox";
export default function Footer (prop) {
    const {
        lock,
        setLock,
        password,
        setPassword
    } = prop

    const [display, setDisplay] = useState (false)
    const handleClick = () => setDisplay(()=>!display)
    const lockerBox = document.querySelector("#lockerBox")
    if(lockerBox)
        if (display)
                lockerBox.style.display = "block"
        else    lockerBox.style.display = "none"
    console.log(display)
    // (display)
    // ? {
        
    //     lockerBox.style.display = "block"
    // }
    // : {

    // }
    return <>
        <div className = "locker" 
            >
            <Locker 
                    lock = {lock}
                    setLock = {setLock}
                    password = {password}
                    setPassword = {setPassword}
            />
        </div>
    
    {/* <div className = "note"
       
        >
        <button className = "noteBtn"
                onClick = {handleClick}
        > 
            <NoteIcon />
        </button>
    </div> */}
    {/* <div    className = "addingBar"
            id = "addingBar"
        >
        <Adding  
                    display = {display}
                    setDisplay = {setDisplay}
                    lock = {lock}
                    setLock = {setLock}
                    
                   
                /> */}

    <button     className = "lockerBar px-3"
                id = "lockerBar"
                onClick = {handleClick}
        >
        <LockerBar
                    // display = {display}
                    // setDisplay = {setDisplay}
                    // lock = {lock}
                    // setLock = {setLock}
                   
                   
                />
    </button>
    {/* <div    className = "lockerBox"
            id = "addingBox"
            >
        <Noting 
                    display = {display}
                    setDisplay = {setDisplay}
                   
        
        />
    </div> */}
    <div    className = "lockerBox"
            id = "lockerBox"
            >
        <LockerBox
                    display = {display}
                    setDisplay = {setDisplay}
                    lock = {lock}
                    setLock = {setLock}
        />
    </div>
    </>
}