import ReactDom from "react-dom";
import React from "react";
import TelaUm from "./Tela-Um/tela-um";
import TelaDois from "./Tela-Dois/tela-dois";

function App(){
    return(
        <>
            <TelaDois />
        </>
    )
}


const app = App();
ReactDom.render (app, document.querySelector(".root"));