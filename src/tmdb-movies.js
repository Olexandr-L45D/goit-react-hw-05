
import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTA1YjQwYTViZDU5OTA1NDIyMGY0NDk3YmEzYjJmNSIsIm5iZiI6MTcyNTU5NDQyMy4yODc1ODgsInN1YiI6IjY2ZDllMWM1ZDhlODg1YWI4NDZkMDkxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TvbdXQqddSub5Mw59Uixse-OSNQE4Xunk36NlBhj_AM' }
});
// const API_KEY = "9a05b40a5bd599054220f4497ba3b2f5";

async function getProductsSerch(query, page = 1) {

    const response = await instance.get(`/search/movie`, {
        params: {
            page,
            query: query,
            // include_adult: false,
            // language: "en-US",
            // primary_release_year: string,
            // append_to_response: string,
            // region: string,
            // year: string
        },
    },
    )
        .then(response => console.log(response))
        .catch(err => console.error(err));

    return response.data;
};
export { getProductsSerch };

//getProductById робить запит на УРЛ з деталізацією про товар (додаю в окремий стан при монтуванні в компонент MovieDetailsPage)
export const getProductDetails = async (movie_id) => {
    const response = await instance.get(`/movie/${movie_id}`)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    return response.data;
};

export const getProductMovies = async () => {

    const response = await instance.get('https://api.themoviedb.org/3/trending/movie/day')
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    return response.data;
};


// export const getProductSerch = async () => {

//     const response = await instance.get('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1')
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
//     return response.data;
// };

// export const getProductDetails = async () => {

//     const response = await instance.get('https://api.themoviedb.org/3/movie/movie_id?language=en-US')
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
//     return response.data;
// };


export const getProductCregits = async () => {

    const response = await instance.get('https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US')
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    return response.data;
};

export const getProductReviews = async () => {

    const response = await instance.get('https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1')
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    return response.data;
};
