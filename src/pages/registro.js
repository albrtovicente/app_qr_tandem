

import * as React from "react"
import { useState } from 'react';
import Layout from "../componentes/layout/layout"
import './registro.css'
// import Button from "../componentes/button/button"
import { Link } from "gatsby"


const Registro = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [delegacion, setDelegacion] = useState('');
    const [password, setPassword]= useState('');
    const [message, setMessage] = useState('');

    const hadleNombre=(e) => setNombre(e.target.value);
    const hadleDelegacion=(e) => setDelegacion(e.target.value);
    const hadleEmail=(e) => setEmail(e.target.value);

    const hadlePassword=(e) => setPassword(e.target.value);


    const handleRegistro = async () => {
      
        try {
            const response = await fetch('http://localhost/api-qr-tandem/v1/register-user.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "nombre": nombre,
                    "email": email,
                    "delegacion": delegacion,
                   "password": password
                })
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
      <div className="imgFond">

      <div class="signupFrm">
        <div action="" class="form">
              <div className="columnaRegistro">
                <div className="tituloRegistro">
                  <h1 class="title">Registrar</h1>
                </div>
                <div className="botonRegistro">
                <Link to="/login" style={{textDecoration:`none`}}>
                  <button className="button_active">Atrás</button>
                </Link> 
                </div>
              </div>

          <div class="inputContainer">
            <input
                className="input"
                type="text"
                placeholder=""
                id='nombre'
                value={nombre}
                onChange={hadleNombre}
            />
            <label htmlFor='nombre' class="label">Nombre</label>
          </div>

          <div class="inputContainer">
          <input
                className="input"
                type="text"
                placeholder=""
                id='email'
                value={email}
                onChange={hadleEmail}
            />
            <label htmlFor='email' class="label">Email</label>
          </div>

          {/* <div class="inputContainer"> */}
          {/* <select name="select" value={delegacion} onChange={hadleDelegacion} required>
              <option value="Aranjuez">Aranjuez</option>
              <option value="El_Escorial" >El Escorial</option>
              <option value="Moncloa">Moncloa</option>
          </select> */}
          {/* <input
                className="input"
                type="text"
                placeholder=""
                id='delegacion'
                value={delegacion}
                onChange={hadleDelegacion}
            /> */}
            {/* <label htmlFor='delegacion' class="label">Delegacion</label>
          </div> */}

          {/* <div class="inputContainer">
            <input type="text" class="input" placeholder=""/>
            <label for="" class="label">Confirmar email</label>
          </div> */}

          <div class="inputContainer">
            <input
                className="input"
                type="text"
                placeholder=""
                id='password'
                value={password}
                onChange={hadlePassword}
            />
            <label htmlFor='password' className="label">Contraseña</label>
          </div>

          {/* <div class="inputContainer">
            <input type="text" class="input" placeholder=""/>
            <label for="" class="label">Confirmar Contraseña</label>
          </div> */}
            {/* <button onClick={handleRegistro} className="submitBtn">Registro</button> */}
            <input onClick={handleRegistro} type="submit" class="submitBtn" value="Registrar"/>
            {message && <p>{message}</p>}
            
        </div>
            {/* <input onClick={handleRegistro} type="submit" class="submitBtn" value="Registrar"/>
            {message && <p>{message}</p>} */}
            {/* <button onClick={handleRegistro} className="submitBtn">Registro</button> */}
             
        </div>
        </div>
      </Layout>
    );
};

export default Registro;