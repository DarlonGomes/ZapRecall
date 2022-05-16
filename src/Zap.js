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
    return(
            <TelaAtual mudaPagina ={mudaPagina} setMudaPagina = {setMudaPagina} comecaJogo = {comecaJogo} />
    )
}