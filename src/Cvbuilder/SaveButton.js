import React from 'react';
import { db } from '../firebase';

const SaveButton = ({ cvData }) => {
  const saveData = () => {
    db.ref('cvData').set(cvData);
  };

  return <button onClick={saveData}>Save</button>;
};

export default SaveButton;
