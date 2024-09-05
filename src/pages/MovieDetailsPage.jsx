// MovieDetailsPage

import { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../home-photo"
import Movies from "../components/Movies/Movies"
import { NavLink, Outlet } from "react-router-dom";

export default function MovieDetailsPage() {
    const [detail, setDetail] = useState(null);
    const { productId } = useParams();
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(false)

    useEffect(() => {
        async function fechData() {
            const data = await getProductById(productId);
            setDetail(data)
        }
        fechData();
    }, [productId])

    const params = useParams();
    console.log(params);

    return (
        <div>
            <div> MovieDetailsVideo! Now showing product with id - {productId}</div>
            {detail && <Movies product={detail} />}
            <ul>
                <li>
                    <NavLink to="bank">Bank</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="receipt">Receipt</NavLink>
                </li>
            </ul>
            <Suspense fallback={<div>LOADING DetailsVideo...</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
}