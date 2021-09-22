import React,{useState} from "react";
import { NoteIcon } from "../../utils/Icons/Footer";
import Adding from "./Adding";
import "./index.css"
import Locker from "./Locker";
import Noting from "./Noting";
export default function Footer () {
    const [display, setDisplay] = useState ("")
    return <>
        <div className = "locker" 
            >
            <Locker />
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