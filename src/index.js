import React from "react";
import { createRoot } from "react-dom/client";
import HeroesApp from "./HeroesApp";

const root = document.getElementById("root");
const reactRoot = createRoot(root);
reactRoot.render(<HeroesApp />);
