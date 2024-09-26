import * as React from "react"
import Layout from "../componentes/layout/layout"
import CardTandem from "../componentes/cardTandem/cardTandem"
import './infoInstitucional.css';
import { StaticImage } from "gatsby-plugin-image"
import PopoverComp from "../componentes/popovers/popovercomp";



const Administracion = () => {
  
    return (
      <Layout>
        <div className="flexintitucional">
          
          <div className="indiceInstitucional">
          
          <br/>
             <a href="/infoInstitucional" role='button' className="aInst">Bienvenida de la presidenta</a> <br/><br/>
             <a href="/infohistoria" role='button' className="aInst">Nuestra historia</a> <br/><br/>
             <a href="/infooficiales" role='button' className="aInst">Actos oficiales e institucionales</a> <br/><br/>
             <a href="/infocasaRey" role='button' className="aInst">Casa de S.M. el rey</a> <br/><br/>
             <a href="/inforetratosOficiales" role='button' className="aInst">Retratos oficiales</a> <br/><br/>
             <a href="/infoministerio" role='button' className="aInst">Ministerio de la presidencia</a> <br/><br/><br/>

          </div>

          <div className="Iinstitucional">
          <div className="containerAdm">
            <div className="imgInst">
                <StaticImage 
                  // style={{width: `1300px`,height: `200px`, textAlign: `center`}}
                  style={{marginTop:`30px`}}
                  src="../images/fondo.jpg"
                />
            </div>
          <div class="container">
            <div class="card">
              <div class="box">
                <div class="content">
                    <StaticImage 
                      src="../images/presidenta.jpeg"
                      style={{width: `150px`,height: `150px`, textAlign: `center`, padding:`1em`}}

                    />
                  <h4 style={{color:`#e2bb8f`}}>ANA DE LA CUEVA FERNÁNDEZ </h4>
                  <h5 style={{color:`#e6e0e0`}}>PRESIDENTA DE PATRIMONIO NACIONAL</h5>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p> */}
                  <PopoverComp
                    text="Es licenciada en Ciencias Económicas y Empresariales por la Universidad Autónoma de Madrid en la especialidad de Economía Cuantitativa."
                  />
                  {/* <a href="https://www.patrimonionacional.es/sobre-patrimonio/consejo-de-administracion">Read More</a> */}
                </div>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <div class="content">
                    <StaticImage 
                      src="../images/gerente.jpg"
                      style={{width: `150px`,height: `150px`, textAlign: `center`, padding:`1em`}}

                    />
                  <h4 style={{color:`#e2bb8f`}}>MARÍA DOLORES MENÉNDEZ </h4>
                  <h5 style={{color:`#e6e0e0`}}>GERENTE DE PATRIMONIO NACIONAL</h5>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p> */}
                  <PopoverComp
                    text="Es Licenciada en Ciencias Económicas y Empresariales, rama de Economía de la Empresa, por la Universidad Complutense de Madrid."
                  />                
              </div>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <div class="content">
                    <StaticImage 
                      src="../images/consejera.jpg"
                      style={{width: `150px`,height: `150px`, textAlign: `center`, padding:`1em`}}

                    />
                  <h4 style={{color:`#e2bb8f`}}>ANA MARÍA ARIAS DE COSSÍO</h4>
                  <h5 style={{color:`#e6e0e0`}}>CONSEJERA</h5>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p> */}
                  <PopoverComp
                    text="Doctora en Historia del Arte y catedrática emérita de la Universidad Complutense de Madrid."
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="card">
              <div class="box">
                <div class="content">
                    <StaticImage 
                      src="../images/consejero.jpg"
                      style={{width: `150px`,height: `150px`, textAlign: `center`, padding:`1em`}}

                    />
                  <h4 style={{color:`#e2bb8f`}}>FRANCISCO BELIL CREIXELL </h4>
                  <h5 style={{color:`#e6e0e0`}}>CONSEJERO</h5>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p> */}
                  <PopoverComp
                    text="Ingeniero Superior en la Universidad Politécnica de Cataluña."
                  />                
                </div>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <div class="content">
                    <StaticImage 
                      src="../images/consejera2.jpg"
                      style={{width: `150px`,height: `150px`, textAlign: `center`, padding:`1em`}}

                    />
                  <h4 style={{color:`#e2bb8f`}}>Mª ÁNGELES HERMOSILLA</h4>
                  <h5 style={{color:`#e6e0e0`}}>CONSEJERA</h5>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p> */}
                  <PopoverComp
                    text="Catedrática de Teoría de la Literatura y Literatura Comparada en la Universidad de Córdoba."
                  />
                </div>
              </div>
            </div>
            
            <div class="card">
              <div class="box">
                <div class="content">
                    <StaticImage 
                      src="../images/consejero2.jpg"
                      style={{width: `150px`,height: `150px`, textAlign: `center`, padding:`1em`}}

                    />
                  <h4 style={{color:`#e2bb8f`}}>ALBERTO HERRERA RODRÍGUEZ</h4>
                  <h5 style={{color:`#e6e0e0`}}>CONSEJERO</h5>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p> */}
                  <PopoverComp
                    text="Subsecretario del Ministerio de Presidencia, Justicia y Relaciones con las Cortes ."
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="card">
              <div class="box">
                <div class="content">
                    <StaticImage 
                      src="../images/consejero3.jpg"
                      style={{width: `150px`,height: `150px`, textAlign: `center`, padding:`1em`}}

                    />
                  <h4 style={{color:`#e2bb8f`}}>GREGORIO MARAÑÓN</h4>
                  <h5 style={{color:`#e6e0e0`}}>CONSEJERO</h5>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p> */}
                  <PopoverComp
                    text="Presidente del Teatro Real y de la Fundación Ortega-Marañón."
                  />
                </div>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <div class="content">
                    <StaticImage 
                      src="../images/consejera4.jpg"
                      style={{width: `150px`,height: `150px`, textAlign: `center`, padding:`1em`}}

                    />
                  <h4 style={{color:`#e2bb8f`}}>JUDIT GONZÁLEZ PEDRAZ</h4>
                  <h5 style={{color:`#e6e0e0`}}>CONSEJERA</h5>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p> */}
                  <PopoverComp
                    text="Secretaria general de la Presidencia del Gobierno."
                  />
                </div>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <div class="content">
                    <StaticImage 
                      src="../images/consejero4.jpg"
                      style={{width: `150px`,height: `150px`, textAlign: `center`, padding:`1em`}}

                    />
                  <h4 style={{color:`#e2bb8f`}}>JOSÉ LUIS MARTÍNEZ-ALMEIDA</h4>
                  <h5 style={{color:`#e6e0e0`}}>CONSEJERO</h5>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p> */}
                  <PopoverComp
                    text="Alcalde de Madrid."
                  />
                </div>
              </div>
            </div>
          </div>
            
          
            
            
            
            
            </div>
          </div>
        </div>
        
        
  
         
  
      </Layout>
      
    )
  }
  
  export default Administracion