import React    from "react";
import ReactDOM from "react-dom/client";
import App      from "./app";

window.addEventListener("DOMContentLoaded",function()
{
  const reactRoot = ReactDOM.createRoot(document.getElementById("react-root") as Element);
  reactRoot.render(<App/>);
});

