// MovieDetailsPage

import css from "./MovieDetailsPage.module.css"
import { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from '../../tmdb-movies';
import { GoArrowLeft } from "react-icons/go";
// import Movies from "../components/Movies/Movies"
// import MovieCast from "../MovieCast/MovieCast";
import { NavLink, Link, Outlet } from "react-router-dom";

export default function MovieDetailsPage() {
    const [detail, setDetail] = useState("");
    const { movieId } = useParams();
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(false)
    useEffect(() => {
        async function fechData() {
            setDetail("");
            const data = await getProductDetails(movieId);
            setDetail(data);
        }
        fechData();
    }, [movieId])
    // console.log(detail);
    return (
        <div>
            <div className={css.detailsCart}>
                <button><GoArrowLeft className={css.icon} /> <Link to="/"> Go back</Link> </button>
                <img src={`https://image.tmdb.org/t/p/w300/${detail.poster_path}`} alt={detail.title} />
                <h3>{detail.title}</h3>
                <p>{detail.release_date}</p>
                <p>{detail.vote_average}</p>
                <p>Overview: {detail.overview}</p>
                <p>Status:{detail.status}</p>
                <p>Genres:</p>
            </div>

            <ul>
                <li>
                    <NavLink to="cast">MovieCast</NavLink>
                </li>
                <li>
                    <NavLink to="reviews">MovieReviews</NavLink>
                </li>
            </ul>
            <Suspense fallback={<div>LOADING DetailsVideo...</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
};

// className = { css.icon }
