import * as React from "react"
import Layout from "../componentes/layout/layout"
import './infoInstitucional.css';
import { StaticImage } from "gatsby-plugin-image";
import ImgParrafo from "../componentes/seccion/imgParrafo";

const InfoInstitucional = () => {
  
    return (
      <Layout>
        {/* <ImgParrafo 
          
          imagen={
            <StaticImage 
                  src="../images/presidenta.jpeg"
                  style={{width: `500px`,height: `500px`, textAlign: `center`, padding:`1em`}}

                />
          } 
          titulo={"Hola"} 
          text={"asdasd"} 
                
        >
        </ImgParrafo>  */}
        <div className="flexintitucional">
          
          <div className="indiceInstitucional">
          
          <br/>
             <a href="/infohistoria" role='button' className="aInst">Conoce nuestra historia</a> <br/><br/>
             <a href="/infoadministrador" role='button' className="aInst">Consejo de administrador</a> <br/><br/>
             <a href="/infooficiales" role='button' className="aInst">Actos oficiales e institucionales</a> <br/><br/>
             <a href="/infocasaRey" role='button' className="aInst">Casa de S.M. el rey</a> <br/><br/>
             <a href="/inforetratosOficiales" role='button' className="aInst">Retratos oficiales</a> <br/><br/>
             <a href="/infoministerio" role='button' className="aInst">Ministerio de la presidencia</a> <br/><br/><br/>

          </div>

          <div className="Iinstitucional">
            <h1 style={{textAlign: `center`}}>Bienvenidos a Patrimonio Nacional</h1>  
              <div className="flexImg">
               <div className="imgInst">
                <StaticImage 
                  src="../images/presidenta.jpeg"
                  style={{width: `500px`,height: `500px`, textAlign: `center`, padding:`1em`}}

                />
              </div>
              <div className="pImg">
                <p>
                Somos una institución histórico-cultural única en el mundo. Cuidamos de más de 1.000 inmuebles, 170.000 piezas artísticas y 18.000 hectáreas de espacios verdes de gran riqueza medioambiental. Y lo hacemos con una doble misión: preservar y dar a conocer este valiosísimo legado y facilitar a la jefatura del Estado la labor representativa que le otorga nuestra Constitución.
                </p>
              
            <p>
              Esta web es una ventana a todo este conjunto de bienes y a las actividades culturales, educativas y científicas que organizamos para su difusión. Una ventana a los 19 palacios reales, reales monasterios y casas de campo en seis comunidades autónomas diferentes. A los parques naturales como el Monte de El Pardo o el Bosque de Riofrío. A los 6.500 cuadros firmados, entre otros, por El Greco, Caravaggio o Velázquez. A la programación de nuestros conciertos. A nuestros talleres. A nuestras publicaciones. 

            </p>
            </div>
            
            </div>
            <div className="flexintitucional2">
              
              <div className="pInst">
              <p>
                Dar a conocer Patrimonio Nacional es dar a conocer nuestra historia. Y preservar sus bienes de forma sostenible, consciente y rigurosa es asegurar que las futuras generaciones podrán disfrutar de ellos igual que lo hacemos ahora. Somos conscientes de la importancia de nuestra tarea. Por eso queremos abrir nuestras puertas a toda la ciudadanía y ser un punto de encuentro que sirva de elemento de cohesión en nuestra sociedad. 
              </p>
              </div>
            </div>
            <p  style={{marginRight:`auto`}}>
              Ana de la Cueva<br></br>
              Presidenta de Patrimonio Nacional
            </p>
          </div>
        </div>
        
        
  
         
  
      </Layout>
      
    )
  }
  
  export default InfoInstitucional