import { useEffect, useState } from 'react';

function Timer() {

    //to tie it to state
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {

        // const interval = setInterval(() => {
        //     console.log('The clock is ticking');
        // }, 1000);

        //you can pass a callback function INTO the state updater function which specifies to use the MOST recently updated value of state
        const interval = setInterval(() => {
            setSeconds((seconds) => {
                return seconds + 1
            })
            console.log('The clock is ticking');
        }, 1000);

        //when you define an effect that is repeating/continuous you NEED to CLEAN UP the effect when it's UMmounted from the DOM
        return () => {
            clearInterval(interval);
        }
    }, []);

    // console.log("I have rendered");

    return (
        <section>
            <h2>Welcome to your recipe box!</h2>
            {/* to tie it to state */}
            <p>You've been looking at recipes for { seconds } seconds.</p>
        </section>
    )
}

export default Timer;