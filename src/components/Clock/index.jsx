import react, { useEffect, useState } from "react";

function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    return <div className="time"><h1 className="time">{date.toLocaleTimeString()}</h1></div>;
}
export default Clock;