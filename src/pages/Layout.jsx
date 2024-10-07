import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Body from '../components/Body';

const Layout = () => {
  const [searchParams, setSearchParams] = useState({
    country: '',
    language: '',
    category: 'general',
  });
  const [isTopNews, setIsTopNews] = useState(true);

  const handleSearch = (params, isTopNewsFlag) => {
    setSearchParams(params); 
    setIsTopNews(isTopNewsFlag); 
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <Body searchParams={searchParams} isTopNews={isTopNews} />
    </div>
  );
};

export default Layout;
