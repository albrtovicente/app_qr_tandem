import * as React from "react"
import { useState } from 'react';

const ChangeRole = ({initialEmail, initialRole, onUserUpdated}) => {
   

    const [email] = useState(initialEmail);
    const [role, setRole] = useState(initialRole);
    const [message, setMessage] = useState('');
    

    
    const handleRole=(e) => setRole(e.target.value);


    const handleChangeRole = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost/api-qr-tandem/v1/change-role.php', {
                method: 'PUT',
                headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({ email, role })
         });
         const data = await response.json();
         setMessage(data.message);

         } catch (error) {
             console.error('Error registrando usuario', error);
             
            onUserUpdated();

         }
     };
 
 return (
     <>
         <div>
      <h2 className="grupo1" style={{ fontSize: `34px`, textAlign: `center`}}>Actualizar Rol de Usuario</h2>
      <form onSubmit={handleChangeRole}>
        <div>
          <p style={{ textAlign: `center`, fontSize: `34px`}}>{email}</p>
        </div>
        <div>
          <label>
            <p className="grupo1">Role:</p>
            <select id="roleSelect" className="select" value={role} onChange={handleRole} required>
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
            <option value="guest">Guest</option>
            </select>
          </label>
        </div>
        <button type="submit" className="button22">Actualizar Rol</button>
      </form>
      {message && <p>{message}</p>} 
    </div>
        </>
    );
};
export default ChangeRole;
