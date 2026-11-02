import React, { useRef, useEffect, useState } from 'react'

const BAR_HEIGHT = 40;
const MARKER_HEIGHT = 8;
const CANVAS_HEIGHT = BAR_HEIGHT + MARKER_HEIGHT + 8;

/**
 * Responsive colorbar preview with markers at user-defined control points
 */
export function PreviewColorbar({ colorOutRgb, colormap }) {
    const canvasRef = useRef(null)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        const canvas = canvasRef.current
        const observer = new ResizeObserver(([entry]) => {
            setWidth(entry.contentRect.width)
        })
        observer.observe(canvas)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!width) return
        const canvas = canvasRef.current
        const dpr = window.devicePixelRatio || 1
        canvas.width = Math.round(width * dpr)
        canvas.height = Math.round(CANVAS_HEIGHT * dpr)
        const ctx = canvas.getContext('2d')
        ctx.scale(dpr, dpr)
        drawColorbar(ctx, width, colorOutRgb, colormap)
    }, [width, colorOutRgb, colormap])

    return (
        <div className="preview">
            <canvas ref={canvasRef} role="img" aria-label="colormap preview" />
        </div>
    )
}

// Draw colorbar visualization
function drawColorbar(ctx, width, colorArray, colormap) {
    ctx.clearRect(0, 0, width, CANVAS_HEIGHT);

    const blockWidth = width / colorArray.length;
    colorArray.forEach((rgb, i) => {
        ctx.fillStyle = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
        // Overlap by 1px to avoid hairline gaps between blocks
        ctx.fillRect(i * blockWidth, 0, blockWidth + 1, BAR_HEIGHT);
    });

    ctx.strokeStyle = 'rgba(0,0,0,0.25)';
    ctx.strokeRect(0.5, 0.5, width - 1, BAR_HEIGHT - 1);

    // Markers for control points that have an explicit color
    if (!colormap || colormap.length < 2) return;
    ctx.fillStyle = '#52525b';
    colormap.forEach((rgb, i) => {
        if (rgb === '') return;
        const x = Math.min(Math.max(i / (colormap.length - 1) * width, MARKER_HEIGHT / 2), width - MARKER_HEIGHT / 2);
        ctx.beginPath();
        ctx.moveTo(x, BAR_HEIGHT + 2);
        ctx.lineTo(x - MARKER_HEIGHT / 2, BAR_HEIGHT + 2 + MARKER_HEIGHT);
        ctx.lineTo(x + MARKER_HEIGHT / 2, BAR_HEIGHT + 2 + MARKER_HEIGHT);
        ctx.closePath();
        ctx.fill();
    });
}
