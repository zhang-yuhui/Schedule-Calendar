import React, { useState, useEffect} from "react";
import "./App.css";
import "./chevron-left.svg" 
const NavBar = (props) => {
    const [daysAdded, setDaysAdded] = useState(0);
    const [time, setTime] = useState(new Date());
    
    const increaseDay = ()=>{
        setDaysAdded(daysAdded + 1);
        props.setDay((props.day + 1 + 7)%7);

    }
    const decreaseDay = ()=>{
        setDaysAdded(daysAdded - 1);
        props.setDay((props.day - 1 + 7)%7);
    }
    const resetDay = () =>{
        setDaysAdded(0);
        props.setDay((props.day - daysAdded +70 )%7);
        props.setLine(true);
        
    }
    useEffect(( )=>{
        props.setLine(daysAdded === 0? true :false);
    },[daysAdded]);
    const current_day = () => {
        const result = new Date();
        result.setDate(result.getDate() + daysAdded);
        return result;
    }
    const options = {weekday:"long", month: 'long', day: 'numeric' };
    useEffect(() => {
        const interval = setInterval(() => {
          setTime(new Date());
        }, 1000);
    
        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
      }, []); 
    const time_option = {hour: '2-digit', minute: '2-digit',hour12: false , second:"2-digit"};
    let arrow_left=(<svg xmlns="http://www.w3.org/2000/svg" width="56" height="48" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
      </svg>);
    let arrow_right=(<svg xmlns="http://www.w3.org/2000/svg" width="56" height="48" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
      </svg>);
    return (
    <nav className="NavBar flex relative px-4 items-center bg-bg_light_secondary dark:bg-bg_dark_secondary text-5xl">
        <h1 className="absolute justify-self-start">{time.toLocaleTimeString('en-US', time_option)}</h1>
        <span className="w-full text-center text-7xl">{`${current_day().toLocaleDateString('en-US', options)}`}</span>
        <div className="flex absolute right-0 px-8">
            <button className="rounded-2xl px-2 py-3 border border- border-solid border-block-light  bg-button-light active:bg-button-active-light dark:border-line-dark  dark:bg-button-dark dark:active:bg-button-active-dark" onClick={decreaseDay}>
                {arrow_left}
            </button>
            <button className="rounded-2xl px-5 py-3 mx-2 border border- border-solid border-block-light  bg-button-light active:bg-button-active-light dark:border-line-dark  dark:bg-button-dark dark:active:bg-button-active-dark"onClick={resetDay}>
                Today
            </button>
            <button className="rounded-2xl px-2 py-3 border border- border-solid border-block-light  bg-button-light active:bg-button-active-light dark:border-line-dark  dark:bg-button-dark dark:active:bg-button-active-dark" onClick={increaseDay}>
                {arrow_right}
            </button>
        </div>
    </nav>)
}
export default NavBar;