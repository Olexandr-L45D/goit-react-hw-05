// MovieReviews
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { getProductReviews } from "../../tmdb-movies";
import css from "./Movies.module.css"
import { FcCamcorderPro } from "react-icons/fc";


export default function Movies({ product: { movie_id, name, language } }) {
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        if (!movieId) return;

        async function fetchData() {
            try {
                setLoading(true);
                setError(false);
                const data = await getProductReviews();
                setProduct(data);
                setLoading(false);
            } catch (error) {
                setError("Sorry nothing found");
            }
        }
        fetchData();
    }, [movieId]);
    return (
        <div className={css.item}>
            <div className={css.itemText}>
                <p className={css.text}><FcCamcorderPro />{name}</p>
                <p className={css.text}>Language: {language}</p>

            </div>

        </div>
    );
}


