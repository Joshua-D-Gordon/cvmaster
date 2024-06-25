import React, { useState } from 'react';
import DragDropContextComponent from './DragDropContextComponent';
import CvPreview from './CvPreview';
import EditFields from './EditFields';
import './styles.css';

const CvBuilder = () => {
    const [cvData, setCvData] = useState([
        { id: 'personalDetails', type: 'personalDetails', content: 'Personal Details', fields: { jobTitle: '', firstName: '', lastName: '', email: '', phone: '', country: '', city: '' } },
        { id: 'professionalSummary', type: 'textArea', content: 'Professional Summary', fields: { text: '' } },
        { id: 'professionalExperience', type: 'textArea', content: 'Professional Experience', fields: { text: '' } },
        { id: 'programmingProjects', type: 'textArea', content: 'Programming Projects', fields: { text: '' } },
        { id: 'education', type: 'textArea', content: 'Education', fields: { text: '' } },
        { id: 'skills', type: 'textArea', content: 'Skills', fields: { text: '' } },
        { id: 'languages', type: 'textArea', content: 'Languages', fields: { text: '' } },
        // Add more sections here
      ]);

  const updateField = (index, field, value) => {
    const newData = [...cvData];
    newData[index].fields[field] = value;
    setCvData(newData);
  };

  return (
    <div className="cv-builder-container">
      <DragDropContextComponent cvData={cvData} setCvData={setCvData} />
      <EditFields cvData={cvData} setCvData={setCvData} updateField={updateField} />
      <CvPreview cvData={cvData} />
    </div>
  );
};

export default CvBuilder;
