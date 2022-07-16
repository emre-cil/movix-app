import React, { useContext } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Movie from './components/Movie';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import Watchlist from './pages/Watchlist/Watchlist';
import FavoriteMovies from './pages/FavoriteMovies/FavoriteMovies';
import ResetPassword from './pages/ResetPassword/ResetPassword';
//store
import AuthContext from './store/auth-context';

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
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/favorite-movies" element={<FavoriteMovies />} />
          </>
        )}
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
