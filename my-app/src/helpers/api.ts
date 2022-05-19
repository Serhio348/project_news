import axios, { Method } from 'axios';
const URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";

const fetch = (method: Method) => async (uri: string, data?: any) => {
    const runRequest = async () => {
        const response = await axios({
            method,
            url: `${URL}${uri}`,
            data,

        });
        return response;
    }
    try {
        return await runRequest();
    } catch (e: any) {
        if (e.response.status === 401) {
            try {
                return await runRequest();
            } catch {
                throw e;
            }
        } else {
            throw e;
        }
    }

};
const api = {
    get: fetch("GET"),
    post: fetch("POST"),
}

export default api;