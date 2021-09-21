import React from "react"
import { Add } from "../../../../utils/Icons/Footer"


export default function Books() {
    return <>
<div className = "px-4 py-1 d-flex w-100 ">
<input  className = "addItems w-100"
        placeholder = "Add a book"
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
    <ol className = "itemList p-0">
        <li > 
            <button className ="item w-100 px-4 py-3 d-flex justify-content-start">
            book 1 
            </button>
        </li >
        <li > 
            <button className ="item w-100 px-4 py-3 d-flex justify-content-start">
            book 2 
            </button>
        </li >
    </ol>
</div>

    </>
}
