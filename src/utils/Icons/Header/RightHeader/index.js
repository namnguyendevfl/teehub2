// import { Blue, IconStroke } from "../../../utils/Color"
import { Blue, IconStroke} from "../../../Color"
import myFace from "./myFace.jpg"

export const PeopleToolTip = () =>
    <svg xmlns="http://www.w3.org/2000/svg" 
        id = "contacts"
        width="23" height="23" className="ionicon" viewBox="0 0 512 512">
        <path
            id = "contacts" 
            d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z" 
fill="black" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
        <path
            id = "contacts" 
            d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z" 
            fill="black" stroke="white" 
            strokeMiterlimit="10" strokeWidth="32"/>
        <path d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z" 
            id = "contacts" 
            fill="black" stroke="white" 
            strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
        <path d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154" 
            id = "contacts" 
            fill="black" stroke="white" 
            strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/></svg>

export const PeopleFilled = () =>
    <svg xmlns="http://www.w3.org/2000/svg" 
        width="23" height="23" 
        id = "contacts"
        className="ionicon" viewBox="0 0 512 512">
        <path d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z" 
            id = "contacts"
            fill={Blue()} stroke={Blue()} 
            strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
        <path d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z" 
            id = "contacts"
            fill={Blue()} stroke={Blue()} 
            strokeMiterlimit="10" strokeWidth="32"/>
        <path d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z" 
            id = "contacts"
            fill={Blue()} stroke={Blue()} 
            strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
        <path d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154" 
            id = "contacts"
            fill={Blue()} stroke={Blue()} 
            strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/></svg>

export const People = () =>
    <svg xmlns="http://www.w3.org/2000/svg" 
        width="23" height="23" className="ionicon" 
        id = "contacts"
        // style = {{marginTop:"-3px"}}
        viewBox="0 0 512 512">
        <path
            id = "contacts" 
            d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z" 
            fill="none" stroke={IconStroke()} 
            strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
        <path
            id = "contacts" 
            d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z" 
            fill="none" stroke={IconStroke()} 
            strokeMiterlimit="10" strokeWidth="32"/>
        <path 
            id = "contacts"
            d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z" 
            fill="none" stroke={IconStroke()} 
            strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
        <path
            id = "contacts" 
            d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154" 
            fill="none" stroke={IconStroke()} 
            strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/>
    </svg>
        

export const TV = () =>
    <svg xmlns="http://www.w3.org/2000/svg" 
        width="23" height="23" 
        // style = {{marginTop:"-5px"}}
        id = "watch"
        className="ionicon" viewBox="0 0 512 512">
        <rect 
            id = "watch"
            x="32" y="96" width="448" height="272" rx="32.14" 
            ry="32.14" 
            fill="none" stroke={IconStroke()} 
            strokeLinejoin="round" strokeWidth="32"/>
        <path 
            id = "watch"
            stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" 
            strokeWidth="32" d="M128 416h256"/>
    </svg>

export const TVToolTip = () =>
    <svg xmlns="http://www.w3.org/2000/svg" 
        id = "watch"
        width="23" height="23" 
        className="ionicon" viewBox="0 0 512 512">
        <rect
            id = "watch" 
            x="32" y="96" width="448" height="272" rx="32.14" 
            ry="32.14" 
            fill="black" stroke="white" 
            strokeLinejoin="round" strokeWidth="32"/>
        <path 
            id = "watch"
            stroke="white" strokeLinecap="round" 
            strokeMiterlimit="10" 
            strokeWidth="32" d="M128 416h256"/>
    </svg>

export const TVFilled = () =>
    <svg xmlns="http://www.w3.org/2000/svg" 
        width="23" height="23" 
        className="ionicon" viewBox="0 0 512 512">
        <rect x="32" y="96" width="448" height="272" rx="32.14" 
            ry="32.14" 
            fill={Blue()}  stroke={Blue()}  
            strokeLinejoin="round" strokeWidth="32"/>
        <path 
            stroke={Blue()} strokeLinecap="round" strokeMiterlimit="10" 
            strokeWidth="32" d="M128 416h256"/>
    </svg>



export const World = () => 
    <svg xmlns="http://www.w3.org/2000/svg"  
        fill={IconStroke()} 
        id = "connect"
        // style = {{marginTop:"-5px"}} 
        // width="23" height="22.5" 
        width="23" height="23" 
        className="bi bi-globe" 
        viewBox="0 0 16 16">
        <path
            id = "connect" 
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
    </svg>

export const WorldFilled = () => 
    <svg xmlns="http://www.w3.org/2000/svg" 
        id = "connect"
        fill={Blue()}
        // width="23.5" height="23" 
        width="23" height="23" 
        className="bi bi-globe" 
        viewBox="0 0 16 16">
        <path
            id = "connect" 
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
    </svg>



export const WorldToolTip = () => 
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
        fill="white"
        width="19" height="19" 
        className="bi bi-globe" 
        viewBox="0 0 16 16">
        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
    </svg>
// export const Connect = () =>
// <svg id="Layer_1" data-name="Layer 1" 
// width="23" height="23" 
// xmlns="http://www.w3.org/2000/svg" 
// viewBox="0 0 121.28 122.88">
// <path d="M50.51,46,64,37a27.93,27.93,0,1,1,6.68,10.72c-.43-.44-.85-.89-1.25-1.35L55.1,55.93a27.8,27.8,0,0,1,.76,6.5,28.37,28.37,0,0,1-.34,4.35L71.67,77.34A27.77,27.77,0,1,1,66.58,87L51.64,77.19a27.93,27.93,0,1,1-4-34.51A29.78,29.78,0,0,1,50.51,46ZM41.4,74.84a19,19,0,0,1-26.93,0L12.8,72.65,14,71.71c2.5-1.48,6.27-1.09,8.73-2.81A7.08,7.08,0,0,0,23.2,68c.23-.53.44-1.1.57-1.49a18.85,18.85,0,0,1-1.49-2.13L20.77,62a4.38,4.38,0,0,1-.86-2.2,1.69,1.69,0,0,1,.15-.79,1.42,1.42,0,0,1,.52-.6,1.55,1.55,0,0,1,.36-.19,38.65,38.65,0,0,1-.07-4.32,5.47,5.47,0,0,1,.19-1,5.78,5.78,0,0,1,2.55-3.26,8.37,8.37,0,0,1,2.14-.95c.48-.13-.41-1.67.09-1.72,2.4-.25,6.29,1.94,8,3.76a5.91,5.91,0,0,1,1.49,3.71l-.1,3.92h0a1.09,1.09,0,0,1,.8.82,3.4,3.4,0,0,1-.42,2.07h0l0,0-1.72,2.84a14.89,14.89,0,0,1-2.12,2.91l.23.33a10.22,10.22,0,0,0,1.12,1.45l0,0c2,1.41,6.81,1.75,8.67,2.78l.07,0,1.22,1a22.07,22.07,0,0,1-1.66,2.16ZM44,46.37a22.72,22.72,0,1,0,6.65,16.06A22.64,22.64,0,0,0,44,46.37Zm63.09,60.25c-5.76,6.39-21.5,6.83-27.43.52l0,0V105.8c0-3.44,5.72-3.5,8.77-5.33,2-1.21,1.68-2.43,1.67-4.44H86.85c-8.32,0-2.84.66-1.71-8.39,1.69-12.77,14.56-12.78,16.46,0C102.82,96.35,108,96,99.89,96H96.64c0,2.22-.36,3.35,1.94,4.6s8.5,1.88,8.5,5v1Zm2.33-27.73A22.72,22.72,0,1,0,116.06,95a22.64,22.64,0,0,0-6.65-16.06Zm-5.47-39.82a19,19,0,0,1-26.93,0l-1.67-2.18L76.56,36c2.5-1.48,6.27-1.09,8.73-2.81a7,7,0,0,0,.46-.88c.23-.53.43-1.1.57-1.49a18.56,18.56,0,0,1-1.5-2.13l-1.51-2.4a4.47,4.47,0,0,1-.86-2.2,1.69,1.69,0,0,1,.15-.79,1.37,1.37,0,0,1,.52-.6,1.43,1.43,0,0,1,.37-.19,36.43,36.43,0,0,1-.07-4.32,5.45,5.45,0,0,1,.18-1,5.76,5.76,0,0,1,2.56-3.26,7.9,7.9,0,0,1,2.14-1c.48-.14-.41-1.67.08-1.72,2.41-.25,6.29,1.94,8,3.76a5.82,5.82,0,0,1,1.48,3.7l-.09,3.93h0a1.1,1.1,0,0,1,.79.82,3.46,3.46,0,0,1-.41,2.07h0l0,0L96.37,28.4a14.49,14.49,0,0,1-2.12,2.91l.23.33a10.3,10.3,0,0,0,1.13,1.45s0,0,0,0c2,1.4,6.82,1.74,8.67,2.78l.08,0,1.22,1a22,22,0,0,1-1.67,2.15Zm2.59-27.2a22.72,22.72,0,1,0,6.65,16.06,22.64,22.64,0,0,0-6.65-16.06Z"/></svg>

export const More = () => 
    <svg xmlns="http://www.w3.org/2000/svg" 
        id = "more"
        width="26" height="26" 
        fill="currentColor" 
        class="bi bi-list" viewBox="0 0 16 16">
        <path 
            id = "more"
            fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>

export const Message = () =>
    <svg xmlns="http://www.w3.org/2000/svg" 
        width="24" height="24" viewBox="0 0 24 24"
        // style = {{marginTop:"-5px"}} 
        id = "messages"
        fill="none" stroke={IconStroke()} 
        strokeWidth="2" strokeLinecap="round" 
        strokeLinejoin="round" className="feather feather-message-square">
        <path
            id = "messages" 
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>

export const MessageFilled = () =>
    <svg xmlns="http://www.w3.org/2000/svg" 
        id = "messages"
        width="24" height="24" viewBox="0 0 24 24" 
        fill={Blue()} stroke={Blue()}
        strokeWidth="2" strokeLinecap="round" 
        strokeLinejoin="round" className="feather feather-message-square">
        <path 
            id = "messages"
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>



export const Notification = () =>
    <svg xmlns="http://www.w3.org/2000/svg" 
        width="26" height="26"
        id = "notifications"  
        // style = {{marginTop:"-1px"}}
        className="ionicon" viewBox="0 0 512 512">
        <path d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16" 
            id = "notifications"  
            fill="none" stroke={IconStroke()} 
            strokeLinecap="round" strokeLinejoin="round" 
            strokeWidth="32"/>
    </svg>

export const NotificationFilled = () =>
    <svg xmlns="http://www.w3.org/2000/svg" 
        id = "notifications"  
        width="26" height="26"  
        className="ionicon" viewBox="0 0 512 512">
        <path d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16" 
            id = "notifications"  
            fill={Blue()}  stroke={Blue()} 
            strokeLinecap="round" strokeLinejoin="round" 
            strokeWidth="32"/>
    </svg>

export const Ava = () => 
    <img    src = {myFace} 
            style = {{ width : "35px", height:"35px", borderRadius:"50%"}} 
    />
    
