import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useModal } from "../../context/ModalContext";

import { NewPost } from "../../pages/NewPost/NewPost";

import { HomeSvg } from "../../assets/svg/HomeSvg";
import { SearchPostSvg } from "../../assets/svg/SearchPostSvg";
import { AddPostSvg } from "../../assets/svg/AddPostSvg";
import { ProfileSvg } from "../../assets/svg/ProfileSvg";

export const Footer = () => {
  const { user } = useContext(AuthContext);
  const [, setModal] = useModal();
  return (
    <footer className="footer">
      <Link to={"/"}>
        <HomeSvg />
      </Link>
      <Link to={"/filter"}>
        <SearchPostSvg />
      </Link>
      {user ? (
        <div className="button" onClick={() => setModal(<NewPost />)}>
          <NavLink>
            <AddPostSvg />
          </NavLink>
        </div>
      ) : null}
      {user ? (
        <Link to={"/user"} user="user">
          <ProfileSvg />
        </Link>
      ) : null}
    </footer>
  );
};
