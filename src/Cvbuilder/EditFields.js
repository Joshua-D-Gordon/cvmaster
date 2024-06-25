import React from 'react';
import TextInput from './TextInput';
import RichTextEditor from './RichTextEditor';

const EditFields = ({ cvData, updateField }) => {
  return (
    <div className="edit-fields">
      {cvData.map((item, index) => (
        <div key={item.id}>
          <h2>{item.content}</h2>
          {item.type === 'personalDetails' && (
            <>
              <TextInput
                label="Job Title"
                value={item.fields.jobTitle}
                onChange={(e) => updateField(index, 'jobTitle', e.target.value)}
              />
              <TextInput
                label="First Name"
                value={item.fields.firstName}
                onChange={(e) => updateField(index, 'firstName', e.target.value)}
              />
              <TextInput
                label="Last Name"
                value={item.fields.lastName}
                onChange={(e) => updateField(index, 'lastName', e.target.value)}
              />
              <TextInput
                label="Email"
                value={item.fields.email}
                onChange={(e) => updateField(index, 'email', e.target.value)}
              />
              <TextInput
                label="Phone"
                value={item.fields.phone}
                onChange={(e) => updateField(index, 'phone', e.target.value)}
              />
              <TextInput
                label="Country"
                value={item.fields.country}
                onChange={(e) => updateField(index, 'country', e.target.value)}
              />
              <TextInput
                label="City"
                value={item.fields.city}
                onChange={(e) => updateField(index, 'city', e.target.value)}
              />
            </>
          )}
          {item.type === 'textArea' && (
            <RichTextEditor
              label={item.content}
              value={item.fields.text}
              onChange={(value) => updateField(index, 'text', value)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default EditFields;
