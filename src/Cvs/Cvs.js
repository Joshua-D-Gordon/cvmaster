// src/Cvs/Cvs.js
import React, { useState } from 'react';
import './styles.css';
import Sidebar from '../Sidebar/Sidebar';

const Cvs = () => {
  const [visibleCvs, setVisibleCvs] = useState(9);

  const handleLoadMore = () => {
    setVisibleCvs(prevVisibleCvs => prevVisibleCvs + 9);
  };

  const generateRandomCvs = () => {
    return Array.from({ length: visibleCvs }, (_, index) => ({
      id: index,
      previewImageUrl: `https://picsum.photos/200/300?random=${index}`
    }));
  };

  const cvs = generateRandomCvs();

  return (
    <div>
      <Sidebar />
      <div className="content">
        <h2 className='page-name'>My CVs</h2>
        <div className="cv-grid">
          {cvs.map(cv => (
            <div className="cv-preview" key={cv.id}>
              <img src={cv.previewImageUrl} alt="CV Preview" />
              <div className="cv-overlay">
                <button className="cv-button">Download</button>
                <button className="cv-button">Edit</button>
              </div>
            </div>
          ))}
        </div>
        <button className="load-more" onClick={handleLoadMore}>Load More</button>
      </div>
    </div>
  );
};

export default Cvs;
