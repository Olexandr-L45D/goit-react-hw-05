
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react"
import css from './App.module.css';
const HomePage = lazy(() => import("../../pages/HomePage"));
const MaviesPage = lazy(() => import("../../pages/MaviesPage/MaviesPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage/MovieDetailsPage"));
const Navigation = lazy(() => import("../Navigation/Navigation"));
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));

export default function App() {
  return (
    <div className={css.container}>
      <Navigation />
      <Suspense fallback={<div>LOADING General-Video...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/movies' element={<MaviesPage />} />
          <Route path='/movies/:movieId' element={<MovieDetailsPage />} >
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};



























