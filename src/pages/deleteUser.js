import React, { useState } from 'react';


const DeleteUser = ({initialEmail}) => {
    const [email] = useState(initialEmail);
    const [message, setMessage] = useState('');


    const Delete = async () => {
        try {
            const response = await fetch('http://localhost/api-qr-tandem/v1/delete-user.php', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email})
            });
            
            const data = await response.json();
            setMessage(data.message);

            } catch (error) {
                console.error('Error registrando usuario', error);
            }
    };

    return (
            <div>
            <h3>Borrar Usuario</h3>
            <form onSubmit={Delete} >
                <ul className="lista">
                    
                    <li>
                        <p>{email}</p>
                    </li>
                    
                </ul>
            </form>
            
            
            <button onClick={Delete} className='button22'>Eliminar usuario</button>
            
            <p>{message && <p>{message}</p>} </p>

            </div>
    );
};
export default DeleteUser;