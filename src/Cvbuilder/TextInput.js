import React from 'react';

const TextInput = ({ label, value, onChange }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default TextInput;
