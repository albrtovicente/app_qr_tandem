import * as React from "react"
import Layout from "../componentes/layout/layout"
import './infoInstitucional.css';
import { StaticImage } from "gatsby-plugin-image"



const InfoMinisterio = () => {
  
    return (
      <Layout>
        <div className="flexintitucional">
          
          <div className="indiceInstitucional">
          
          <br/>
             <a href="/infoInstitucional" role='button' className="aInst">Bienvenida de la presidenta</a> <br/><br/>
             <a href="/infohistoria" role='button' className="aInst">Conoce nuestra historia</a> <br/><br/>
             <a href="/infoadministrador" role='button' className="aInst">Consejo de administrador</a> <br/><br/>
             <a href="/infooficiales" role='button' className="aInst">Actos oficiales e institucionales</a> <br/><br/>
             <a href="/infocasaRey" role='button' className="aInst">Casa de S.M. el rey</a> <br/><br/>
             <a href="/inforetratosOficiales" role='button' className="aInst">Retratos oficiales</a> <br/><br/><br/>

          </div>

          <div className="Iinstitucional">
            <h1 style={{textAlign: `center`}}>Ministerio de la presidencia</h1>  
            <p>
               <div className="imgInst">
                <StaticImage 
                  style={{width: `1300px`,height: `200px`, textAlign: `center`}}
                  src="../images/ministerio.jpg"
                />
              </div>
            </p>
            
          </div>
        </div>
        
        
  
         
  
      </Layout>
      
    )
  }
  
  export default InfoMinisterio