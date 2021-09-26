import React from "react"
import Noting from "../../Noting"
export default function LockerUnlocked ({lock, setLock, display, setDisplay}) {
    return <div>
        <Noting 
            lock = {lock}
            setLock = {setLock}
            display = {display}
            setDisplay = {setDisplay}
        />
    </div>
}