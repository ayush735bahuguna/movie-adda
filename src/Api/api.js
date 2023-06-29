import { useGlobalContext } from "../Context"


export const fetchDataFromApi = async (url, params) => {
    const { Acess_key } = useGlobalContext();
    const TMDB_TOKEN = Acess_key;

    const BASE_URL = "https://api.themoviedb.org/3";

    const headers = {
        Authorization: "bearer " + TMDB_TOKEN,
    };
    try {
        const { data } = await axios.get(BASE_URL + url, { headers, params });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
