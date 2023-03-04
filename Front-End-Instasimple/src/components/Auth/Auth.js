import "./Auth.css";

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useModal } from "../../context/ModalContext";

import { LoginUser } from "../LoginUser/LoginUser";
import { RegisterUser } from "../RegisterUser/RegisterUser";

export const Auth = () => {
  const { user, logout } = useContext(AuthContext);
  const [, setModal] = useModal();

  return (
    <>
      <section className="auth">
        {user ? (
          <>
            <p>Hello {user.name}!</p>
            <a onClick={() => logout()} href="/">
              Logout
            </a>
          </>
        ) : (
          <>
            <p onClick={() => setModal(<LoginUser />)}>
              <NavLink>Login</NavLink>
            </p>
            <p>or</p>
            <p onClick={() => setModal(<RegisterUser />)}>
              <NavLink>Register</NavLink>
            </p>
          </>
        )}
      </section>
    </>
  );
};
