

// import ProductList from '../components/MovieList/MovieList';
// import { useEffect, useState } from "react";
// import { getProducts } from '../../fakeApi';
// // import PaymentList from "../components/PaymentList/PaymentList";


// export default function Products() {
//     // const [product, setProduct] = useState([]);
//     // const [loading, setLoading] = useState(false)
//     // const [error, setError] = useState(false)
//     const products = getProducts();
//     // useEffect(() => {
//     //     async function fetchData() {
//     //         const data = await getProducts();
//     //         setPayments(data);
//     //     }

//     //     fetchData();
//     // }, []);

//     return (
//         <div>
//             <h1>Products page</h1>
//             {products.length > 0 && <ProductList products={products} />}
//         </div>
//     );
// }


import ProductList from '../components/MovieList/MovieList';
import { getProducts } from '../../fakeApi';
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react"

export default function Products() {
    const [searchParams, setSearchParams] = useSearchParams();
    const params = useMemo(() => Object.fromEntries([...searchParams]),
        [searchParams]
    );
    const { maxPrice, inStock } = params;


    const name = searchParams.get("name");



    const products = getProducts();

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={e => setSearchParams({ name: e.target.value })}
            />
            <p>Name: {name}</p>
            <p>inStock: {inStock}</p>
            <p>Maximum price: {maxPrice}</p>
            {products.length > 0 && <ProductList products={products} />}
        </div>
    );
};


// import ProductList from '../components/MovieList/MovieList';
// import { getProducts } from '../../fakeApi';

// export default function Products() {
//     const products = getProducts();

//     return (
//         <main>
//             <ProductList products={products} />
//         </main>
//     );
// }