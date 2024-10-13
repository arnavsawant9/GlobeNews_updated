// import React from "react";
// import { ReactComponent as Sun } from "./Sun.svg";
// import { ReactComponent as Moon } from "./Moon.svg";
// import "./DarkMode.css";

// const DarkMode = () => {
//     const setDarkMode = () => {
//         document.querySelector("body").setAttribute("data-theme", "dark")
//     }
//     const setLightMode = () => {
//         Document.querySelector("body").setAttribute("data-theme", "light")
//     }
//     setDarkMode()
//     return (
//         <div className='dark_mode'>
//             <input
//                 className='dark_mode_input'
//                 type='checkbox'
//                 id='darkmode-toggle'
//             />
//             <label className='dark_mode_label' for='darkmode-toggle'>
//                 <Sun />
//                 <Moon />
//             </label>
//         </div>
//     );
// };

// export default DarkMode;


import React, { useState } from "react";
// import { ReactComponent as Sun } from "./Sun.svg";
// import Moon from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleTheme = () => {
    if (isDarkMode) {
      setLightMode();
    } else {
      setDarkMode();
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className='dark_mode'>
      <input
        className='dark_mode_input'
        type='checkbox'
        id='darkmode-toggle'
        onChange={toggleTheme}
        checked={isDarkMode}
      />
      <label className='dark_mode_label' htmlFor='darkmode-toggle'>
        {/* <Sun />
        <Moon /> */}
      </label>
    </div>
  );
};

export default DarkMode;