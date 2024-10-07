import React from 'react'
import randomimg from '../assets/randomnews.jpg'
import { Link } from 'react-router-dom';

const Newscard = (props) => {
  const { newsdata } = props;
  const { title, image,publishedAt,url} = newsdata;
  
  return (
    <div className='newscard'>
      <img src={image} alt={randomimg} className='image' />
      <h3>{title}</h3>
      <p>{publishedAt}</p>
      <Link to={url}>Read more</Link>
    </div>
  );
}
export default Newscard;