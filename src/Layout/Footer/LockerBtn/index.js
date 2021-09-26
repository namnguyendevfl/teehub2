import React, {useEffect, useState} from "react";
import { Lock, Unlock, ForwardArrow }  from "../../../utils/Icons/Footer";
export default function Locker (prop) {
    const {
        lock,
        setLock,
        password,
        setPassword,
    } = prop
    const [lockBtn, setLockBtn] = useState(true)
    const [inputKey, setInputKey] = useState("")
    const [lockerFormDisplay, setLockerFormDisplay] = useState (false)
    const [lockerBtnDisplay,setLockerBtnDisplay] = useState (true)
    const [error, setError] = useState(false)
    const [boxBorder, setBoxBorder] = useState(false)
        // Set up the passwordbox to disappear when we load up
    useEffect (() => {
        const passwordError = document.querySelector("#passwordError")
            if(passwordError) {
                if (error === true)
                passwordError.style.display = "flex"
                else passwordError.style.display = "none"
                }
        const lockerForm = document.querySelector(".lockerForm");
        if(lockerForm  !== null)
            lockerFormDisplay === true
            ? lockerForm .style.display = "flex"
            : lockerForm .style.display = "none"
    },[lockerFormDisplay, error])

    const handleLockerBtnClick = () => {
        setLockBtn(() => !lockBtn);
        (lockBtn === true) 
        ?   setLockerFormDisplay (() => !lockerFormDisplay)
        :   setLockerFormDisplay (() => false)
        setInputKey(() => {if(lockBtn) return ""})  
        if(lock===false) setLock (()=>true)  
    }

    const handleBoxClick = ({target}) => {
        setLockBtn(() => false)
        setBoxBorder (()=>true)
        setError (()=>false)
        const keyBox = target.parentNode
        keyBox.style.boxShadow = "0px 0px 2px 0.1px blue"
        keyBox.style.border = "1px solid blue"
    }

    const handleChange = ({target}) => {
        setInputKey(() => target.value)
        setBoxBorder (()=>true)
        setError(()=>false)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if(inputKey === password)
        {   
            setError(()=>false)
            setLockerFormDisplay (() => false)
            setLockBtn(() => false)
            setLock(() => false)
        }
        else {
            setLockBtn(() => false)
            setError(() => true)
            setLock(() => true)
        } 
    }


    const keyBox = document.querySelector(".lockerForm");
    if (keyBox !== null)
        if (boxBorder === true)
            {   keyBox.style.boxShadow = "0px 0px 2px 0.1px blue"
                keyBox.style.border = "1px solid blue"}

    console.log(boxBorder)
    window.addEventListener("click",({target}) => {
        const box = document.querySelector(".lockerForm");
        if (box !== null)
            if (target.id !== "locker" && target.id !== "submit"){
                box.style.boxShadow = "0px 0px 4px 0.5px lightgrey"
                box.style.border = "1px solid lightgrey"
            }
        if(inputKey !== password)
        {
            if (target.id !== "submit")
            setError(() => false)
        }
    })  

    //Decoding with the key
   
    return <>
    <div className="">
        <div 
            style = {{background: "blue"}}
            >
        <button className = "lockerBtn d-flex justify-content-center align-items-center border-0"
                onClick = {handleLockerBtnClick}>
        {(lockBtn)
            ? <Lock /> 
            : <Unlock /> 
        }
        </button>
        </div>
        <form   className = "lockerForm p-0 m-0 justify-content-start align-items-center " 
                id = ""
                onSubmit={handleSubmit}
        >
            {/* <div  className ="lockerForm d-flex justify-content-start align-items-center " */}
               {/* > */}
                <input  type ="password"
                    //   name = "lock"
                    id = "locker"
                    className ="lockerInput d-flex justify-content-start align-items-center px-3 "
                    
                    // className ="lockerInput d-flex justify-content-start align-items-center ps-3 "
                    placeholder = "What's your key"
                    onClick = {handleBoxClick}
                    onChange = {handleChange}
                    
                    value = {inputKey}
                >
                </input>
                
                {/*  forwardArrow in the image style */}
                {/* <div    className ="submitBtn px-1"
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
                </div> */}
            {/* </div> */}
        </form>
        <div     className = "errorField px-3"
                        id = "passwordError"
                >
                    Incorrect key. Try again!
        </div> 

    </div>
    </>
}