import "./RegisterUser.css";

import { useState } from "react";
import { registerUserService } from "../../services/index";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginUser } from "../LoginUser/LoginUser";
import { useModal } from "../../context/ModalContext";

export const RegisterUser = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");
  const [, setModal] = useModal();

  const handleForm = async (e) => {
    e.preventDefault();
    if (pass1 !== pass2) {
      setError("Passwords do not match");
      return;
    }

    try {
      await registerUserService({ name, email, password: pass1 });
      navigate(setModal(<LoginUser />));
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section className="section-form">
      <div className="header-form">
        <h1>Register</h1>
      </div>
      <form className="modal-form" onSubmit={handleForm}>
        <input
          type="text"
          id="username"
          placeholder="Username"
          name="username"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          id="pass1"
          placeholder="Password"
          name="pass1"
          value={pass1}
          required
          onChange={(e) => setPass1(e.target.value)}
        />

        <input
          type="password"
          id="pass2"
          placeholder="Repeat password"
          name="pass2"
          value={pass2}
          required
          onChange={(e) => setPass2(e.target.value)}
        />

        <button>Register</button>

        {error ? <p>{error}</p> : null}
      </form>
      <div className="footer-form" onClick={() => setModal(<LoginUser />)}>
        <NavLink>Already have an account? Log in</NavLink>
      </div>
    </section>
  );
};
