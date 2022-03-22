import { useEffect, useState } from 'react';
import Timer from './Timer';

function UserPage() {

    //whether the user is logged in
    const [clock, setClock] = useState(false);
    
    const [food, setFood] = useState("");

    useEffect(() => {
        fetch("https://random-data-api.com/api/food/random_food")
            .then(res => res.json())
            .then((jsonRes) => {
                // console.log(jsonRes);
                setFood(jsonRes.dish);
            })
    }, []);

    //define our event handlers (AKA what will happen once our events occur - HOW WILL THEY BE HANDLED)
    const handleClick = () => {
        //updating the loggedIn state
        setClock(!clock);
    }

    // console.log("I have rendered");

    return (
        <section className="cool">
            <p>Today's featured recipe is: {food}</p>
            <button onClick={handleClick}>{clock ? "Logout" : "Login to see some recipes"}</button>
            {
                clock ? <>
                    <Timer />
                </>
                    : null
            }

            {/* another way of writing this 👆🏽: */}
            {/* { loggedIn && <Timer />} */}
        </section>
    )
}

export default UserPage;