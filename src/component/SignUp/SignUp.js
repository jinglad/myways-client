import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import "./SignUp.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const SignUp = ({ modalIsOpen, closeModal }) => {
  const { register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    fetch("https://dashing-nosy-hail.glitch.me/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result) {
          closeModal();
          alert("Your Registration is Successfull...!");
        }
      });
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="form-header-txt">
          <h2>Sign Up</h2>
          <p>It's quick and easy</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="p-5">
          <div className="d-flex justify-content-between">
            <div className="form-group mr-2">
              <div>
                <input
                  className="form-control-lg form-control"
                  name="first_name"
                  ref={register}
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="form-group">
              <input
                className="form-control-lg form-control"
                name="last_name"
                ref={register}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="form-group">
            <input
              name="email"
              type="email"
              className="form-control-lg form-control"
              ref={register({ required: true })}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              name="password"
              type="password"
              className="form-control-lg form-control"
              ref={register({ required: true })}
              placeholder="Password"
            />
          </div>
          <input type="submit" className="btn btn-block btn-success" />
        </form>
      </Modal>
    </div>
  );
};

export default SignUp;
