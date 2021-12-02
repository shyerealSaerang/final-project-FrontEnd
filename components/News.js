import React, {useState,useEffect} from "react";
import NewsItem from "./NewsItem";

const News = () => {
    const [news, setNews] = useState([]);


    useEffect(() => {
        fetch('https://api.thenewsapi.com/v1/news/all?api_token=nl80KQjrtwQ27grJ6qysPjNwKyFNtBxGZGR2l8ce&search=us')
  .then(response => response.json())
  .then(data => setNews(data.data));


    }, []);

    return(
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <h2 className="text-center">Berita Terbaru</h2>
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-3">
                    { news.map((news) => <NewsItem key={news.uuid} news={news} />) }
                </div>
            </div>
        </section>
    );
}


export default News;