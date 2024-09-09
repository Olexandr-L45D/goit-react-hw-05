// MovieList
import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ products }) {
    return (
        <div className={css.container}>
            <ul className={css.list}>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/movies/${product.id}`} ><h4 className={css.titles}>{product.title}</h4></Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

