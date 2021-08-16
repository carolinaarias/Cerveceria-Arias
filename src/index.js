//Tener la var de React en scope
import React from "react";
//Tener la var ReactDom en scope
import  ReactDOM  from "react-dom";

import "./estilos/style.css"
//Tener un elemento React(Componente)
import App from "./App.js"

//Tener una funcion render corriendo
ReactDOM.render(<App/>,document.getElementById('root'))