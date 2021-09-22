import React, {useEffect, useState} from "react";
import { Lock, Unlock, ForwardArrow }  from "../../../utils/Icons/Footer";
export default function Locker () {
    const [lock, setLock] = useState(true)
    const [placeholder, setPlaceholder] = useState("")
    // const [displayInput, setDisplayInput] = useState(false)


    // useEffect(() => {
    //     const box = document.querySelector(".lockerField");
    //     box.style.display = "none"  
    // },[])

    const box = document.querySelector(".lockerField");
    if(box !== null)
        lock
        ? box.style.display = "none"
        : box.style.display = "flex"

    
    const handleBtnClick = () => {
        setLock(() => !lock)
        setPlaceholder(() => {if(lock) return ""})   
    }
    const handleBoxClick = ({target}) => {
        setLock(() => false)
        const keyBox = target.parentNode
        keyBox.style.boxShadow = "0px 0px 2px 0.1px blue"
        keyBox.style.border = "1px solid blue"
    }

    const handleChange = ({target}) => {
        setPlaceholder(() => target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        setLock(() => true)
        // setLock(() => (a)?true: false)
        // setDisplayInput (() => false)
        setPlaceholder(() => "")
    }

    window.addEventListener("click",({target}) => {
        const box = document.querySelector(".lockerField");
        if (box !== null)
            if (target.id !== "locker"){
                box.style.boxShadow = "0px 0px 4px 0.5px lightgrey"
                box.style.border = "1px solid lightgrey"
            }
    })  

    return <>
    <div className="">
        <button className = "lockerBtn d-flex justify-content-center align-items-center "
                onClick = {handleBtnClick}>
        {(lock)
            ? <Lock /> 
            : <Unlock /> 
        }
        </button>
        <form className = "p-0 m-0 w-100" 
        // onSubmit={}
        >
        <div  className ="lockerField justify-content-start align-items-center "
               >
            <input  type ="password"
                    //   name = "lock"
                    id = "locker"
                    className ="lockerInput d-flex justify-content-start align-items-center ps-3 "
                    placeholder = "What's your key"
                    onChange = {handleChange}
                    onClick = {handleBoxClick}
                    value = {placeholder}
            ></input>
                
                {/*  forwardArrow in the image style */}
                <div className =" px-1 mt-1">
                <button id = "submit"
                        className ="px-1"
                        type ="submit"
                        onClick = {handleSubmit}   
                        >
                  <ForwardArrow />
                </button>
                </div>
                </div>
              </form>
    </div>
    </>
}