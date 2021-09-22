import React from "react";
import { DownChevron } from "../../../utils/Icons/Footer";
import Books from "./Books";
import Messages from "./Messages";
import Notes from "./Notes";
import TODOs from "./ToDos";
export default function Noting ({display, setDisplay}) {
    
    const handleClick = (event) => {
        event.preventDefault();
        setDisplay(() => event.target.id)
    }

    const handleDownChevron = () => {
        const addingBox = document.querySelector("#addingBox")
        addingBox.style.display = "none"      
        const addingBar = document.querySelector("#addingBar")
        addingBar.style.display = "block"
    }
    
    const selectedDisplay = ((display) => {
        const notingBox = document.querySelector(".notingBox")
        if(notingBox){
            const spans = notingBox.querySelectorAll("span")
            if(display)
            for (let span of spans.values()){
                (span.id === display)
                ? span.style.color = "#0d6efd" 
                : span.style.color = "currentcolor"
        }
        }
        switch(display) {
            case "notebooks": 
                return <Books />  
            case "messages": 
                return <Messages />
            case "toDos":  
                return <TODOs />
            case "passwords":
                return <> passwords </>              
            default: <> </>
        }
    })


    // const chosenDisplay = (() => {
    //     
    //     }
        
    // })()

    return <>
    <div 
            className ="notingBox p-0"
    >
        <div className = "row m-0">
        <div className = " col-11 d-flex pe-0 "
            // className = {{width:"300px"}}
            >
            <ul className = "m-1 navbar-nav d-flex flex-row justify-content-evenly w-100 py-1">
                <li className ="nav-item">
                    <button className ="books item" 
                            id = "notebooks"
                            onClick = {handleClick}            
                    > 
                    <span id = "notebooks"> 
                        Notebooks 
                    </span>
                    </button>
                </li>
                <li className ="nav-item">
                    <button className ="notes item" 
                            id = "messages"
                            onClick = {handleClick}    > 
                        <span  id = "messages">
                            Messages 
                        </span>
                    </button>
                </li>
                <li className ="nav-item">
                    <button className ="TODOs item" 
                            id = "toDos"
                            onClick = {handleClick}    > 
                        <span  id = "toDos">
                            ToDos 
                        </span>        
                    </button>
                </li >
                <li className ="nav-item">
                    <button className ="passwords item" 
                            id = "passwords"
                            onClick = {handleClick}    > 
                        <span id = "passwords">
                            Locker
                        </span>    
                    </button>
                </li>
                {/* <li className ="pe-1">
                    <button className = "chevronBtn">
                    <DownChevron />
                    </button>
                </li> */}
            </ul>
        </div>
        <div className = "col-1 d-flex align-items-center justify-content-center float-end px-0 mx-0"> 
            <button 
                    className = "chevronBtn"
                    onClick = {handleDownChevron}
            >
                    <DownChevron />
            </button>
        </div>
        </div>
        <hr className ="m-0 p-0"/>
       {/* {chosenDisplay} */}
       {selectedDisplay(display)}
    </div>
    </>
    }