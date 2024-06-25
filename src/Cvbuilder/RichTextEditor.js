import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = ({ label, value, onChange }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <ReactQuill theme="snow" value={value} onChange={onChange} />
    </div>
  );
};

export default RichTextEditor;
