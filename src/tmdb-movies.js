
import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTA1YjQwYTViZDU5OTA1NDIyMGY0NDk3YmEzYjJmNSIsIm5iZiI6MTcyNTU5NDQyMy4yODc1ODgsInN1YiI6IjY2ZDllMWM1ZDhlODg1YWI4NDZkMDkxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TvbdXQqddSub5Mw59Uixse-OSNQE4Xunk36NlBhj_AM' }
});
// const API_KEY = "9a05b40a5bd599054220f4497ba3b2f5";

async function getProductsSerch(query, owner, page = 1) {

    const response = await instance.get(`/search/movie`,
        // const response = await instance.get(`/search=${owner}`,
        {
            params: {
                page,
                query: query,
                include_adult: false,
                language: "en-US",
                region: "string",
                year: "string"
            },
        },
    )
        .then(response => console.log(response))
        .catch(err => console.error(err));
    return response.data;

    // return {
    //     results: response.data.results,
    //     total_pages: response.data.total_pages,
    // };
};
export { getProductsSerch };

//getProductDetails робить запит на УРЛ з деталізацією про товар (додаю в окремий стан при монтуванні в компонент MovieDetailsPage)
export const getProductDetails = async (movie_id) => {
    const response = await instance.get(`/movie/${movie_id}`)
        .then(response => console.log(response))
        .catch(err => console.error(err));
    return response.data.results;
};

export const getProductMovies = async () => {

    const response = await instance.get('https://api.themoviedb.org/3/trending/movie/day')
        .then(response => console.log(response))
        .catch(err => console.error(err));
    return response.data.results;
};

export const getProductCregits = async () => {

    const response = await instance.get('https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US')
        .then(response => console.log(response))
        .catch(err => console.error(err));
    return response.data.results;
};

export const getProductReviews = async () => {

    const response = await instance.get('https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1')
        .then(response => console.log(response))
        .catch(err => console.error(err));
    return response.data.results;
};

// повний шлях до зображення: https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg

// export const getProductSerch = async () => {

//     const response = await instance.get('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1')
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
//     return response.data;
// };

// export const getProductDetails = async () => {

//     const response = await instance.get('https://api.themoviedb.org/3/movie/movie_id?language=en-US')
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
//     return response.data;
// };