import react, { useEffect, useState } from "react";
import './App.css';



function Clock(){
    const [clockState, setClockState] = useState();

    useEffect(() => {

        setInterval(() => {
            const date=new Date();
            setClockState(date.toLocaleTimeString());

        }, 1000);

    }, []);
    return <div className="time"><h1 className="time">{clockState}</h1></div>;
}
export default Clock;