import React, { useEffect, useState } from 'react';
import Layout from "../componentes/layout/layout";
import { Link } from "gatsby"
import DeleteQr from './deleteQr';
// import Button from "../componentes/button/button"
import ModalTandem from '../componentes/modal/modal';


function TablaQr({ url }) {
    const [qrs,setQrs]=useState([]);
    // const {message,setMessage}=useState('')
    
        useEffect(() => {
            const fetchUser = async () => {
                try {
                    const response = await fetch('http://localhost/api-qr-tandem/v1/list-qr.php', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const respuesta = await response.json();
                    setQrs(respuesta.qr_codes)
                    // setMessage(respuesta.message)
                } catch (error) {
                    console.log('Error al buscar la lista de qr', error);
                    console.error('Stack trace:', error.stack);
                }
            };
            fetchUser();
        }, [url]);
        return (
        <>
        <Layout>
        <div class="containertabla">
        
        <table className="table">
            <thead className="table-header">
            <tr>
                <th className="header__item">Id</th>
                <th className="header__item">Dato</th>
                <th className="header__item">Nombre ref</th>
                <th className="header__item">Descripcion</th>
                <th className="header__item">Creado por:</th>
                
            </tr>
            </thead>
            <tbody className="table-content">
            {qrs.map((qr_codes) => (
            <tr className="table-row"  key={qr_codes.qr_id}>
                <td className="table-data">{qr_codes.qr_id}</td>
                <td className="table-data">{qr_codes.qr_data}</td>
                <td className="table-data">{qr_codes.qr_nombre_ref}</td>
                <td className="table-data">{qr_codes.qr_description}</td>
                <td className="table-data">{qr_codes.qr_created_at}</td>
                <td >
                <ModalTandem
                    
                    boton="Borrar"
                    text={<DeleteQr initialNombreRef={qr_codes.qr_nombre_ref}></DeleteQr>}
                />
                </td>
                {/* <p>{message && <p>{message}</p>} </p>  */}
            </tr>
            
            
            ))}
            </tbody>
        </table>
        <button className='buttonAtras'><Link to="/CrearQr" style={{color: `white`, textDecoration: `none`}}>Atrás</Link></button>
        <br/><br/><br/><br/>
        </div>
        </Layout>	 
        </>
    );
}
export default TablaQr;