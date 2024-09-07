
// HomePage
import { useState, useEffect } from "react"
import { getProductMovies } from '../tmdb-movies';
import { useSearchParams } from 'react-router-dom';
import MovieList from "../components/MovieList/MovieList"
export default function HomePage() {
    const [products, setProduct] = useState([]);
    //const [home, setHome] = useState([]);
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(false);
    const [params, setParams] = useSearchParams();
    // const owner = params.get("owner") ?? "";

    useEffect(() => {
        async function fetchData() {
            const data = await getProductMovies();
            setProduct(data);
            // params.set("owner")
            // setParams(params)
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


// {/* <ul >   <MovieList products={visibleTasks}  />  </ul> */ }
// це додаю в іншу на серч при пошуку products={visibleTasks}

