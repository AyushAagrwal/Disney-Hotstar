// import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";

// import userReducer from "../features/user/userSlice";

// export default configureStore({
//   reducer: {
//     user: userReducer,
//   },
//   Middleware: MiddlewareArray({
//     serializableCheck: false,
//   }),
// });

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import useReducer from "../features/user/userSlice";

import movieReducer from "../features/user/movie/movieSlice";

export default configureStore({
  reducer: {
    user: useReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
