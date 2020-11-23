import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

const customStyles = {
  content: {
    left: "70%",
    bottom: 0,
    top: 0,
  },
};

Modal.setAppElement("#root");

const Login = ({ modalIsOpen, closeModal }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result === true) {
          closeModal();
          alert("Your Login is Successfull...!");
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
        <div
          style={{
            marginTop: "150px",
            border: "1px solid grey",
            padding: "5px",
          }}
        >
          <div className="form-header-txt">
            <h2 style={{ color: "#7ECB20" }}>Student</h2>
            <hr
              className="text-center"
              style={{ backgroundColor: "#7ECB20", width: "40%" }}
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="p-5">
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
            <p className="float-right">
              <a
                style={{ color: "#7ECB20" }}
                className="text-decoration-none"
                href="#"
              >
                Forgot Password
              </a>
            </p>
            <input
              type="submit"
              value="Login"
              className="btn btn-block btn-success"
            />
            <br />
            <h6 className="text-center">New to MyWays? Sign Up here</h6>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
