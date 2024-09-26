import * as React from "react"
import Layout from "../componentes/layout/layout"
import './infoInstitucional.css';
import { StaticImage } from "gatsby-plugin-image"
import Figure from 'react-bootstrap/Figure';



const InfoRetratosOficiales = () => {
  
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
             <a href="/infoministerio" role='button' className="aInst">Ministerio</a> <br/><br/><br/>

          </div>

          <div className="Iinstitucional">
            <div className="cardRetrato">
              <Figure className="figure">
                  {/* <img src="https://picsum.photos/id/287/250/300" alt="Mountains"/> */}
                  <StaticImage className="imgrey"
                    style={{width: `300px`,height: `600px`, textAlign: `center`}}
                    src="..\images\rey1.jpg"
                    alt="Mountains"
                  />
                  <Figure.Caption className="figcaption">S.M EL REY</Figure.Caption>
              </Figure>
            </div>

            <div className="cardRetrato">

              <Figure className="figure">
                  {/* <img src="https://picsum.photos/id/287/250/300" alt="Mountains"/> */}
                  <StaticImage className="imgrey"
                    style={{width: `300px`,height: `600px`, textAlign: `center`}}
                    src="..\images\rey2.jpg"
                    alt="Mountains"
                  />
                  <Figure.Caption className="figcaption">S.M EL REY con indumentaria de gala</Figure.Caption>
              </Figure>
            </div>
            <div className="cardRetrato">

              <Figure className="figure">
                  {/* <img src="https://picsum.photos/id/287/250/300" alt="Mountains"/> */}
                  <StaticImage className="imgrey"
                    style={{width: `300px`,height: `600px`, textAlign: `center`}}
                    src="..\images\rey3.jpg"
                    alt="Mountains"
                  />
                  <Figure.Caption className="figcaption">S.M EL REY con uniforme de capitán general ejercito de tierra</Figure.Caption>
              </Figure>
            </div>
          
            <div className="cardRetrato">

              <Figure className="figure">
                  {/* <img src="https://picsum.photos/id/287/250/300" alt="Mountains"/> */}
                  <StaticImage className="imgrey"
                    style={{width: `300px`,height: `600px`, textAlign: `center`}}
                    src="..\images\rey4.jpg"
                    alt="Mountains"
                  />
                  <Figure.Caption className="figcaption">S.M EL REY con uniforme de capitán general de la armada</Figure.Caption>
              </Figure>
            </div>
            <div className="cardRetrato">

              <Figure className="figure">
                  {/* <img src="https://picsum.photos/id/287/250/300" alt="Mountains"/> */}
                  <StaticImage className="imgrey"
                    style={{width: `300px`,height: `600px`, textAlign: `center`}}
                    src="..\images\rey5.jpg"
                    alt="Mountains"
                  />
                  <Figure.Caption className="figcaption">S.M EL REY con uniforme de capitán general ejercito del aire</Figure.Caption>
              </Figure>
            </div>
           </div>   
              {/* <figure style="--c:#fff5">
                  <img src="https://picsum.photos/id/475/250/300" alt="Mountains"/>
                  <figcaption>The Night</figcaption>
              </figure> */}
          
            {/* <h1 style={{textAlign: `center`}}>Retratos oficiales</h1>  
            <p>
               <div className="imgInst">
                <StaticImage 
                  style={{width: `300px`,height: `600px`, textAlign: `center`}}
                  src="..\images\rey.jpg"
                />
              </div>
            </p>
            */}
          
        </div>
        
        
  
         
  
      </Layout>
      
    )
  }
  
  export default InfoRetratosOficiales