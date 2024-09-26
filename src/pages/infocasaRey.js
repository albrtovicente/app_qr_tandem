import * as React from "react"
import Layout from "../componentes/layout/layout"
import CardTandem from "../componentes/cardTandem/cardTandem"
import './infoInstitucional.css';
import { StaticImage } from "gatsby-plugin-image"



const InfocasaRey = () => {
  
    return (
      <Layout>
        <div className="flexintitucional">
          
          <div className="indiceInstitucional">
          
          <br/>
             <a href="/infohistoria" role='button' className="aInst">Bienvenida de la presidenta</a> <br/><br/>
             <a href="/infohistoria" role='button' className="aInst">Conoce nuestra historia</a> <br/><br/>
             <a href="/infoadministrador" role='button' className="aInst">Consejo de administrador</a> <br/><br/>
             <a href="/infooficiales" role='button' className="aInst">Actos oficiales e institucionales</a> <br/><br/>
             <a href="/inforetratosOficiales" role='button' className="aInst">Retratos oficiales</a> <br/><br/>
             <a href="/infoministerio" role='button' className="aInst">Ministerio de la presidencia</a> <br/><br/><br/>

          </div>

          <div className="Iinstitucional">
            <h1 style={{textAlign: `center`}}>Temas Destacados </h1>  
            <p>
               <div className="imgInst">
                <StaticImage 
                  style={{width: `1300px`,height: `200px`, textAlign: `center`}}
                  src="../images/aranjuez.jpg"
                />
              </div>
            </p>
            
          </div>
        </div>
        
        
  
         
  
      </Layout>
      
    )
  }
  
  export default InfocasaRey