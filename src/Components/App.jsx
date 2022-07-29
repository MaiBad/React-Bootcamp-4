import React, { useState } from 'react'

const App = () => {

    const [Color, setColor] = useState('#000000')
    const [ManejarInterval, setManejarInterval] = useState(0);

    const obtenerNumero = () => Math.floor(Math.random() * 256)

    function obtenerRGB(r, g, b) {
        return (
            '#' +
            [r, g, b]
                .map(color => {
                    let nHex = color.toString(16)
                    return nHex.lenght === 1
                        ? '0' + nHex
                        : nHex;
                })
                .join('')
        )
    }

    const obtenerColor = () => {
        const rgb = {
            r: obtenerNumero(),
            g: obtenerNumero(),
            b: obtenerNumero(),
        }
        setColor(obtenerRGB(rgb.r, rgb.g, rgb.b))
    }

    return (
        <div>
            <div className='cuadrado' style={{
                height: '255px',
                width: '255px', backgroundColor: Color
            }}
                onMouseOver={
                    () => setManejarInterval(
                        setInterval(obtenerColor, 400)
                    )
                }
                onMouseLeave={
                    () => clearInterval(ManejarInterval)
                }
                onDoubleClick={
                    () => clearInterval(ManejarInterval)
                }>
            </div>
        </div>
    );
}

export default App