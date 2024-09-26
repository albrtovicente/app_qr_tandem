import * as React from "react"

const ImgParrafo =({imagen, titulo, text})=>{
    
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
export default ImgParrafo