import React, {useState} from "react";
import { Lock, Unlock, ForwardArrow }  from "../../../utils/Icons/Footer";
export default function Locker () {
    const [lock, setLock] = useState(true)
    const [placeholder, setPlaceholder] = useState("")
    const [displayInput, setDisplayInput] = useState(false)
    const handleClick = ({target}) => {
        console.log(target)
        setLock(() => !lock)
        setDisplayInput (() => lock?true:false)
        setPlaceholder(() => {if(lock) return ""})   
    }
    const handleChange = ({target}) => {
        console.log(lock)
        setPlaceholder(() => target.value)}
    let a = false
    const handleSubmit = (event) => {
        event.preventDefault()
        setLock(() => (a)?true: false)
        setDisplayInput (() => false)
        setPlaceholder(() => "")
    }
    let display
    if(displayInput) {display = "flex"; }
    else {  display = "none"
            }

    return <>
    <div className="">
        <button className = "d-flex justify-content-center align-items-center lock"

                onClick = {handleClick}>
        {(lock)
            ? <Lock /> 
            : <Unlock /> 
        }
        </button>
        <form className = "p-0 m-0 w-100" 
        // onSubmit={}
        >
        <div  className ="justify-content-start align-items-center passwordField"
            style = {{ display: `${display}`}}
               >
            <input  type ="password"
                    //   name = "lock"
                    id = "lock"
                    className ="d-flex justify-content-start align-items-center ps-3 lockerInput"
                    style = {{ display: `${display}`}}
                    placeholder = "What's your key"
                    onChange = {handleChange}
                    value = {placeholder}
            ></input>
                
                {/*  forwardArrow in the image style */}
                <div className =" px-1 mt-1">
                <button id = "submit"
                        className =" px-1"
                        type ="submit"
                        onClick = {handleSubmit}   
                        >
                  <ForwardArrow/>
                </button>
                </div>
                </div>
              </form>
    </div>
    </>
}