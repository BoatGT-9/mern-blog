import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
const baseURL = import.meta.env.VITE_BASE_URL;

const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const username = userInfo?.username;
  const logout = () => {
    fetch(`${baseURL}/logout`, {
      credentials: "include",
      method: "POST"
    }).then(() => {
      setUserInfo(null);
    }).catch(error => {
      console.error('Logout error:', error);
    });
  }
  return (
    <header>
      <Link to={"/"} className="logo">
        SE NPRU Blog
      </Link>
      <nav>
        {username && (
          <>
            <Link to={"/post"}>Add</Link>
            <a onClick={logout}> logout({username})</a>
          </>
        )}
        {!username && (
          <>
            <Link to={"/login"}>Login</Link>
            <Link to={"/Register"}>Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
