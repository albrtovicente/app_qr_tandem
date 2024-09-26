
import * as React from "react"
import { useState } from 'react';
import Layout from "../componentes/layout/layout";
import '../pages/change-password.css'
const ChangePassword = () => {
   

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [message, setMessage] = useState('');

    
    const handlePassword=(e) => setPassword(e.target.value);
    const handleEmail=(e) => setEmail(e.target.value);


    const handleChangePassword = async () => {
        try {
            const response = await fetch('http://localhost/api-qr-tandem/v1/change-password.php', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            
            setMessage(data.message);
            } catch (error) {
                console.error('Error registrando usuario', error);
                setMessage('Error en el registro');
            }
        };
    
    return (
        <Layout>
            <div className="containerChangePassword">
               <div className="imageFondoChangePassword">
            
            <h3>Cambio de Contraseña</h3>
            <form action="/my-handling-form-page" method="post" className="formAcceso" >
                <ul className="lista">
                    
                    <li className="mail">
                    
                        <div class="icono">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmail}
                        />                
                        </div>
                    </li>
                    <li className="pass">
                    <div class="icono2">
                        <input
                            // className="input"
                            type="password"
                            placeholder="cambiar contraseña"
                            id='password'
                            value={password}
                            onChange={handlePassword}
                        />
                        <label htmlFor='password' className="label"></label>
                    </div>
                    </li>
                </ul>
            </form>
            
            
            <button onClick={handleChangePassword}>Cambiar Constraseña</button>
            
            </div>
            </div>
        </Layout>
    );
};
export default ChangePassword;