import "./Clock.css"
import { useState } from "react";

const Clock = () => {

    let time = new Date().toLocaleTimeString();
    const datestr = new Date().toDateString();
    const [clockTime, setClockTime] = useState(time);

    const UpdateClock = () => {
        time=new Date().toLocaleTimeString();
        setClockTime(time);
    };

    setInterval(UpdateClock,1000);

    return(
        <div className="clock">
            <h1> {clockTime} </h1>
            <h2> {datestr} </h2>
        </div>
    )
}

export default Clock;