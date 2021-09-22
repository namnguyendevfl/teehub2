import React from "react";
export default function Adding ({setDisplay}) {
   
    const handleClick = ({target}) => {
        const addingBox = document.querySelector("#addingBox")
        addingBox.style.display = "block"
        const addingBar = document.querySelector("#addingBar")
        addingBar.style.display = "none"
        setDisplay (() => target.id)
    }
    return <>
   <ul className = "m-1 navbar-nav d-flex flex-row align-item-center justify-content-evenly w-100 py-1">
                <li className ="nav-item book d-flex flex-row align-item-center">
                    <button className ="item p-0 book d-flex flex-row align-item-center" 
                            id = "notebooks"
                        onClick = {handleClick}            
                    > 
                    {/* <span className = "item" >Notebooks</span>  */}
                    Notebooks
                    </button>
                </li>
                <li className ="nav-item">
                    <button className ="p-0 item d-flex flex-row align-item-center" 
                            id = "messages"
                        onClick = {handleClick}            
                    > 
                    Messages
                    
                    </button>
                </li>
                <li className ="nav-item">
                    <button className ="p-0 item d-flex flex-row align-item-center" 
                            id = "toDos"
                        onClick = {handleClick}            
                    > 
                    ToDos
                    </button>
                </li >
                <li className ="nav-item">
                    <button className ="p-0 item d-flex flex-row align-item-center" 
                            id = "passwords"
                        onClick = {handleClick}            
                    > 
                    Locker
                    </button>
                </li>
            </ul>
    </>
}