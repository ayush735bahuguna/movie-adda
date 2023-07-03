import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWM5YTlhZjQxMjk3ZjkzYjdhZGU2ZTJlOTZhMDNmZCIsInN1YiI6IjYzMWMzZWY2MGJiMDc2MDA5Mjg2MGI2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AzHvnf5sBnykgT-Dol4dW9j2vi5waSpb5R4LCwMQ2Jk";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {

    // try {

    const { data } = await axios.get(BASE_URL + url, {
        headers,
        params,
    });
    return data;

    // } catch (err) {
    //     console.log(err);
    //     return err;
    // }
};
