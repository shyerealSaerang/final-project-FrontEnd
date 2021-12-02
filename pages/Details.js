import React, {useState, useEffect} from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import NewsDetails from "../components/NewsDetails";
import { useParams } from "react-router";

const Details = () => {
    const [news,setNews] = useState({});
    const params = useParams();
    useEffect(() => {
        fetch(`https://api.thenewsapi.com/v1/news/${params.newsuuid}?api_token=nl80KQjrtwQ27grJ6qysPjNwKyFNtBxGZGR2l8ce&search=us`)
  .then(response => response.json())
  .then(data => setNews(data.data));

    },
    []);
    return(
        <>
        <Navigation />
        <NewsDetails news={news}/>
        <Footer />
        </>
    );
}

export default Details;