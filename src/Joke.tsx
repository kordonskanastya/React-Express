import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';

interface JokeType {
    id: number;
    type: string;
    setup: string;
    punchline: string;
}

function Joke() {
    const [joke, setJoke] = useState<JokeType>({
        id: 0,
        type: 'loading...',
        setup: 'loading...',
        punchline: 'loading...',
    });

    const [fetchNewJoke, setFetchNewJoke] = useState<boolean>(false);

    useEffect(() => {
        axios
            .get('http://localhost:4000/getAJoke')
            .then((res: AxiosResponse) => setJoke(res.data))
            .catch((err) => console.log('Error: ', err));
    }, [fetchNewJoke]);

    return (
        <>
            <h2>JOKE TIME</h2>
            <h5>Joke type: {joke.type}</h5>
            <div>Joke: {joke.punchline}</div>
            <br />
            <button onClick={() => setFetchNewJoke((prev) => !prev)}>
                Fetch new joke
            </button>
        </>
    );
}

export default Joke;
