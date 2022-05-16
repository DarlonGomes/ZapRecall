export default function Botoes ({flashBotao, flashResposta, flashClick}){
    if(flashBotao === `play`){
        return (
        <>
        <ion-icon onClick={flashClick}  name="play-outline"></ion-icon>
        </>
        )   
    }
    if(flashBotao === `viraCarta`){
        return(
            <>
            <div class="secao-pergunta">
            <img onClick={flashClick} src="./assets/setinha.png" />
            </div>
            </>
        )
    }
    if(flashBotao === `opcoes`){
        return(
            <>
            <div class="secao-botoes">
            <button className="backErrado"><p>Não lembrei</p> </button>
            <button className="backQuase"><p> Quase não lembrei</p> </button>
            <button className="backZap"><p>Zap!</p> </button>
            </div>
            </>
        )
    }
}