export default function Botoes ({flashBotao, flashResposta, flashClick}){
    if(flashBotao === `play`){
        return (
        <>
        <ion-icon onClick={flashClick}  name="play-outline"></ion-icon>
        </>
        )   
    }
    if(flashBotao === `played`){
        return (
        <>
        <ion-icon name="play-outline"></ion-icon>
        </>
        )   
    }
    if(flashBotao === `viraCarta`){
        return(
            <>
            <div className="secao-pergunta">
            <img onClick={flashClick} src="./assets/setinha.png" />
            </div>
            </>
        )
    }
    if(flashBotao === `opcoes`){
        return(
            <>
            <div className="secao-botoes">
            <button onClick={() => flashClick("errado")} className="backErrado"><p>Não lembrei</p> </button>
            <button onClick={() => flashClick("quase")} className="backQuase"><p> Quase não lembrei</p> </button>
            <button onClick={() => flashClick("certo")} className="backZap"><p>Zap!</p> </button>
            </div>
            </>
        )
    }
}