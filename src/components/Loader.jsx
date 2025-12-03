import React, { useState, useEffect } from "react";
//import Home from "../Home/Home";
import "./About.css"

function Loader() {
  const [message, setMessage] = useState("Hii...");
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("Loading");
      setLoading(true)
    }, 2000);

    const timer2 = setTimeout(()=>{
        setLoading(false)
        setMessage("Hello.. How are you...?")
    },5000);
  }, []);
  return (
    <div>
      {" "}

      <div>
        {loading ?<div class="loader"></div>:null}
      </div>
      <h2>{message}</h2>{" "}
    </div>
  );
}
export default Loader;
