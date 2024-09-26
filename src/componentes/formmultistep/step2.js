import React from 'react';

const Step2 = ({ formData, setFormData, prevStep, nextStep }) => {
    return (
        <div>
            <h2>Step 2</h2>
            <h3>Introducción del Email</h3>
            <label>Email:</label>
            <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
        </div>
    );
};

export default Step2;