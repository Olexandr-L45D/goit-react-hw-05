// MovieReviews
import css from "./MovieReviews.module.css"
import { FcCamcorderPro } from "react-icons/fc";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductReviews } from "../../tmdb-movies";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const MovieReviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const getReviews = async () => {
            try {
                setLoading(true);
                setError(false);
                const movieReviews = await getProductReviews(movieId, { signal });
                setReviews(movieReviews);
            } catch (error) {
                if (error.name !== "AbortError") {
                    setError(true);
                }
            } finally {
                setLoading(false);
            }
        };

        getReviews();

        return () => {
            controller.abort();
        };
    }, [movieId]);

    if (loading) return <Loader />;
    if (error) return <ErrorMessage />;

    return (
        <div>
            {reviews.length > 0 ? (
                <ul className={css.container}>
                    {reviews.map((review) => (
                        <li key={review.id}>
                            <p>
                                <strong className={css.text}>{review.author}</strong>
                            </p>
                            <p className={css.text}>{review.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className={css.error}> ny reviews for this movie!</p>
            )}
        </div>
    );
};

export default MovieReviews;



//     return (
//         <div className={css.item}>
//             <div className={css.itemText}>
//                 <p className={css.text}><FcCamcorderPro />{name}</p>
//                 <p className={css.text}>Language: {language}</p>
//                 <p className={css.text}> {movie_id}</p>

//             </div>

//         </div>
//     );
// }


