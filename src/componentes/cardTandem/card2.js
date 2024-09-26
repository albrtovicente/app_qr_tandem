import React from "react";
import "./cardTandem.css";
import styled from "styled-components";

const Card2 =({Section,imagen,  titulo, text})=>{
    
    return(
        <>
            <div style={{display:`flex`}}>
                <div>
                    {imagen} 
                </div>
                <div>
                    <h1>{titulo}</h1>
                    <p>{text}</p>
                </div>
            </div>
            
        </>
    
    )
}
// export default Card2
// const Section = styled.section`
//   position: relative;
//   min-height: 100vh;
//   display: flex;

//   margin: 0 auto;
// `;

// const Title = styled.h1`
//   font-size: ${(props) => props.theme.fontBig};
//   font-family: "Kaushan Script";
//   font-weight: 300;

//   position: fixed;
//   top: -0.6rem;
//   left: 24%;
//   z-index: 5;

// `;


// const Card = props =>{
//   return (
//     <Section>
//     <Title>
//       About Us
//     </Title>

//    <div className="card text-center">
//      <div className="overflow">
//        <img src={props.imgsrc} alt="Image1" className="card-img-top"></img>
//      </div>
//      <div className="card-body text-dark">
//        <h4 className="card-title">{props.title}</h4>
//        <p className="card-text text-secondary">
//        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia.
//        </p>
//        <a href="#" className="btn btn-outline-success">Go anywhere</a>
//        </div> 
//    </div>
//    </Section>
//   );
// }


    

// export default Card;