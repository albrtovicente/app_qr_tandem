import React from 'react';

const Step4 = ({ formData, prevStep, submitForm }) => {
    return (
        <div>
            <h2>Step 4</h2>
            <h3>Revisión y confirmación de los datos</h3>
            <ul>
                <li><strong>Name:</strong> {formData.name}</li>
                <li><strong>Email:</strong> {formData.email}</li>
                <li><strong>Password:</strong> {formData.password}</li>
            </ul>
            <button onClick={prevStep}>Back</button>
            <button onClick={submitForm}>Submit</button>
        </div>
    );
};

export default Step4;