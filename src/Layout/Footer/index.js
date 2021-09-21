import React,{useState} from "react";
import { NoteIcon } from "../../utils/Icons/Footer";
import "./index.css"

import Locker from "./Locker";
import Noting from "./Noting";
export default function Footer () {
    const [note, setNote] = useState(false)
    const handleClick = () => {
        setNote(() => !note)
    }
    let display
    (note)
    ? display = "block"
    : display = "none"

    return <>
        <Locker />
        <div >
        <button className = "NoteBtn"
                onClick = {handleClick}
        > 
            <NoteIcon />
        </button>
    </div>
    <div style = {{display : `${display}`}}>
        <Noting />
    </div>
    </>
}