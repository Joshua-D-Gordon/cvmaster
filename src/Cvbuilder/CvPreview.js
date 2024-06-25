import React from 'react';
import DownloadButton from './DownloadButton';

const CvPreview = ({ cvData }) => {
  return (
    <div className="cv-preview-wrapper">
      <div className="cv-preview" id="cv-preview">
        {cvData.map((item, index) => (
          <div key={index} className="section">
            {item.type === 'personalDetails' && (
              <>
                <h1>{`${item.fields.firstName} ${item.fields.lastName}`}</h1>
                <h2>{item.fields.jobTitle}</h2>
                <p>Email: {item.fields.email}</p>
                <p>Phone: {item.fields.phone}</p>
                <p>Country: {item.fields.country}</p>
                <p>City: {item.fields.city}</p>
              </>
            )}
            {item.type === 'textArea' && (
              <>
                <h2>{item.content}</h2>
                <div dangerouslySetInnerHTML={{ __html: item.fields.text }} />
              </>
            )}
          </div>
        ))}
      </div>
      <DownloadButton />
    </div>
  );
};

export default CvPreview;
