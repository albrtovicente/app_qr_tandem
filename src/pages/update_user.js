
import React, { useState }from "react"
const UpdateUser = ({initialNombre, initialEmail, initialDelegacion}) => {
   

    const [nombre, setNombre] = useState(initialNombre);
    const [email] = useState(initialEmail);
    const [delegacion, setDelegacion] = useState(initialDelegacion);
    
    const [message, setMessage] = useState('');

    
    const handleNombre=(e) => setNombre(e.target.value);
    const handleDelegacion=(e) => setDelegacion(e.target.value);


    const handleUpdateUser = async () => {
        try {
            const response = await fetch('http://localhost/api-qr-tandem/v1/update-user.php', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, nombre, delegacion })
            });
            const data = await response.json();
            
            setMessage(data.message);
            } catch (error) {
                console.error('Error registrando usuario', error);
                setMessage('Error en el registro');
            }
        };
    
    return (

            <div>
            <h3 className="grupo1" style={{ fontSize: `34px`, textAlign: `center`}}>Actualizar Usuario</h3>
            <form action="/my-handling-form-page" method="post" className="formAcceso" >
            
                <ul className="lista">
                    
                    <li>
                        <p style={{ textAlign: `center`, fontSize: `34px`}}>
                            {email}
                        </p>                            
                    </li>
                    <li className="pass">
                        <div className="icono3">
                            <input
                                type="opc"
                                id='text'
                                value={nombre}
                                onChange={handleNombre}
                            />
                            
                        </div>
                    </li>
                    <br></br><br></br>
                    <li>
                    {/* <div className="icono4" style={{width: `200px`, marginLeft: `80px`}}> */}
                        <select name="select" value={delegacion} onChange={handleDelegacion} required>
                            <option value="Aranjuez">Aranjuez</option>
                            <option value="El_Escorial" >El Escorial</option>
                            <option value="Moncloa">Moncloa</option>
                        </select>
                        {/* <input
                            placeholder="delegacion"
                            type="text"
                            value={delegacion}
                            onChange={handleDelegacion}
                        /> */}
                    {/* </div> */}
                    </li>
                    
                </ul>
            </form>
            
            
            <button onClick={handleUpdateUser} className="button22">Actualizar usuario</button>
            <p>{message && <p>{message}</p>} </p>

            
            </div>
    );
};
export default UpdateUser;