import React from 'react'
import Seo from "../components/seo"
import Home from '../components/Home'
import '../styles/global.css'
// import Loader from './Loader';
// import { useState, useEffect } from "react"

const index = () => {

  // const myTimeout = setTimeout(myGreeting, 9000);
  // function myGreeting() {
  // document.getElementById("demo").innerHTML = "Lets Go!"
  // }


  // const videoEl = useRef(null);
  // const attemptPlay = () => {
  // videoEl &&
  // videoEl.current &&
  // videoEl.current.play().catch(error => {
  // console.error("Error attempting to play", error);
  // });
  // };
  // useEffect(() => {
  // attemptPlay();
  // }, []);


  // const [ loader, setLoader ] = useState(false);
  // useEffect(() =>{
  // setLoader(true)
  // setTimeout( () =>{
  // setLoader(false)
  // }, 2000)
  // }, [])




  return (
    <div>
      <Seo title="Home" />
      {/* {
            loader 
            ? 
            <Loader />
            : */}
      <Home />
{/* } */}
    </div>
  )
}

export default index
