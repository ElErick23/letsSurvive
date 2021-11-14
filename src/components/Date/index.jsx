import react, { useEffect, useState } from "react";

function FormatDate() {
    const [today, setToday] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setToday(new Date()), 1000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <div className="date">
            <h1 className="date">
                {`${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`}
            </h1>
        </div>
    );
}
export default FormatDate;