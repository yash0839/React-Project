import React, { useEffect, useState } from "react";

const DateTime = () => {
    const [dateTime, setDateTime] = useState("");

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();

            const formatted = now.toLocaleString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
            })
         .replace(",", "")
         .toLowerCase()
         .replace(",", " ");

    setDateTime(formatted);
};

updateDateTime();
const interval = setInterval(updateDateTime, 1000);

return () => clearInterval(interval);
  }, []);

return <div>{dateTime}</div>;
};

export default DateTime;