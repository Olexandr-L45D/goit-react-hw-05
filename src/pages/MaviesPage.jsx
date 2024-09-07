// MoviesPage / About

import { Link, Outlet } from 'react-router-dom';
import MovieList from '../components/MovieList/MovieList';
import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import SearchForm from "../components/SearchForm/SearchForm";
import { getProductsSerch } from '../tmdb-movies';
//import { getProductById } from '../tmdb-movies';

// Payments
export default function MaviesPage() {
    const [products, setProduct] = useState([]);
    const [filter, setFilter] = useState('');
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(false)
    // const products = getProducts();
    //const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get(""));
    const [params] = useSearchParams();
    const owner = params.get("owner") ?? "";

    useEffect(() => {
        async function fetchData() {
            const data = await getProductsSerch(owner);
            setProduct(data);
        }
        fetchData();
    }, [owner]);
    const visibleTasks = products.filter((task) =>
        task.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <main>
            <h3>Movie details</h3>
            <SearchForm />
            {products.length > 0 && <MovieList products={visibleTasks} />}
            <ul>
                <li>
                    <Link to="Movie credits">Movie credits</Link>
                </li>
                <li>
                    <Link to="team">Get to know the team</Link>
                </li>
                <li>
                    <Link to="Movie reviews">Go to Movie reviews</Link>
                </li>
                <li>
                    <p> Plese use this link to go Home <Link to="/">back to home</Link></p>
                </li>
            </ul>
            <Outlet />
        </main>
    );
}

// movie / movie_id ? language = en - US'