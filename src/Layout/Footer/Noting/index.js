import React, {useState} from "react";
import Books from "./Books";
import Messages from "./Messages";
import Notes from "./Notes";
import TODOs from "./ToDos";
export default function Noting () {
    const [display, setDisplay] = useState ("")
    const handleClick = (event) => {
        event.preventDefault();
        const button = event.target.parentNode
        const li = button.parentNode
        const ul = li.parentNode
        const btns = ul.querySelectorAll("button")
        for (let btn of btns.values()) {
            const bold = btn.querySelector("b")
            btn.innerText===event.target.innerText 
                ? bold.style.color = "#0d6efd" 
                : bold.style.color = "currentcolor"
        }
        
        
        setDisplay(() => event.target.innerText)
    }
    
    const chosenDisplay = (() => {
        switch(display) {
            case "Books": 
                return  <Books />
            case "Notes": 
                return  <Notes />
            case "TODOs":  
                return  <TODOs />
        }
        
    
       
    })()
    
    return <>
    <div className ="notingBox p-0">
        <div className = "d-flex container-fluid ">
            <ul className = "m-1 navbar-nav d-flex flex-row justify-content-evenly w-100 py-1">
                <li className ="nav-item">
                    <button className ="books" id = "Books"
                        onClick = {handleClick}            
                    > <b >Books</b> </button>
                </li>
                <li className ="nav-item">
                    <button className ="notes" id = "Notes"
                        onClick = {handleClick}    > 
                    <b >Notes</b> </button>
                </li>
                <li className ="nav-item">
                    <button className ="TODOs" id = "TODOs"
                    onClick = {handleClick}    > 
                    <b >TODOs</b> </button>
                </li >
                <li className ="nav-item">
                    <button onClick = {handleClick}    > 
                    <b >Messages</b> </button>
                </li>
            </ul>
        </div>
        <hr className ="m-0 p-0"/>
       {chosenDisplay}
    </div>
    </>
    }