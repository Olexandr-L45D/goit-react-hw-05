
// HomePage
import { useState, useEffect } from "react"
import { getProductsSerch } from '../tmdb-movies';
import { useSearchParams } from 'react-router-dom';
import MovieList from "../components/MovieList/MovieList"
export default function HomePage() {
    const [products, setProduct] = useState([]);
    //const [home, setHome] = useState([]);
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(false);
    const [params] = useSearchParams();
    const owner = params.get("owner") ?? "";

    useEffect(() => {
        async function fetchData() {
            const data = await getProductsSerch(owner);
            setProduct(data);
        }
        fetchData();
    }, [owner]);

    return (
        <main>
            <h1>Welcome to HomePage</h1>
            {products.length > 0 && <MovieList products={products} />}

        </main>
    );
}


// {/* <ul >   <MovieList products={visibleTasks}  />  </ul> */ }
// це додаю в іншу на серч при пошуку products={visibleTasks}

