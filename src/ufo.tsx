import React, { useEffect, useRef, useState } from "react";

const draw = (
    ctx: CanvasRenderingContext2D,
    { x, y, size }: UFOProps,
): void => {
    ctx.beginPath();
    ctx.clearRect(0, 0, 450, 800);
    ctx.ellipse(x, y, size, size, 0, 0, Math.PI * 2);
    ctx.stroke();
};

interface PureCanvasProps {
    contextRef: (context: CanvasRenderingContext2D | null) => void;
}

class PureCanvas extends React.Component<PureCanvasProps, {}> {
    public shouldComponentUpdate() {
        return false;
    }

    public render() {
        const { contextRef } = this.props;

        return (
            <canvas
                id={new Date().valueOf().toString()}
                width="400"
                height="850"
                ref={(canvas) => {
                    return canvas ? contextRef(canvas.getContext("2d")) : null;
                }}
            />
        );
    }
}

export interface UFOProps {
    x: number;
    y: number;
    size: number;
}

export class UFO extends React.Component<UFOProps> {
    private ctx: CanvasRenderingContext2D | null;

    saveContext(ctx: CanvasRenderingContext2D | null): void {
        this.ctx = ctx;
    }

    componentDidUpdate() {
        draw(this.ctx, this.props);
    }

    render() {
        return <PureCanvas contextRef={this.saveContext.bind(this)} />;
    }
}
