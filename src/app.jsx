import React, { useState } from "react";

import { UFO } from "./ufo";
import { Physics } from "./physics";

export const App = () => {
    const physics = Physics.startingAt(50, 0);

    return (
      <div onClick={() => physics.thrust(0, -0.5)}>
        <UFO physics={physics} />
      </div>
    );
}

