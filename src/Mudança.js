import TelaUm from "./Telas/Tela-Um/tela-um";
import TelaDois from "./Telas/Tela-Dois/tela-dois";
export default function TelaAtual ({mudaPagina, setMudaPagina, comecaJogo}){
    if(mudaPagina === true){
        return (
            <TelaDois setMudaPagina={setMudaPagina}/>
        )
    }
    return(
        <TelaUm comecaJogo={comecaJogo}/>
    )
}