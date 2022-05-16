import TelaUm from "./Telas/Tela-Um/tela-um";
import TelaDois from "./Telas/Tela-Dois/tela-dois";
export default function TelaAtual ({mudaPagina, comecaJogo, restart}){
    if(mudaPagina === true){
        return (
            <TelaDois restart={restart}/>
        )
    }
    return(
        <TelaUm comecaJogo={comecaJogo}/>
    )
}