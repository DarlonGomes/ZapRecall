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
            <img src="./assets/setinha.png" />
            </>
        )
    }
}