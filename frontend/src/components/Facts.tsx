import { useState, useEffect } from 'react'
import data from '../utils/dietFacts.json'

interface Fact {
    condition: string;
    fact: string;
}

export default function Facts(){

    const [fact, setFact] = useState<Fact | null>(null);

    useEffect(() => {
        const min = 0;
        const max = 30;
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        const getFact = data[randomNum]
        setFact(getFact)
        const intervalId = setInterval(() => {
          
        }, 5000);
        
        return () => {
          clearInterval(intervalId);
        };
      }, []);

    return (
        <>
        <h3>Random Facts while you wait:</h3>
        <h4>Condition: {fact?.condition}</h4>
        <p className="randomFact">Fact: {fact?.fact}</p>
        </>
    )
}