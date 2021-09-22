import React from "react";
import { Add, Circle, Check, Trash } from "../../../../utils/Icons/Footer"

export default function TODOs() {
    return <>
<div className = "px-4 py-1 d-flex w-100 ">
<input  className = "addItems todo w-100"
        placeholder = "Add a to-do"
>
</input>
<button className = "addBtn"> 
    <span>
        <Add />
    </span>
</button>
</div>
{/* <hr className = "p-0 m-0 bg-primary color-primary"/> */}

<div className = "itemBox vh-100">
<ol className = " itemList p-0">
    <li className ="pe-4 ps-3 py-2"> 
        <span className = "check"> 
            <button> <Circle /> </button>
        </span> 
        <span className = "check"> 
            <button> <Check /> </button>
        </span>
        item 1 
        <span className = "trash">
            <button> <Trash /> </button>
        </span>
    </li >
    <li className ="pe-4 ps-3 py-2"> 
        <span className = "check"> 
            <button> <Circle /> </button>
        </span> 
        <span className = "check"> 
            <button> <Check /> </button>
        </span>
        item 2
        <span className = "trash">
            <button> <Trash /> </button>
        </span>
    </li >
</ol>
</div>

    </>
}
