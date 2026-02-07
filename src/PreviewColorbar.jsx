import React, { useRef, useEffect } from 'react'

export function PreviewColorbar(props) {
    const colorbarStyle = {
        position: 'sticky',
        top: 0,
        zIndex: 100
    }

    const canvasRef = useRef(null)
    
    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        drawColorbar(ctx, props.colorOutRgb)
    })

    return <canvas ref={canvasRef} height="100" width="500" style={colorbarStyle}/>
}

// Draw colorbar visualization
function drawColorbar(ctx, colorArray) {
    ctx.clearRect(0,0,500,100);
    ctx.beginPath();
    ctx.rect(50, 30, 400, 40);
    ctx.stroke();
    
    for (let i = 0; i < colorArray.length; i++) {
        const colorString = 'rgb('+colorArray[i][0]+','+colorArray[i][1]+','+colorArray[i][2]+')';
        const pixelX = 50+i*400/colorArray.length;
        drawRect(ctx, colorString, pixelX, 30, 400/colorArray.length, 40);
    }
}

// Draw individual color block in colorbar
function drawRect(ctx, color, x, y, width, height) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}
