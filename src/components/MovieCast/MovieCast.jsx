// MovieCast
// import { useParams } from "react-router-dom";
// import { useEffect } from "react";


// const { movieId } = useParams();
// useEffect(() => {
//     if (!movieId) return;
// }, [movieId])

import { Link } from "react-router-dom";
import css from "./MovieCast.module.css";
//PaymentCard
export default function MovieCast({
    product: { id, cardOwner, amount, description },
}) {
    return (
        <div className={css.wrapper}>
            <p>
                <b>Card owner:</b> {cardOwner}
            </p>
            <p>
                <b>Amount:</b> {amount}
            </p>
            <p>
                <b>Description:</b> {description}
            </p>

            <Link to={`/products/${id}`}>Details</Link>
        </div>
    );
}