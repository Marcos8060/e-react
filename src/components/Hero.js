import React, { useContext, useEffect, useState } from "react";
import hero from "../assets/images/hero.png";
import "../assets/css/hero.css";
import { Link } from "react-router-dom";
import { userContext } from "../context/AuthContext";
import { Widget, addResponseMessage } from "react-chat-widget";
import { useParams } from "react-router-dom";
import axios from "axios";


import "react-chat-widget/lib/styles.css";


const Hero = () => {
  const { id } = useParams();
  const { user } = useContext(userContext);
  const [maid, setMaid] = useState([]);



  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage("Welcome to emaids");
  };

  useEffect(() => {
    addResponseMessage("Welcome to emaids!");
    addResponseMessage("Are you looking for anything in particular?");
  }, []);

  // useEffect(() => {
  //   axios.get(`http://127.0.0.1:8000/api/profiles/${id}/`);
  // }, []);

  return (
    <div className="container">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Welcome to Emaids"
        subtitle="Ask us anything!"
      />
      <div className="row hero">
        <div className="col-md-6">
          <img className="img-fluid heroImg" src={hero} alt="" />
        </div>
        <div className="col-md-6">
          <h1 className="heroTitle">
            Get to <span className="yellow">hire</span> some of the most
            professional housemaids in <span className="yellow">Nairobi</span>.
          </h1>
          {user ? (
            <Link to="/maids" className="heroBtn btn">
              View Available maids
            </Link>
          ) : (
            <>
              <Link to="/login" className="heroBtn btn">
                Get started
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
