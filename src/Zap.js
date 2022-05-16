import React from "react";
import TelaAtual from "./Mudança";
export default function Zap (){
    return(
        <>
        <TelaVisivel/>
        </>
    )
}

function TelaVisivel (){
    const [mudaPagina, setMudaPagina] = React.useState(false);

    function comecaJogo (){
        setMudaPagina(!mudaPagina)
    }
    function restart(){
        setMudaPagina(false);
        console.log("Abacate")
    }
    return(
            <TelaAtual mudaPagina ={mudaPagina}  comecaJogo = {comecaJogo} restart={restart}/>
    )
}