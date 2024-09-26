import React, { useState } from 'react';


const DeleteQr = ({initialNombreRef}) => {

    const [nombre_ref] = useState(initialNombreRef);
    const [message, setMessage] = useState('');

    // const handleNombre_ref=(e) => setNombre_ref(e.target.value);

    const Delete2 = async () => {
        try {
            const response = await fetch('http://localhost/api-qr-tandem/v1/delete-qr.php', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({nombre_ref})
            });
            
            const data = await response.json();
            setMessage(data.message);

            } catch (error) {
                console.error('Error Borrando qr', error);
            }
    };

    return (
            <div>
            <h3>Borrar Qr</h3>
            {/* <form action="/my-handling-form-page" method="post" className="formAcceso" >
                <ul className="lista">
                    
                    <li >
                    
                        <div className="icono">
                        <input
                            placeholder='nombre'
                            type="text"
                            value={nombre_ref}
                            onChange={handleNombre_ref}
                        />                
                        </div>
                    </li>
                    
                </ul>
            </form> */}
            <form onSubmit={Delete2} >
                <ul className="lista">
                    
                    <li>
                        <p>{nombre_ref}</p>
                    </li>
                    
                </ul>
            </form>
            
            
            <button onClick={Delete2} className='button22'>Eliminar Qr</button>
            
            <p>{message && <p>{message}</p>} </p>

            </div>
    );
};
export default DeleteQr;