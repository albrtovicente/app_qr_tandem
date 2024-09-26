import React, { useState } from 'react';
import "./QRComponent.css"

function Qrcomponent({ onColorChange, onSizeChange }) {
    const [selectedColor, setSelectedColor] = useState('negro');
    const [selectedSize, setSelectedSize] = useState('pequeño');

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
        onColorChange(event.target.value);
    };

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
        onSizeChange(event.target.value);
    };

    return (
        <div className='containercomp'>
            <label className='tituloColor'>Selecciona el color de tu QR</label>
            <div>
                <label>
                    <input
                        type="radio"
                        value="black"
                        checked={selectedColor === 'black'}
                        onChange={handleColorChange}
                    />
                    Negro
                </label>
                <label>
                    <input
                        type="radio"
                        value="blue"
                        checked={selectedColor === 'blue'}
                        onChange={handleColorChange}
                    />
                    Azul
                </label>
                <label>
                    <input
                        type="radio"
                        value="green"
                        checked={selectedColor === 'green'}
                        onChange={handleColorChange}
                    />
                    Verde
                </label>
            </div>
            
            <label className='size'>Selecciona el tamaño de tu QR</label>
            <div>
                <label>
                    <input
                        type="radio"
                        value="100"
                        checked={selectedSize === '100'}
                        onChange={handleSizeChange}
                    />
                    Pequeño
                </label>
                <label>
                    <input
                        type="radio"
                        value="200"
                        checked={selectedSize === '200'}
                        onChange={handleSizeChange}
                    />
                    Mediano
                </label>
                <label>
                    <input
                        type="radio"
                        value="300"
                        checked={selectedSize === '300'}
                        onChange={handleSizeChange}
                    />
                    Grande
                </label>
            </div>
            {/* Custom styling using CSS (optional) */}
            <style jsx="true">
                {`
                    label {
                        display: block;
                        margin-bottom: 5px;
                    }
                    div {
                        margin-bottom: 10px;
                    }
                    input[type="radio"] {
                        margin-right: 5px;
                    }
                `}
            </style>
        </div>
    );
}
export default Qrcomponent;