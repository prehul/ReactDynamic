import React, { useState, useEffect } from 'react';

const DynamicForm = ({ formFields, onSubmit }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // Initialize the formData object based on formFields
    const initialFormData = {};
    formFields.forEach((field) => {
      initialFormData[field.name] = '';
    });
    setFormData(initialFormData);
  }, [formFields]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}:</label>
          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleInputChange}
            />
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleInputChange}
            />
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
