// MovieList

import { Link } from 'react-router-dom';
import css from './MovieList.module.css';

export default function ProductList({ products }) {
    return (
        <div className={css.container}>
            {products.map((product) => (
                <div key={product.id} className={css.cardWrapper}>
                    <Link to={`${product.id}`}>
                        <img src="https://via.placeholder.com/200x100" alt="" />
                        <h3 className={css.productName}>{product.name}</h3>
                    </Link>
                </div>
            ))}
        </div>
    );
};