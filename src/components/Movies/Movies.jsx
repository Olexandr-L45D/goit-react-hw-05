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
                setError("Sorry");
            }
        }
        fechData();
    }, [movieId])

    return (
        <>
            <div className={css.cartImagActor}>
                <img src={`https://image.tmdb.org/t/p/w200/${detail.profile_path}`} alt={detail.name} />

                <div className={css.cartComent}>
                    <h4 className={css.comTitles}> Name : </h4>
                    <p className={css.comTitle}>{detail.name}</p>
                </div>

                <div className={css.cartComent}>
                    <h4 className={css.comTitles}> Character : </h4>
                    <p className={css.comIte}>{detail.character}</p>
                </div>
            </div>
        </>
    );
};
