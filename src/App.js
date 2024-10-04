import './App.css';
import React, { useState, useEffect} from 'react';
import NavBar from './NavBar';
import Body from './Body';
const App = () =>{
  const [day, setDay] = useState((new Date().getDay() + 6)%7);//new Date("2024-09-07").getDay());
  const [line, setLine] = useState(true);
  //reload every day;
  useEffect(() => {
    const now = new Date();

    // Calculate the time until the next midnight
    const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const timeUntilMidnight = nextMidnight - now;

    // Set a timeout to reload the page at the next midnight
    const timeout = setTimeout(() => {
      window.location.reload(true);

      // After reloading at the first midnight, set an interval to reload every 24 hours
      const interval = setInterval(() => {
        window.location.reload(true);
      }, 86400000); // 24 hours in milliseconds

      // Clear the interval when the component unmounts
      return () => clearInterval(interval);
    }, timeUntilMidnight);

    // Cleanup the timeout if the component unmounts before midnight
    return () => clearTimeout(timeout);
  }, []); 
  return (
    <div className="App p-0 m-0 bg-bg_light dark:bg-bg_dark text-text-light dark:text-text_dark text-3xl">
      <NavBar setDay={setDay} day = {day} setLine={setLine} />
      <Body day = {day} line={line}/>
    </div>
  );
}

export default App;
