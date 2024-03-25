import React, { useEffect } from "react";

//! Importing Images files used in Home page

import dimg from "../Images/favicon.svg";
import home_img from "../Images/home-icon.svg";
import search_img from "../Images/search-icon.svg";
import watchlist_img from "../Images/watchlist-icon.svg";
import original_img from "../Images/original-icon.svg";
import movies_img from "../Images/movie-icon.svg";
import series_img from "../Images/search-icon.svg";

import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

import {
  setSignOutState,
  setUserLoginDetails,
} from "../features/user/userSlice";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectUserEmail,
  selectUserName,
  selectUserPhoto,
} from "../features/user/userSlice";

import { async } from "@firebase/util";

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history("/home");
      }
    });
  }, [username]);

  const handleAuth = () => {
    if (!username) {
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result);
          setUser(result.user);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (username) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <nav>
      <img className="Disney-logo" src={dimg} alt="Disney-Logo" />
      {!username ? (
        <div className="Login" onClick={handleAuth}>
          Login
        </div>
      ) : (
        <div className="NavMenu">
          <a href="/home">
            <img className="Home-icon" src={home_img} alt="Home-logo" />
            <span>HOME</span>
          </a>
          <a href="/">
            <img className="Home-icon" src={search_img} alt="Search" />
            <span>SEARCH</span>
          </a>
          <a href="/">
            <img className="Home-icon" src={watchlist_img} alt="Watchlist" />
            <span>WATCHLIST</span>
          </a>
          <a href="/">
            <img className="Home-icon" src={original_img} alt="Originals" />
            <span>ORIGINALS</span>
          </a>
          <a href="/">
            <img className="Home-icon" src={movies_img} alt="Movies" />
            <span>MOVIES</span>
          </a>
          <a href="/">
            <img className="Home-icon" src={series_img} alt="Series" />
            <span>SERIES</span>
          </a>
          {/* <img src={userPhoto} alt={username} /> */}
          <div className="Login" id="logout" onClick={handleAuth}>
            Log Out
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
