// Movies / PaymentInfo

export default function Movies({ product }) {
    return (
        <div>
            <p>ID: {product.movie_id}</p>
            <p>Append: {product.append_to_response}</p>
            <p>Language: {product.language}</p>
            <p>Descrioption: {product.description}</p>
        </div>
    );
}

