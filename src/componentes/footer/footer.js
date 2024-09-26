import * as React from "react"
import "../footer/footer.css"

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"


const Footer =()=>{
    
    return(
        <>
        <div className="containerfooter">
           <div className="fila1">
            <div class="logo">
                <div className="imgLogo"><Link to="/" style={{color: `white`, textDecoration: `none`, padding: `20%`}}>
                            <StaticImage className="logoheader"
                        src="../../images/pn1.png"
                        /></Link></div>
            </div>
            <nav class="link">
                <ul>
                    <li>
                    <Link to="/avisoLegal" style={{color: `white`, textDecoration: `none`, marginLeft: '20px'}}>Aviso legal</Link>          

                    </li>
                    <li>
                    <Link to="/accesibilidad" style={{color: `white`, textDecoration: `none`, marginLeft: '20px'}}>Accesibilidad</Link>

                    </li>
                    <li>
                    <Link to="/privacidad" style={{color: `white`, textDecoration: `none`, marginLeft: '20px'}}>Política de privacidad</Link>   

                    </li>  
                </ul>
            </nav>
           </div>
           <div className="fila2">

            <div className="link2">
                
                    <div className="item1">
                        <Link to="/#">
                            <StaticImage className="logofooter"
                                src="../../images/logo1.png"
                            />
                        </Link>
                    </div>
                    <div className="item2">
                        <Link to="/#">
                            <StaticImage className="logofooter"
                                src="../../images/logo2.png"
                            /></Link>
                    </div>
                    <div className="item3">
                        <Link to="/#">
                            <StaticImage className="logofooter"
                                src="../../images/logo3.png"
                            /></Link>
                    </div>
                    <div className="item4">
                        <Link to="/#">
                            <StaticImage className="logofooter"
                                src="../../images/logo5.png"
                            /></Link>
                    </div>
            </div>
            <div className="redes">
                    <div className="item5">
                        <Link to="/#">
                            <StaticImage className="redesimg"
                                src="../../images/inst.png"
                            /></Link>
                    </div>
                    <div className="item6">
                        <Link to="/#">
                            <StaticImage className="redesimg"
                                src="../../images/tiktok.png"
                            /></Link>
                    </div>
                    <div className="item7">
                        <Link to="/#">
                            <StaticImage className="redesimg"
                                src="../../images/twitter.png"
                            /></Link>
                    </div>
                    <div className="item8">
                        <Link to="/#">
                            <StaticImage className="redesimg"
                                src="../../images/youtube.png"
                            /></Link>
                    </div>
                </div>


           </div> 
        </div>

        {/* <div className="footer2">
        <nav className="link2">
                <ol>
                    <li className="item">
                        <Link to="/#">
                            <StaticImage className="logofooter"
                                src="../images/logo1.png"
                            /></Link>
                    </li>
                    <li className="item">
                        <Link to="/#">
                            <StaticImage className="logofooter"
                                src="../images/logo2.png"
                            /></Link>
                    </li>
                    <li className="item">
                        <Link to="/#">
                            <StaticImage className="logofooter"
                                src="../images/logo3.png"
                            /></Link>
                    </li>
                    <li className="item">
                        <Link to="/#">
                            <StaticImage className="logofooter"
                                src="../images/logo5.png"
                            /></Link>
                    </li>
                </ol>
            </nav>
            <nav className="redes">
                <ol>
                    <li className="item">
                        <Link to="/#">
                            <StaticImage className="redesimg"
                                src="../images/inst.png"
                            /></Link>
                    </li>
                    <li className="item">
                        <Link to="/#">
                            <StaticImage className="redesimg"
                                src="../images/tiktok.png"
                            /></Link>
                    </li>
                    <li className="item">
                        <Link to="/#">
                            <StaticImage className="redesimg"
                                src="../images/twitter.png"
                            /></Link>
                    </li>
                    <li className="item">
                        <Link to="/#">
                            <StaticImage className="redesimg"
                                src="../images/youtube.png"
                            /></Link>
                    </li>
                </ol>
            </nav>
        </div>
        </div> */}
        </>
    )
}
export default Footer