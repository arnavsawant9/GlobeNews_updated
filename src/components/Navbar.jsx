import React, { useState } from 'react';
import { countrylist, languagelist } from '../utils/constants';
import '../styles/Navbar.css'
import newslogo from '../assets/newspaperlogo-removebg-preview.png'
import DarkMode from './DarkMode/DarkMode';


const Navbar = ({ onSearch }) => {
  // const {onSearch}=props;
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState('');
  const [query, setQuery] = useState(''); 
  const [category, setCategory] = useState('general'); 
  const [isTopNews, setIsTopNews] = useState(true); 

  const handleSearch = () => {
    const searchParams = isTopNews
      ? { country, language, category } 
      : { country, language, query };   
    onSearch(searchParams, isTopNews);  
  };

  return (
    <nav className="navbar">
      <div className="logo">
      <img src={newslogo}/>
      <div className='title'><h1>GlobeNews</h1></div>
      </div>
      <div className='navitems'>
        <div className='labels'>
          <label className='radio1'>
            <input
              type="radio"
              checked={isTopNews}
              onChange={() => setIsTopNews(true)}
            />
            Trending News
          </label>
          <label className='radio2'>
            <input
              type="radio"
              checked={!isTopNews}
              onChange={() => setIsTopNews(false)}
            />
            Search News
          </label>
        </div>

        {!isTopNews ? (
          <input
            type="text"
            placeholder="Search news..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        ) : (
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="general">General</option>
            <option value="world">World</option>
            <option value="nation">Nation</option>
            <option value="business">Business</option>
            <option value="technology">Technology</option>
            <option value="entertainment">Entertainment</option>
            <option value="sports">Sports</option>
            <option value="science">Science</option>
            <option value="health">Health</option>
          </select>
        )}

        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">Select Country</option>
          {Object.keys(countrylist).map((key) => (
            <option key={key} value={countrylist[key]}>
              {key}
            </option>
          ))}
        </select>

        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="">Select Language</option>
          {Object.keys(languagelist).map((key) => (
            <option key={key} value={languagelist[key]}>
              {key}
            </option>
          ))}
        </select>

        <button onClick={handleSearch}>Search</button>
        <DarkMode/>
      </div>
    </nav>
  );
};

export default Navbar;
