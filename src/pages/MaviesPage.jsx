// MoviesPage / About

import { Link, Outlet } from 'react-router-dom';
import MovieList from '../components/MovieList/MovieList';
import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import SearchForm from "../components/SearchForm/SearchForm";
import { getProducts } from '../tmdb-movies';
//import { getProductById } from '../tmdb-movies';

// Payments
export default function MaviesPage() {
    const [products, setProduct] = useState([]);
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(false)
    // const products = getProducts();
    //const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get(""));
    const [params] = useSearchParams();
    const owner = params.get("owner") ?? "";

    useEffect(() => {
        async function fetchData() {
            const data = await getProducts(owner);
            setProduct(data);
        }
        fetchData();
    }, [owner]);

    return (
        <main>
            <h1>About Mavies</h1>
            <SearchForm />
            {products.length > 0 && <MovieList products={products} />}
            <ul>
                <li>
                    <Link to="mission">Read about our mission</Link>
                </li>
                <li>
                    <Link to="team">Get to know the team</Link>
                </li>
                <li>
                    <Link to="reviews">Go through the reviews</Link>
                </li>
                <li>
                    <p> Plese use this link to go Home <Link to="/">back to home</Link></p>
                </li>
            </ul>
            <Outlet />
        </main>
    );
}

