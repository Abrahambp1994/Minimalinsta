import "./LoginUser.css";

import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { logInUserService } from "../../services/index";
import { AuthContext } from "../../context/AuthContext";
import { useModal } from "../../context/ModalContext";

import { RegisterUser } from "../RegisterUser/RegisterUser";

export const LoginUser = () => {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [, setModal] = useModal(false);

  const handleForm = async (e) => {
    e.preventDefault();
    setModal(false);
    try {
      const data = await logInUserService({ email, password });
      const token = `Bearer ${data}`;
      login(token);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="section-form">
      <div className="header-form">
        <h1>Log in</h1>
      </div>
      <form className="modal-form" onSubmit={handleForm}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          name="pass"
          placeholder="Password"
          id="pass"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Log in</button>

        {error ? <p>{error}</p> : null}
      </form>
      <div className="footer-form" onClick={() => setModal(<RegisterUser />)}>
        <NavLink>Create account</NavLink>
      </div>
    </section>
  );
};
