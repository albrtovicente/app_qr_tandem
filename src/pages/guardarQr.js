

import * as React from "react"
import { useState, useRef } from 'react';
import './registro.css'
import Button from "../componentes/button/button";
import { Link } from "gatsby"


// const GuardarQr = ({ data, nref, desc }) => {
//   const [mensaje, setMensaje] = useState(false);
//   const [respuesta, setRespuesta] = useState('');

//   const Guardar = async () => {
//       if (typeof window !== 'undefined') { // Verifica si el código se está ejecutando en el navegador
//           try {
//               const response = await fetch('http://localhost/api-qr-tandem/v1/create-qr.php', {
//                   method: 'POST',
//                   headers: {
//                       'Content-Type': 'application/json'
//                   },
//                   body: JSON.stringify({
//                       "data": data,
//                       "nombre_ref": nref,
//                       "description": desc,
//                       "created_by": localStorage.getItem('tandem_id')
//                   })
//               });
//               const respuesta = await response.json();
//               setRespuesta(respuesta.message);
//               setMensaje(true);
//               console.log(respuesta.message);
//           } catch (error) {
//               console.error('Error creando código QR', error);
//           }
//       }
//   };

//   return (
//       <>
//           {/* <Button onClick={Guardar} > Guardar </Button> */}
//           <button onClick={Guardar} className="button23"> Guardar </button>
//           {mensaje && <p>{respuesta}</p>}
//       </>
//   );
// };

// export default GuardarQr;

const GuardarQr = () => {

    const [data, setData] = useState('');
    const [nombre_ref, setNombre_ref] = useState('');
    const [description, setDescription] = useState('');
    const [created_by, setCreated_by]= useState('');
    const [message, setMessage] = useState('');

    const hadleData=(e) => setData(e.target.value);
    const hadleNombre_ref=(e) => setNombre_ref(e.target.value);
    const hadleDescription=(e) => setDescription(e.target.value);
    const hadleCreated_by=(e) => setCreated_by(e.target.value);


    const handleGuardar = async () => {
      
        try {
            const response = await fetch('http://localhost/api-qr-tandem/v1/create-qr.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "data": data,
                    "nombre_ref": nombre_ref,
                    "description": description,
                   "created_by": created_by
                })
            });
            const respuesta = await response.json();
            
            setMessage(respuesta.message);
        } catch (error) {
            console.error('Error registrando usuario', error);
            setMessage('Error en el registro');
        }
    };

    return (
    <>

      <div class="signupFrm">
        <div action="" class="form">
              <div className="columnaRegistro">
                <div className="tituloRegistro">
                  <h1 class="title" >Guardar</h1>
                </div>
                <div className="botonRegistro">
                <Link to="/login">
                  <button className="button_active">Atrás</button>
                </Link> 
                </div>
              </div>

          <div class="inputContainer">
            <input
                className="input"
                type="text"
                placeholder=""
                id='data'
                value={data}
                onChange={hadleData}
            />
            <label htmlFor='data' class="label">Datos</label>
          </div>

          <div class="inputContainer">
          <input
                className="input"
                type="text"
                placeholder=""
                id='nombre_ref'
                value={nombre_ref}
                onChange={hadleNombre_ref}
            />
            <label htmlFor='nombre_ref' class="label">nombre_ref</label>
          </div>

          <div class="inputContainer">
          <input
                className="input"
                type="text"
                placeholder=""
                id='description'
                value={description}
                onChange={hadleDescription}
            />
            <label htmlFor='description' class="label">descripcion</label>
          </div>

          <div class="inputContainer">
            <input
                className="input"
                type="text"
                placeholder=""
                id='created_by'
                value={created_by}
                onChange={hadleCreated_by}
            />
            <label htmlFor='created_by' className="label">Creado por:</label>
          </div>
            <button onClick={handleGuardar} className="button22" style={{ textDecoration: `none`,color: `black`}}>Crear Qr</button>
            {message && <p>{message}</p>}
            
        </div>
             
        </div>
        </>
    );
};

export default GuardarQr;






