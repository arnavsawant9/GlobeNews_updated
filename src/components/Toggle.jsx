// import React, {useState} from 'react'

// export default function Toggle() {
//     const [myStyle, setMyStyle] = useState({
//         color: "black",
//         backgroundColor: "white"
//       });
      
//       const [btnText, setBtnText] = useState("Enable Dark Mode");
      
//       const toggleStyle = () => {
//         if (myStyle.color === 'black') {
//           setMyStyle({
//             color: "white",
//             backgroundColor: "black",
//             // border: '1px solid white'
//           });
//           setBtnText("Enable Light Mode");
//         } else {
//           setMyStyle({
//             color: "black",
//             backgroundColor: "white"
//           });
//           setBtnText("Enable Dark Mode");
//         }
//       }
//   return (
//     <div><button onClick={toggleStyle} type='button'>{btnText}</button></div>
//   )
// }


import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const Toggle = () => {
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default Toggle;