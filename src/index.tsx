import React    from "react";
import ReactDOM from "react-dom/client";
import App      from "./App";
import 'bootstrap/dist/css/bootstrap.css';

window.addEventListener("DOMContentLoaded",function()
{
  const reactRoot = ReactDOM.createRoot(document.getElementById("react-root") as Element);
  reactRoot.render(<App/>);
});

