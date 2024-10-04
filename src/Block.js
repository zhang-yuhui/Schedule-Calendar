import React from "react";


const Block = (props) => {
    const timeConvert = (time) =>{
        const timeParts = time.split(":");

        // Convert the split parts to numbers
        const hours = parseInt(timeParts[0], 10);
        const minutes = parseInt(timeParts[1], 10);
        const ans = hours + minutes/60.0;
        return ans;
    };
    const startPos = (timeConvert(props.start) - 8 )/ 14*100;
    const endPos = (timeConvert(props.end) - 8) / 14*100;
    return <div className="absolute right-0 left-0 flex" style={{top: `${startPos}%`, bottom: `${100-endPos}%`}}>
            <div className="bg-block-light dark:bg-block-dark align-middle flex-1 mx-3 h-full rounded-lg " >{props.name}{endPos-startPos > 1/14*100? <br/>:"\t"}{props.start} - {props.end}</div>
    </div>

}
export default Block;