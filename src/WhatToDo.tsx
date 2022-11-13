import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';

interface WhatToDoType {
    participants: number;
    activity: string;
    type: string;
    price: number;
    link: string;
    key: string;
    accessibility: number;
}

function WhatToDo() {
    const [toDo, setToDo] = useState<WhatToDoType>({
        participants: 0,
        activity: 'loading...',
        type: 'loading...',
        price: 0,
        link: 'loading...',
        key: 'loading...',
        accessibility: 0,
    });

    const [fetchToDo, setFetchToDo] = useState<boolean>(false);

    useEffect(() => {
        axios
            .get('http://localhost:4000/whatToDo')
            .then((res: AxiosResponse) => setToDo(res.data))
            .catch((err) => console.log('Error: ', err));
    }, [fetchToDo]);

    return (
        <>
            <h2>What To Do</h2>
            <h5>Activity type: {toDo.type}</h5>
            <div>Activity: {toDo.activity}</div>
            <div>Participants: {toDo.participants}</div>
            <div>Price: {toDo.price}</div>
            <br />
            <button onClick={() => setFetchToDo((prev) => !prev)}>
                Fetch new activity
            </button>
        </>
    );
}

export default WhatToDo;
