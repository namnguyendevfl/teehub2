import React, {useEffect, useState} from "react";
import { Lock, Unlock, ForwardArrow }  from "../../../utils/Icons/Footer";
export default function Locker (prop) {
    // const {
    //     lock,
    //     setLock,
    //     key,
    //     setKey
    // } = prop
    const [lock, setLock] = useState(true)
    const [key, setKey] = useState("")
    const [lockerFormDisplay, setLockerFormDisplay] = useState (false)
    const [error, setError] = useState(false)
    // Set up the passwordbox to disappear when we load up
    useEffect (() => {
        const passwordError = document.querySelector("#passwordError")
            if(passwordError) {
                if (error === true)
                passwordError.style.display = "block"
                else passwordError.style.display = "none"
                }
        const lockerForm = document.querySelector(".lockerForm");
        if(lockerForm  !== null)
            lockerFormDisplay === true
            ? lockerForm .style.display = "flex"
            : lockerForm .style.display = "none"
    },[lockerFormDisplay, error])

    const handleLockerBtnClick = () => {
        setLock(() => !lock);
        (lock === true) 
        ?   setLockerFormDisplay (() => !lockerFormDisplay)
        :   setLockerFormDisplay (() => false)
        setKey(() => {if(lock) return ""})   
    }

    const handleBoxClick = ({target}) => {
        setLock(() => false)
        const keyBox = target.parentNode
        keyBox.style.boxShadow = "0px 0px 2px 0.1px blue"
        keyBox.style.border = "1px solid blue"
    }

    const handleChange = ({target}) => {
        setKey(() => target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if(key === "a") 
        {   
            setLock(() => false)
            setError(()=>false)
            setLockerFormDisplay (() => false)
        }
        else {
            setLock(() => false)
            setError(() => true)
        } 
    }

    window.addEventListener("click",({target}) => {
        const box = document.querySelector(".lockerForm");
        if (box !== null)
            if (target.id !== "locker"){
                box.style.boxShadow = "0px 0px 4px 0.5px lightgrey"
                box.style.border = "1px solid lightgrey"
            }
        if (key !== "a"){
            if (target.id !== "submit")
            setError(() => false)
        }
    })  

    //Decoding with the key
   
    return <>
    <div className="">
        <button className = "lockerBtn d-flex justify-content-center align-items-center "
                onClick = {handleLockerBtnClick}>
        {(lock)
            ? <Lock /> 
            : <Unlock /> 
        }
        </button>
        <form   className = "lockerForm p-0 m-0 justify-content-start align-items-center " 
                id = ""
                onSubmit={handleSubmit}
        >
            {/* <div  className ="lockerForm d-flex justify-content-start align-items-center " */}
               {/* > */}
                <input  type ="password"
                    //   name = "lock"
                    id = "locker"
                    className ="lockerInput d-flex justify-content-start align-items-center ps-3 "
                    placeholder = "What's your key"
                    onClick = {handleBoxClick}
                    onChange = {handleChange}
                    value = {key}
                >
                </input>
                
                {/*  forwardArrow in the image style */}
                <div    className =" submitBtn px-1"
                        id = "submit"
                        >
                    <button 
                        id = "submit"
                        className ="submitBtn px-1"
                        type ="submit"
                        onClick = {handleSubmit }
                        >
                  <ForwardArrow />
                </button>
                </div>
            {/* </div> */}
        </form>
        <button     className = "errorField"
                        id = "passwordError"
                >
                    error
            </button> 

    </div>
    </>
}