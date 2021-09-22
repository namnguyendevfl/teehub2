import React from "react";
import LockerCharacters from "./RandomCharacters";
export default function Locker () {
    return <>
    <div>
    <div className = "px-4 py-1 d-flex w-100 ">
        <input  className = "addItems todo w-100"
            placeholder = "Enter your key, and then chose your pattern"
        >
        </input>
        {/* <button className = "addBtn"> 
            <span>
            <Add />
            </span>
        </button> */}
    </div>
        <hr className = "hr p-0 m-0" style = {{height:"0.5px"}}/>
    <div className = "pattern">
        <LockerCharacters />
    </div>
    </div>
    </>
}