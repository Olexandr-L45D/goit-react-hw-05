
import css from "./MovieDetailsPage.module.css"
import { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from '../../tmdb-movies';
import { GoArrowLeft } from "react-icons/go";
import { NavLink, Link, Outlet } from "react-router-dom";

export default function MovieDetailsPage() {
    const [detail, setDetail] = useState("");
    const { movieId } = useParams();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        async function fechData() {
            try {
                setLoading(true);
                setError(false);
                setDetail("");
                const data = await getProductDetails(movieId);
                setDetail(data);
                setLoading(false);
            } catch (error) {
                setError("Sorry nothing found");
            }
        }
        fechData();
    }, [movieId])
    // console.log(detail);
    return (
        <div>
            <div className={css.detailsCart}>
                <div className={css.cartImagBut}>
                    <button className={css.buttonIcon}><GoArrowLeft className={css.icon} /> <NavLink to="/">Go back</NavLink> </button>
                    <img src={`https://image.tmdb.org/t/p/w200/${detail.poster_path}`} alt={detail.title} />
                </div>
                <div className={css.cartCont}>
                    <div className={css.cartTitle}>
                        <h3 className={css.comTitle}>{detail.title}</h3>
                        <p className={css.comDate}>({detail.release_date})</p>
                    </div>
                    <div className={css.cartComent}>
                        <h4 className={css.comTitles}> User Score : </h4>
                        <p className={css.comIte}>({detail.vote_average}%)</p>
                    </div>
                    <div className={css.cartComent}>
                        <h4 className={css.comTitlesOv}> Overview : </h4>
                        <p className={css.comItes}>{detail.overview}</p>
                    </div>
                    <div className={css.cartComent}>
                        <h4 className={css.comTitles}> Status : </h4>
                        <p className={css.comIte}>{detail.status}</p>
                    </div>
                </div>
            </div>
            <Suspense fallback={<div>LOADING DetailsVideo...</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
};














// {/*
//         {detail.genres.map(({ id, name }) => (
//           <p key={id} >
//             {name}
//           </p> */}

// {/* <ul className={css.list}>
//                     {detail.genres.map((det) => (
//                         <li key={det.id}> </li>
//                         <li name={det.name}> </li>
//                     ))}
//                 </ul> */}

// {/* genres
//                 :
//                 [{id: 80, name: "Crime"}, {id: 53, name: "Thriller"}] */}
