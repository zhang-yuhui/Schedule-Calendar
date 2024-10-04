import React ,{useState, useEffect} from "react";
import "./App.css"
import Block from "./Block.js";
import data from "./data.json"
const Body = (props) =>{
    const now = new Date();
    const hours = now.getHours();  // Get the current hour (0-23)
    const minutes = now.getMinutes()
    const [time, setTime] = useState(hours + (minutes / 60.0 ));
    const name = ["Ethen", "Ray", "Justin", "William"];
    let header = []
    const timeCol = [<div className="flex-1 flex-grow pt-0.5 border-t-4 border-t-line-light dark:border-t-line-dark ">{"8:00"}</div>]
    for(let i = 9; i <= 21; i++){
        timeCol.push(<div className="flex-1 flex-grow pt-0.5 border-t border-t-line-light dark:border-t-line-dark ">{i+":00"}</div>)
    }
    let schedule = [];
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    for(let i = 0; i < 4; i++){
        let lists = data[i].calendar[daysOfWeek[props.day].toLowerCase()].map((course) => (<Block start={course.start_time} end={course.end_time} name={course.title}/>));
        let time_grid = [];
        for(let i = 8; i <= 21; i++){
            time_grid.push(<div className="flex-grow border-t border-line-light dark:border-line-dark"></div>)
        }

        schedule.push(<div className="border-l-4 border-t-2 border-line-light dark:border-line-dark relative flex flex-col" >
            {lists.concat(time_grid)}
        </div>);
    }
    for(let i = 0;i < 4; i++){
        let text = name[i] + (data[i].calendar[daysOfWeek[props.day].toLowerCase()] == false ? " is free today!" : " starts at " + data[i].calendar[daysOfWeek[props.day].toLowerCase()][0].start_time);
        header.push(<div className="flex-1 border-l-4 border-t-4 border-b-2 border-line-light dark:border-line-dark text-4xl">{text}</div>);
    }
    useEffect(() => {
        const interval = setInterval(() => {
        const now = new Date();
        const hours = now.getHours();  // Get the current hour (0-23)
        const minutes = now.getMinutes()
          setTime(hours + (minutes / 60.0));
        }, 1000);
    
        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
      }, []);
    return (
        <div className=" text-center">
            <div className="flex Header bg-bg_light_secondary dark:bg-bg_dark_secondary">
                <div className="u-width-5 border-line-light dark:border-line-dark b~rder-t-4 border-b-2"></div>
                {header}
            </div>
            <div className="flex Body relative">
                {time >= 8 && time <(21+59/60) && props.line?  <hr className="absolute border border-dashed border-timeline z-50 w-full" style={{top: `${(time-8)/14*100}%`}}/> : ''}
                <div className="flex flex-col u-width-5">
                    {timeCol}
                </div>
                <div className="flex-1 grid grid-cols-4">
                    {schedule}
                </div>
            </div>
        </div>
        
    )
}
export default Body;