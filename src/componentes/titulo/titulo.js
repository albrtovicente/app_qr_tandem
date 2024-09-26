import * as React from "react"
import "../titulo/titulo.css"
import { Link } from "gatsby"

import { StaticImage} from "gatsby-plugin-image"


const Titulo =()=>{
    
    return(
        <>
        <div className="containerTitulo">
            <div className="titulo">
            
                <div className="parrafotitulo" id="parrafotitulo">
                    <h1>¡Bienvenido!</h1>

                    <p>    Nos complace recibirles en este espacio dedicado a la preservación y promoción de nuestro valioso patrimonio cultural. Aquí, podrán generar Códigos QR personalizados para facilitar el acceso a la información de nuestros monumentos, sitios históricos, y bienes culturales.</p>
                </div>

                {/* <div className="imagentitulo" id="imagenacceso">
                    <Link to="../login"> 
                    <StaticImage 
                        src="..\images\acceso.png"
                        style={{color: `black`, textDecoration: `none`}}
                    />
                    </Link>
                </div> */}
        
            </div>
        </div>
        </>
    )
}
export default Titulo