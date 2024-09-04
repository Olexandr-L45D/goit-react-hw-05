
import axios from "axios";

axios.defaults.baseURL = "https://65c23f3af7e6ea59682af8d1.mockapi.io";
//getProducts робить запит на базовий УРЛ
export const getProducts = async () => {
    const response = await axios.get("/payments");
    return response.data;
};
//getProductById робить запит на УРЛ з деталізацією про товар (додаю в окремий стан при монтуванні в компонент MovieDetailsPage)
export const getProductById = async (paymentId) => {
    const response = await axios.get(`/payments/${paymentId}`);
    return response.data;
};


// export const getProducts = () => {
//     return products;
// };

// export const getProductById = (productId) => {
//     return products.find((product) => product.id === productId);
// };



// axios.defaults.baseURL = "https://api.unsplash.com/";
// const API_KEY = "gpxaaiPUteVQc-DhqqF3GLxbICUzWFNHSgvAwIWoWbg";

// async function getAsyncImage(query, page = 1) {

//     const response = await axios.get(`/search/photos`, {
//         params: {
//             client_id: API_KEY,
//             query: query,
//             image_type: 'photo',
//             orientation: "landscape",
//             safesearch: true,
//             page,
//             per_page: 12,
//         },
//     });
//     return {
//         results: response.data.results,
//         total_pages: response.data.total_pages,
//     };
// };
// export { getAsyncImage };