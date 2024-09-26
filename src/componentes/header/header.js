import * as React from "react"
import "../header/header.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"


const Header =()=>{
    
    return(
        <>
        
        <header class="header">
            <div class="logo">
                <div className="imgLogo"><Link to="/" style={{color: `white`, textDecoration: `none`, padding: `20%`}}>
                            <StaticImage className="logoheader"
                        src="../../images/pn1.png"
                /></Link></div>

            </div>
            
            <nav class="link">
                <ul>
                    <li>
                    <Link to="/infoInstitucional" style={{color: `white`, textDecoration: `none`, padding: `20%`}}>Nosotros</Link>

                    </li>
                    <li>
                    <Link to="/contacto" style={{color: `white`, textDecoration: `none`, padding: `20%`}}>Contacto</Link>          

                    </li>
                    
                </ul>
            </nav>
        </header>
        </>
    )
}
export default Header