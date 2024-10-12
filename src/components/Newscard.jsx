// import React from 'react'
// import randomimg from '../assets/randomnews.jpg'
// import { Link } from 'react-router-dom';

// const Newscard = (props) => {
//   const { newsdata } = props;
//   const { title, image,publishedAt,url} = newsdata;
  
//   return (
//     <div className='newscard'>
//       <img src={image} alt={randomimg} className='image' />
//       <h3>{title}</h3>
//       <p>{publishedAt}</p>
//       <Link to={url}>Read more</Link>
//     </div>
//   );
// }
// export default Newscard;









import React from 'react';
import randomimg from '../assets/randomnews.jpg';
import { Link } from 'react-router-dom';
import '../styles/Newscard.css';

const Newscard = (props) => {
  const { newsdata } = props;
  const { title, image, publishedAt, url } = newsdata;
  
  return (
    <div className='newscard'>
      <img src={image || randomimg} alt="News" className='newscard-image' />
      <div className='newscard-content'>
        <h3 className='newscard-title'>{title}</h3>
        <p className='newscard-date'>{publishedAt}</p>
        <Link to={url} className='newscard-link'>Read more</Link>
      </div>
    </div>
  );
}

export default Newscard;
