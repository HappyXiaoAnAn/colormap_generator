import React, { useRef, useEffect } from 'react'

export function PreviewColorbar(props) {
    const colorbar = {
        position: 'sticky',
        top: 0,
        zIndex: 100
    }

    const canvasRef = useRef(null)
    
    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        Draw(ctx, props.color_out_rgb)
    })

    return <canvas ref={canvasRef} height="100" width="500" style={colorbar}/>
}


// 畫colorbar
function Draw(ctx, color_out) {
    ctx.clearRect(0,0,500,100);
    ctx.beginPath();
    ctx.rect(50, 30, 400, 40);
    ctx.stroke();
    
    for (let i = 0; i < color_out.length; i++) {
        const color_str = 'rgb('+color_out[i][0]+','+color_out[i][1]+','+color_out[i][2]+')';
        const px = 50+i*400/color_out.length;
        DrawRect(ctx, color_str,px, 30, 400/color_out.length, 40);
    }
}
// 畫colorbar色塊
function DrawRect(ctx, color, x, y, width, height) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}
