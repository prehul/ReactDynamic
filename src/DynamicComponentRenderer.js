import React, { useState, useEffect } from 'react';
import DynamicTable from './DynamicTab';
import DynamicForm from './DynamicForm';

const DynamicComponentRenderer = ({ config }) => {
  const [activeComponent, setActiveComponent] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // Load the initial component when the component mounts
    if (config.length > 0) {
      loadComponent(config[0]);
    }
  }, [config]);

  const loadComponent = (componentConfig) => {
    // Load table data for the selected component
    import(`./${componentConfig.tableData}`).then((data) => {
      setTableData(data.default);
    });

    // Reset the form data
    const initialFormData = {};
    componentConfig.formFields.forEach((field) => {
      initialFormData[field.name] = '';
    });
    setFormData(initialFormData);

    // Set the active component
    setActiveComponent(componentConfig);
  };

  const handleFormSubmit = () => {
    // Implement your form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <h1>Dynamic Component Renderer</h1>
      <div>
        <h2>Select a Component</h2>
        <ul>
          {config.map((componentConfig, index) => (
            <li key={index}>
              <button onClick={() => loadComponent(componentConfig)}>
                {componentConfig.componentName}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {activeComponent && (
        <div>
          <h2>{activeComponent.componentName}</h2>
          <DynamicTable data={tableData} />
          <h2>Form</h2>
          <DynamicForm formFields={activeComponent.formFields} onSubmit={handleFormSubmit} />

          {/* <DynamicForm
            fields={activeComponent.formFields}
            formData={formData}
            onChange={(newFormData) => setFormData(newFormData)}
            onSubmit={handleFormSubmit}
          /> */}
        </div>
      )}
    </div>
  );
};

export default DynamicComponentRenderer;
