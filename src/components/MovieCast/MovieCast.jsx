// MovieCast
import { useParams } from "react-router-dom";
import { useEffect } from "react";


import { Link } from "react-router-dom";
import css from "./MovieCast.module.css";
//PaymentCard
export default function MovieCast({
    product: { id, primary_release_year, region, year },
}) {
    const { movieId } = useParams();
    useEffect(() => {
        if (!movieId) return;
    }, [movieId])
    return (
        <div className={css.wrapper}>
            {/* <img className={css.imag} src={small} alt={tags} onClick={onClick} /> */}
            <p>
                <b>Release:</b> {primary_release_year}
            </p>
            <p>
                <b>Region:</b> {region}
            </p>
            <p>
                <b>Year:</b> {year}
            </p>

            <Link to={`/products/${id}`}>Details</Link>
        </div>
    );
}