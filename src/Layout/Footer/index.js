import React,{useState, useEffect} from "react";
import { NoteIcon } from "../../utils/Icons/Footer";
import Adding from "./Adding";
import "./index.css"
import Locker from "./Locker";
import Noting from "./Noting";
export default function Footer (prop) {
    const {
        lock,
        setLock,
        password,
        setPassword
    } = prop

    const [key, setKey] = useState("hello")
   
    const [display, setDisplay] = useState ("")
    // console.log(display)
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
    <div    className = "addingBar"
            id = "addingBar"
        >
        <Adding  
                    display = {display}
                    setDisplay = {setDisplay}
                    lock = {lock}
                    setLock = {setLock}
                    
                   
                />
    </div>
    <div    className = "addingBox"
            id = "addingBox"
            >
        <Noting 
                    display = {display}
                    setDisplay = {setDisplay}
                   
        
        />
    </div>
    </>
}