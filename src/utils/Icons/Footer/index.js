const background = "#e9ecef"
const iconStroke =  "#6c757d"
const blue =  "#0d6efd"
const red =  "#d00000"

export const Lock = () => 
    <svg xmlns="http://www.w3.org/2000/svg" 
        className="ionicon" width="25" height="25"            
        style = {{background:"none"}}//remove hover effect
        viewBox="0 0 512 512">
        <path d="M336 208v-95a80 80 0 00-160 0v95" 
            fill="none" 
            stroke={blue} 
            strokeLinecap="round" 
            strokeLinejoin="round" strokeWidth="34"/>
        <rect x="96" y="208" width="320" height="272" rx="48" ry="48" 
            fill={blue}  stroke={blue} 
            strokeLinecap="round" strokeLinejoin="round" 
            strokeWidth="32"/></svg>

export const LockBar = () => 
    <svg xmlns="http://www.w3.org/2000/svg" 
        className="ionicon" width="23" height="23"            
        style = {{background:"none"}}//remove hover effect
        viewBox="0 0 512 512">
        <path d="M336 208v-95a80 80 0 00-160 0v95" 
            fill="none" 
            stroke="#6c757d" 
            strokeLinecap="round" 
            strokeLinejoin="round" strokeWidth="32"/>
        <rect x="96" y="208" width="320" height="272" rx="48" ry="48" 
            fill="#6c757d" stroke="#6c757d"
            strokeLinecap="round" strokeLinejoin="round" 
            strokeWidth="32"/>
    </svg>

export const Unlock = () => 
    <svg xmlns="http://www.w3.org/2000/svg" 
        className="ionicon" width="25" height="25" 
        style = {{background:"none"}}
        viewBox="0 0 512 512">
        <path d="M336 112a80 80 0 00-160 0v96" 
            fill="none" stroke={red}  strokeLinecap="round" 
            strokeLinejoin="round" strokeWidth="32"/>
        <rect x="96" y="208" width="320" height="272" rx="48" ry="48" 
            fill={red} stroke={red} strokeLinecap="round" 
            strokeLinejoin="round" strokeWidth="32"/>
    </svg>
    
export const ForwardArrow = () => 
    <svg xmlns="http://www.w3.org/2000/svg" 
        width="16" height="16" 
        fill={red}
        className="bi bi-arrow-right forwardArrow d-flex " 
        viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
    </svg>

export const NoteIcon = () =>
    <svg xmlns="http://www.w3.org/2000/svg" 
        width="25" height="25" fill="#6c757d" 
        className="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
    </svg>

export const Add = () => 
    <svg xmlns="http://www.w3.org/2000/svg" 
        width="30" height="30" 
        fill={blue} 
        class="bi bi-plus" 
        viewBox="0 0 16 16">
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
    </svg>

export const Check = () => 
    <svg xmlns="http://www.w3.org/2000/svg" 
        width="13" height="13" 
        // style = {{  
        //         marginTop:"-2px", background:"#0d6efd", 
        //         borderRadius:"50%",
        //         border:"none",
        //         outline:"none"}}
        fill="white" 
        id ="check"
        className="bi bi-check circleChecked" viewBox="0 0 16 16">
        <path 
            id ="check"
            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
    </svg>

export const Circle = () => 
    <svg xmlns="http://www.w3.org/2000/svg" 
        width="13" height="13" 
        // style = {{marginTop:"-2px"}}
        id = "uncheck"
        // fill="#6c757d" 
        fill={iconStroke}
        
        className="bi bi-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    </svg>

export const Trash = () => 
    <svg xmlns="http://www.w3.org/2000/svg" 
        width="27" height="20" 
        id = "delete"
        fill= {red}className="bi bi-trash" 
        viewBox="0 0 16 16">
        <path 
            id = "delete"
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path 
            id = "delete"
            fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg>



export const DownChevron = () => 
    <svg xmlns="http://www.w3.org/2000/svg" 
        width="17" height="17" 
        fill="black" 
        className="bi bi-chevron-double-down" viewBox="0 0 16 16">
        <path 
            fill-rule="evenodd" 
            d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
        <path 
            fill-rule="evenodd" 
            d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>