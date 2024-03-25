// const setUser = (user) => {
// dispatch(
// setUserLoginDetails({
// name: user.displayName,
// email: user.email,
// photo: user.photo,
// })
// );
// };

// const dispatch = useDispatch();
// const history = useNavigate();
// const username = useSelector(selectUserName);
// const userPhoto = useSelector(selectUserPhoto);

// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import {
// selectUserEmail,
// selectUserName,
// selectUserPhoto,
// } from "../features/user/userSlice";

const Header2 = () => {
const dispatch = useDispatch();
const history = useNavigate();
const username = useSelector(selectUserName);
const userPhoto = useSelector(selectUserPhoto);
};

// export const Provider = provider;

.home:after {
background-image: url(../Images/home-background.png);
/_ center center / cover
no-repeat fixed; _/
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background: fixed;
content: "";
position: absolute;
inset: 0px;
opacity: 1;
z-index: -1;
border: 2px solid red;
}

// const dispatch = useDispatch();
// const userName = useSelector(selectUserName);
// let recommends = [];
// let newDisneys = [];
// let originals = [];
// let trending = [];

// const getDocumentByQuery = async () => {
// const collectionRef = collection(db, "movies");
// const q = query(collectionRef, where("type", "==", "new"));
// const snapshot = await getDocs(q);
// snapshot.forEach((data) => console.log(data.id, " => ", data.data()));

// const collectionRef1 = collection(db, "movies");
// const q1 = query(collectionRef1, where("type", "==", "trending"));
// const snapshot1 = await getDocs(q1);
// snapshot1.forEach((data) => console.log(data.id, " => ", data.data()));
// };

// dispatch(
// setMovies({
// recommend: recommends,
// newDisney: newDisneys,
// original: originals,
// trending: trending,
// })
// );
