
import axios from "axios";
import { string } from "yup";

axios.defaults.baseURL = "https://api.themoviedb.org/";
const API_KEY = "9a05b40a5bd599054220f4497ba3b2f5";

// https://api.themoviedb.org/3/movie/157336?api_key=9a05b40a5bd599054220f4497ba3b2f5&append_to_response=videos

async function getProducts(query, owner) {

    const response = await axios.get(`/movie?search=${owner}`, {
        params: {
            movie_id: API_KEY,
            query: query,
            include_adult: false,
            language: "en-US",
            primary_release_year: string,
            append_to_response: string,
            page: 1,
            region: string,
            year: string
        },
    });
    return response.data;
};

export { getProducts };
//getProductById робить запит на УРЛ з деталізацією про товар (додаю в окремий стан при монтуванні в компонент MovieDetailsPage)
export const getProductById = async (productId) => {
    const response = await axios.get(`/movie_id ? language = en - US${productId}`);
    // const response = await axios.get(`/products/${productId}`);
    return response.data;
};

// '/ movie_id ? language = en - US'
// const ENDPOINT = "https://api.themoviedb.org/";
// const API_KEY = "9a05b40a5bd599054220f4497ba3b2f5";
// const params = {
//     movie_id: API_KEY,
//     query: query,
//     include_adult: false,
//     language: "en-US",
//     primary_release_year: string,
//     append_to_response: string,
//     page: 1,
//     region: string,
//     year: string
// };
// export { params };
// async function getProducts(query, owner) {
//     params.query = query;
//     const neWurls = new URLSearchParams(params);
//     const response = await axios.get(`${ENDPOINT}?${neWurls}&search=${owner}`)
//     return response.data;
// };
// export { getProducts };


// axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/11?api_key=9a05b40a5bd599054220f4497ba3b2f5';
//getProducts робить запит на базовий УРЛ
// axios.defaults.baseURL = 'https://api.themoviedb.org/';
// export const getProducts = async (owner) => {
//     const response = await axios.get(`/movie?search=${owner}`);
//     return response.data;
// };
// //getProductById робить запит на УРЛ з деталізацією про товар (додаю в окремий стан при монтуванні в компонент MovieDetailsPage)
// export const getProductById = async (productId) => {
//     const response = await axios.get(`/products/${productId}`);
//     return response.data;
// };


// axios.defaults.baseURL = "https://65c23f3af7e6ea59682af8d1.mockapi.io";
// //getProducts робить запит на базовий УРЛ
// export const getProducts = async (owner) => {
//     const response = await axios.get(`/payments?search=${owner}`);
//     return response.data;
// };
// //getProductById робить запит на УРЛ з деталізацією про товар (додаю в окремий стан при монтуванні в компонент MovieDetailsPage)
// export const getProductById = async (productId) => {
//     const response = await axios.get(`/products/${productId}`);
//     return response.data;
// };

// Start on TMDB
// curl --request GET \
// --url 'https://api.themoviedb.org/3/movie/11?api_key=9a05b40a5bd599054220f4497ba3b2f5'
// curl --request GET \
// --url 'https://api.themoviedb.org/3/movie/11' \
// --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTA1YjQwYTViZDU5OTA1NDIyMGY0NDk3YmEzYjJmNSIsIm5iZiI6MTcyNTU5NDg3Ni40OTIxNzksInN1YiI6IjY2ZDllMWM1ZDhlODg1YWI4NDZkMDkxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y8wprY7VQpAEy4AzJSYKqQqKHyN9QVDdNlFs3XGfjgA'
// my Key of TMDB
// const API_KEY = "9a05b40a5bd599054220f4497ba3b2f5";
//TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTA1YjQwYTViZDU5OTA1NDIyMGY0NDk3YmEzYjJmNSIsIm5iZiI6MTcyNTU5NDQyMy4yODc1ODgsInN1YiI6IjY2ZDllMWM1ZDhlODg1YWI4NDZkMDkxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TvbdXQqddSub5Mw59Uixse-OSNQE4Xunk36NlBhj_AM"

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