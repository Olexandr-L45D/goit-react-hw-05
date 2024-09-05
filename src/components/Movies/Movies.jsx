// Movies / PaymentInfo

export default function Movies({ product }) {
    return (
        <div>
            <p>Amount: {product.amount}</p>
            <p>Number: {product.cardNumber}</p>
            <p>Owner: {product.cardOwner}</p>
            <p>Type: {product.cardType}</p>
            <p>Descrioption: {product.description}</p>
        </div>
    );
}


// export default function PaymentInfo({ payment }) {
//     return (
//         <div>
//             <p>Amount: {payment.amount}</p>
//             <p>Number: {payment.cardNumber}</p>
//             <p>Owner: {payment.cardOwner}</p>
//             <p>Type: {payment.cardType}</p>
//             <p>Descrioption: {payment.description}</p>
//         </div>
//     );
// }