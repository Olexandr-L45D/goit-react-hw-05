// MovieDetailsPage

import { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from '../tmdb-movies';
// import Movies from "../components/Movies/Movies"
// import MovieCast from "../MovieCast/MovieCast";
import { NavLink, Outlet } from "react-router-dom";

export default function MovieDetailsPage() {
    const [detail, setDetail] = useState(null);
    const { movieId } = useParams();
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(false)

    useEffect(() => {
        async function fechData() {
            setDetail(null);
            const data = await getProductDetails(movieId);
            setDetail(data);
        }
        fechData();
    }, [movieId])

    // const { title, poster_path } = detail;
    // console.log(poster_path);
    // console.log(title);
    console.log(detail);

    return (
        <div>
            <div>
                <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />
                <h1>{title}</h1>
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
}