import "./Header.css";

import { Link } from "react-router-dom";
import { Auth } from "../Auth/Auth";

export const Header = () => {
  return (
    <header>
      <h1>
        <Link id="app-logo" to={"/"}>
          InstaSimple
        </Link>
      </h1>
      <Auth />
    </header>
  );
};
