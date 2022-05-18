import { useEffect, useState } from "react";
import NewsType from "../types/NewsType";

const URL = "https://newsdata.io/api/1/news?apikey=pub_7061f23b9c88a64a6a598c30b0d48a0a4687&country=ua";

const useNews = () => {
    const [news, setNews] = useState<NewsType[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        console.log(news);
    }, [news]);

    useEffect(() => {
        setLoading(true);
        setTimeout(fetchData, 2000);
    }, []);

    const fetchData = () => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                const news = data.results as NewsType[];
                setNews(news);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return { news, loading, error }

}
export default useNews;