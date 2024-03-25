import React from "react";
import ImageSlider from "./ImageSlider";
import NewDisney from "./NewDisney";
import Recommends from "./Recommends";
import Originals from "./Originals";

import Viewers from "./Viewers";
import Trending from "./Trending";

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import db from "../firebase";

// import { setMovies } from "../features/user/movie/movieSlice";
// import { selectUserName } from "../features/user/userSlice";
// import {
//   collection,
//   doc,
//   getDocs,
//   setDoc,
//   getDoc,
//   where,
//   query,
// } from "../firebase";
// import { Firestore } from "firebase/firestore";

const Home = (props) => {
  return (
    <main className="home">
      <ImageSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </main>
  );
};

export default Home;
