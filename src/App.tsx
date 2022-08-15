import React, {useEffect, useState} from 'react';
import Clock from "./components/Clock";
import './App.css';
import SemiCircle from "./components/SemiCircle";

function App() {
    const [seconds, setSecond] = useState(0);
    const [minutes, setMinute] = useState(0);
    const [hours, setHour] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setClock();
        }, 1000)
    }, [])

    const setClock = () => {
        const currentDate = new Date;
        let secondsRatio = currentDate.getSeconds() / 60;
        let minutesRatio = currentDate.getMinutes() / 60;
        let hoursRatio = currentDate.getHours() / 60;
        setSecond(secondsRatio);
        setMinute(minutesRatio);
        setHour(hoursRatio);
    }

    return (
        <div className="App">
            <Clock seconds={seconds} minutes={minutes} hours={hours}/>
            <SemiCircle/>
        </div>
    );
}

export default App;
