// Movies 
import css from "./Movies.module.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductCast } from '../../tmdb-movies';

export default function Movies() {
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
                const data = await getProductCast(movieId);
                setDetail(data);
                setLoading(false);
            } catch (error) {
                setError("Sorry nothing found");
            }
        }
        fechData();
    }, [movieId])

    return (
        <div>
            <div className={css.detailsCart}>
                <div className={css.cartImagBut}>
                    <img src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`} alt={detail.title} />
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

        </div>
    );
};
