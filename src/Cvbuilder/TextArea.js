import React from 'react';

const TextArea = ({ label, value, onChange }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <textarea value={value} onChange={onChange}></textarea>
    </div>
  );
};

export default TextArea;
