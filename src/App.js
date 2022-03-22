import './App.css';
//import that Hooks we will be using in this component
import { useState, useEffect } from 'react';
import UserPage from './UserPage';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const [user, setUser] = useState("someone");

  const [likes, setLikes] = useState(0);

  //OUR FIRST "side effect" is to simply run an effect every single time the component renders
  useEffect(() => {
    //this is where we define the side effect we wish to run
    //AKA every single time the component renders, we're gonna off and do some work on the side (like grabbing data from an API)
    console.log("this side effect runs EVERY TIME the App component renders (AKA every time ANY PIECE of state changes).")
  })

  //HOW do we run useEffect (AKA a "side effect") ONLY in reference to a specific state (and not every single piece of state)?
  useEffect(() => {
    //this is where we define the side effect which will run ONLY when the state variable changes
    console.log("this side effect will only run when the `loggedIn` state has initialized/changed");

    //when a user logs in, I want to fetch some data from a number API and put that information on the page
    if (loggedIn) {
      setUser(user + "🤙🏽")
    } 
  }, [loggedIn])
  //pass 👆🏽 the state variable into the second array argument of the useEffect Hook

  //the empty array ensures that this "side effect" will only run once (specifically when the component is mounted to the DOM)
  //so when any other state updates and the component re-renders, this useEffect will NOT run
  //this structure is good for single-use API calls
  //WHY? because it's runs ONCE on mount and then never again on subsequent re-renders
  useEffect(() => {
    console.log("Just log this for me one time on component mount")
  }, [])

  //if you only want to run a useEffect if a condition is met:
  useEffect(() => {
    if (likes > 50) {
      alert("WOW that's a lotta likes")
    }
  }, [likes])

  const handleLogin = () => {
    setLoggedIn(!loggedIn);
  }

  const handleLikesClick = () => {
    setLikes(likes + 1);
  }

  return (
    <div className="App">
      <button onClick={handleLogin}>{loggedIn ? "Logout" : "Login!"}</button>
      <p>{ loggedIn ? `Hello ${user}` : "You're not logged in"}</p>
      {
        loggedIn 
        ? <UserPage />
        : null
      }

      <button onClick={handleLikesClick}>This app has {likes} likes</button>
    </div>
  );
}

export default App;
