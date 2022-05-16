import "./style.css";   
export default function TelaUm ({comecaJogo}){
    return(
        <>
            <div className="tela-um">
                <img src="assets/logo.png" alt="Logo do ZapRecall - Um raio amarelo com borda vermelha" />
                <h1>ZapRecall</h1>
                <button onClick={comecaJogo}><p>Iniciar Recall!</p></button>
            </div>
        </>
    )
}