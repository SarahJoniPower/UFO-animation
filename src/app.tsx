import React, { useEffect, useState } from "react";
import { UFO } from "./ufo";

export const App = () => {
    const [position, setPosition] = useState({
        x: 50,
        y: 50,
        size: 5,
    });

    useEffect(() => {
        let requestId = undefined;

        const tick = () => {
            setPosition({
                x: position.x + 0.001,
                y: position.y + 0.001,
                size: position.size,
            });

            requestId = requestAnimationFrame(tick);
        };

        tick();

        return () => {
            cancelAnimationFrame(requestId);
        };
    });

    return <UFO {...position} />;
};
