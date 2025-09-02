import React from 'react'
import { useState, useEffect } from 'react';

const AccountDate = (props) => {

    const userId = props.id;
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    useEffect(() => {
        function getAccountCreationDate(userId) {
            const discordEpoch = 1420070400000n; // dc epoch
            const snowflake = BigInt(userId);

            const timestamp = (snowflake >> 22n) + discordEpoch;

            const fullDate = new Date(Number(timestamp));
            const date = String(fullDate).split(' ')
            const time = date[4];
            setTime(time);
            setDate(date);
            return date
        }
        getAccountCreationDate(userId);
    }, [])

    const week = date[0]
    const month = date[1]
    const day = date[2]
    const year = date[3]


    return (
        <div>
            Account Created: <span>{week}, {day} {month} {year} at {time}</span>
        </div>
    )
}

export default AccountDate
