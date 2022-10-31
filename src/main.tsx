import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChainId, Weiweb3Provider } from "@weiweb3/react";
import "./styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Weiweb3Provider desiredChainId={activeChainId}>
      <App />
    </Weiweb3Provider>
  </React.StrictMode>
);
