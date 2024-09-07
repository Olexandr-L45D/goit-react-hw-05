
import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTA1YjQwYTViZDU5OTA1NDIyMGY0NDk3YmEzYjJmNSIsIm5iZiI6MTcyNTU5NDQyMy4yODc1ODgsInN1YiI6IjY2ZDllMWM1ZDhlODg1YWI4NDZkMDkxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TvbdXQqddSub5Mw59Uixse-OSNQE4Xunk36NlBhj_AM' }
});
// const API_KEY = "9a05b40a5bd599054220f4497ba3b2f5";

async function getProductsSerch(query, page = 1) {

    const response = await instance.get(`/search/movie`,
        {
            params: {
                page,
                query,
                include_adult: false,
                language: "en-US",
                region: "string",
                year: "string"
            },
        },
    )
    console.log(response.data.results)
    return response.data.results;


};
export { getProductsSerch };

//getProductDetails робить запит на УРЛ з деталізацією про товар (додаю в окремий стан при монтуванні в компонент MovieDetailsPage)
export const getProductDetails = async (movie_id) => {
    const response = await instance.get(`/movie/${movie_id}`)
    console.log(response.data)
    return {
        title: response.data.title, poster_path: response.data.poster_path,
    }

};

export const getProductMovies = async () => {

    const response = await instance.get('/trending/movie/day')

    return response.data.results;
};

export const getProductCregits = async (movie_id) => {

    const response = await instance.get(`/movie/${movie_id}/credits`)
    return response.data.cast;
};

export const getProductReviews = async () => {

    const response = await instance.get(`/movie/${movie_id}/reviews`)
    return response.data.results;
};

// повний шлях до зображення: https://image.tmdb.org/t/p/w500/${poster_path}

