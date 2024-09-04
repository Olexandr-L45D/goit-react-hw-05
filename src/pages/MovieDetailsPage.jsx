// MovieDetailsPage

import { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function MovieDetailsPage() {
    const { productId } = useParams();
    useEffect(() => {
        async function fechData() {
            const data = await getProductById(productId);
        }
        fechData();
    }, [productId])

    const params = useParams();
    console.log(params);

    return (<div> MovieDetailsPage! Now showing product with id - {productId}</div>);
}