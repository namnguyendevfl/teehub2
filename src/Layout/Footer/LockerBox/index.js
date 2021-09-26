import React from "react"
import LockerLocked from "./LockerLocked"
import LockerUnlocked from "./LockerUnlocked"
export default function LockerBox ({lock, setLock, display, setDisplay}) {
    return <>
        {lock
        ?   <LockerLocked />
        :   <LockerUnlocked 
                lock = {lock}
                setLock = {setLock}
                display = {display}
                setDisplay = {setDisplay}
        />}
    </>
}