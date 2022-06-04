import React, { useContext } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import SavedMovies from "./pages/SavedMovies/SavedMovies";
import FavoriteMovies from "./pages/FavoriteMovies/FavoriteMovies";
//store
import AuthContext from "./store/auth-context";

const App = () => {
  const authCtx = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        {!authCtx.isLoggedIn && (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
        {authCtx.isLoggedIn && (
          <>
            <Route path="/profile" element={<Profile />} />
            <Route path="/savedMovies" element={<SavedMovies />} />
            <Route path="/favoriteMovies" element={<FavoriteMovies />} />
          </>
        )}
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
