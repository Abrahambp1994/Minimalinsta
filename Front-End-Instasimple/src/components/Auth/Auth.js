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
            <div onClick={() => logout()}>Logout</div>
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

  /* return user ? (
    <section className="auth">
      <p>Hi! {user.name}</p>
      <button onClick={() => logout()}>Logout</button>
    </section>
  ) : (
    <ul>
      <li onClick={() => setModal(<LoginUser />)}>
        <NavLink>Login</NavLink>
      </li>
      <li onClick={() => setModal(<RegisterUser />)}>
        <NavLink>Register</NavLink>
      </li>
    </ul>
  ); */
};
