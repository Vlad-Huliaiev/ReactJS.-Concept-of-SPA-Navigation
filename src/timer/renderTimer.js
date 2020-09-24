import React from 'react';
import Timer from "./timer.js";
import './renderTimer.css';

class renderTimer extends React.Component {
    render() {
        return (
            <div className="renderTimer">
                <Timer count={27000} step={1000}/>
                <Timer count={20000} step={1000} autostart
                    timerStart={() => console.log("Timer started")}
                    timerStop={() => console.log("Timer stopped")}
                    timerReset={() => console.log("Timer restarted")}
                />
            </div>
        )
    }
}

export default renderTimer;