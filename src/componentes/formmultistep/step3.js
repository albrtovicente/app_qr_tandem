import React from 'react';

const Step3 = ({ formData, setFormData, prevStep, nextStep }) => {
    return (
        <div>
            <h2>Step 3</h2>
            <h3>Introducción del Password</h3>
            <label>Password:</label>
            <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
        </div>
    );
};
export default Step3;