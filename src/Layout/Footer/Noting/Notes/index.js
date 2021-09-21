import React from "react"
import { Add } from "../../../../utils/Icons/Footer"

export default function Notes() {
    return <>
<div className = "px-4 py-1 d-flex w-100 ">
<input  className = "addItems todo w-100"
        placeholder = "Add a note"
>
</input>
<button className = "addBtn"> 
    <span>
        <Add />
    </span>
</button>
</div>
<hr className = "p-0 m-0"/>
<div>
<ol className ="itemList p-0">
    <li > 
        <button className ="item w-100 px-4 py-3 d-flex justify-content-start">
        Note 1 
        </button>
    </li >
    <li > 
        <button className ="item w-100 px-4 py-3 d-flex justify-content-start">
        Note 2 
        </button>
    </li >
</ol>
</div>

    </>
}