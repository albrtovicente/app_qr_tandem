import * as React from "react"
import Layout from "../componentes/layout/layout"
import { Link } from "gatsby"
import "../componentes/button/button.css"
import { StaticImage} from "gatsby-plugin-image"

import MultiStepForm from "../componentes/formmultistep/formmutisitep"

const IndexPage = () => {
  
  return (
    <Layout>
      {/* <MultiStepForm></MultiStepForm> */}
      <div className="containerTitulo">
            <div className="titulo">
            
                <div className="parrafotitulo" id="parrafotitulo">
                    <h1>¡Bienvenido!</h1>

                    <p>    Nos complace recibirles en este espacio dedicado a la preservación y promoción de nuestro valioso patrimonio cultural. Aquí, podrán generar Códigos QR personalizados para facilitar el acceso a la información de nuestros monumentos, sitios históricos, y bienes culturales.</p>
                </div>

                <div className="imagentitulo" id="imagenacceso">
                    <Link to="../login"> 
                    <StaticImage 
                        src="..\images\acceso.png"
                        style={{color: `black`, textDecoration: `none`}}
                    />
                    </Link>
                </div>
        
            </div>
      </div>
      {/* <Titulo></Titulo>   */}
      
      <div className="imagenFondo">
        <div className="flexbutton">
          <button className="botonPrincipal"><Link to="/login" style={{color: `white`, textDecoration: `none`}}>Acceso Usuario</Link></button>
          <button className="botonPrincipal"><Link to="/infoInstitucional" style={{color: `white`, textDecoration: `none`}}>Información</Link></button>    
        </div>
      </div>
    </Layout>
    
  )
}

export default IndexPage

