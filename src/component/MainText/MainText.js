import React, { useState } from "react";
import SignUp from "../SignUp/SignUp";
import "./MainText.css";

const MainText = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="text-center maintext">
      <h1>Apply and hear back every time</h1>
      <p>
        Exploring internships or jobs? Say good-bye to the typical job portals
        and use <br /> the power of Artificial Intelligence to become
        successful, faster.
      </p>
      <button onClick={openModal} className="get-started-btn">Get Started</button>
      <SignUp modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};

export default MainText;
