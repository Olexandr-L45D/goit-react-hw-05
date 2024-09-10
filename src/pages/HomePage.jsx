// HomePage
import { useState, useEffect } from "react"
import { getProductMovies } from '../tmdb-movies';
//import { useSearchParams } from 'react-router-dom';
import MovieList from "../components/MovieList/MovieList"

export default function HomePage() {
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                setError(false);
                const data = await getProductMovies();
                setProduct(data);
                setLoading(false);
            } catch (error) {
                setError("Sorry nothing found");
            }
        }
        fetchData();
    }, []);

    return (
        <main>
            <h3>Trending today</h3>
            {products.length > 0 && <MovieList products={products} />}
        </main>
    );
}

