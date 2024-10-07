import React, { useState, useEffect } from 'react';
import Newscard from './Newscard';
import Shimmer from './Shimmer'; 
import { TOPNEWS_URL, NEWS_URL } from '../utils/constants';

const Body = ({ searchParams, isTopNews }) => {
  const [listofnews, setlistofnews] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetchdata();
  }, [searchParams, isTopNews]);

  const fetchdata = async () => {
    setLoading(true); 

    const { country, language, query, category } = searchParams;
    let url = '';

    if (isTopNews) {
      url = `${TOPNEWS_URL}&category=${category || 'general'}`;
    } else {
      url = `${NEWS_URL}&q=${query || 'example'}`;
    }

    if (country) {
      url += `&country=${country}`; 
    }
    if (language) {
      url += `&lang=${language}`; 
    }
    console.log('api:', url);

    try {
      const data = await fetch(url);
      const jsondata = await data.json();

      setlistofnews(jsondata?.articles || []); 
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false); 
  };

  return (
    <div className="news-container">
      {loading ? (
        <Shimmer /> 
      ) : listofnews.length > 0 ? (
        listofnews.map((news) => (
          <a key={news.title} href={news.url} target="_blank" rel="noopener noreferrer">
            <Newscard newsdata={news} />
          </a>
        ))
      ) : (
        <p>No news found</p>
      )}
    </div>
  );
};

export default Body;
