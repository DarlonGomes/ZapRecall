import React from "react";
import Botoes from "./botoes";
import "./style.css"
export default function TelaDois ({restart}){
    function comparador() { 
        return Math.random() - 0.5; 
    }
    
    const perguntas = [
        {topico: "Pergunta",
         pergunta: "Q: O que é JSX?",
         resposta: "R: Uma extensão da linguagem do JavaScript"
        },
        {topico: "Pergunta",
        pergunta: "Q: O React é ___",
        resposta: "R: uma biblioteca para construção de interfaces"
    },
        {topico: "Pergunta",
         pergunta: "Q: Componentes devem iniciar com __ ",
         resposta: "R: letra maiúscula"
        },
        {topico: "Pergunta",
         pergunta: "4. Q: Podemos colocar __ dentro do JSX ",
         resposta: "R: expressões"
        },
        {topico: "Pergunta",
         pergunta: "Q: O ReactDOM nos ajuda __ ",
         resposta: "R: interagindo com a DOM para colocar componentes React na mesma"
        },
        {topico: "Pergunta",
         pergunta: "Q: Usamos o npm para __",
         resposta: "R: gerenciar os pacotes necessários e suas dependências"
        },
        {topico: "Pergunta",
         pergunta: "Q: Usamos props para __ ",
         resposta: "R: passar diferentes informações para componentes "
        },
        {topico: "Pergunta",
         pergunta: "Q: Usamos estado (state) para __ ",
         resposta: "R: dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        },
    ]
    perguntas.sort(comparador);
    const [resultado,setResultado] = React.useState([]);
    const [erro, setErro] = React.useState(0);

    return(
        <>
        <header>
            <img src="assets/logo-pequeno.png" alt="Logo pequeno" />
            <h1>ZapRecall</h1>
        </header>
        <main>
            {perguntas.map((item, index)=> <Cartas key={index} index={index + 1}  pergunta={item.pergunta} resposta={item.resposta} 
            resultado={resultado} setResultado={setResultado} erro={erro} setErro={setErro}/>)}
            <div className="espaçador"></div>
        </main>
        <footer>
            <Resultado resultado={resultado} perguntas={perguntas} erro={erro} restart={restart}/>
        </footer>
        </>
    )
}

function Cartas (props){
    const {pergunta, resposta, index, resultado, setResultado, erro, setErro} = props;
    const [flashTexto, setFlashTexto] = React.useState(`Pergunta ${index}`);
    const [flashClasse, setFlashClasse] = React.useState(`topico`);
    const [flashBotao, setFlashBotao] = React.useState(`play`);
    const [flashResposta, setFlashResposta] = React.useState(``);
    

    function flashClick (indicador){
        if(flashBotao === `play`){
            setFlashTexto(pergunta);
            setFlashClasse(`questao`);
            setFlashBotao(`viraCarta`);
        }
        if(flashBotao === `viraCarta`){
            setFlashClasse(`questao costas resposta`);
            setFlashTexto(resposta);
            setFlashBotao(`opcoes`);
        }
        if(flashBotao === `opcoes` && indicador === `errado`){
            setFlashTexto(`Pergunta ${index}`);
            setFlashClasse(`topico respondido errado`);
            setFlashResposta (`errado`);
            setFlashBotao(`played`);
            const icone = [...resultado, {item: <ion-icon name="close-circle"></ion-icon>}]
            setResultado(icone);
            setErro(erro + 1);
        }
        if(flashBotao === `opcoes` && indicador === `quase`){
            setFlashTexto(`Pergunta ${index}`);
            setFlashClasse(`topico respondido quase`);
            setFlashResposta (`quase`);
            setFlashBotao(`played`);
            const icone = [...resultado, {item: <ion-icon name="help-circle"></ion-icon>}];
            setResultado(icone);
        }
        if(flashBotao === `opcoes` && indicador === `certo`){
            setFlashTexto(`Pergunta ${index}`);
            setFlashClasse(`topico respondido certo`);
            setFlashResposta (`certo`);
            setFlashBotao(`played`);
            const icone =[...resultado, {item: <ion-icon name="checkmark-circle"></ion-icon>}];
            setResultado(icone);
        }
    }
    return (
    <>
    <div className={flashClasse} id={index}>
         <h4 className={flashResposta}>{flashTexto}</h4>
        <Botoes flashBotao={flashBotao} flashResposta={flashResposta} flashClick={flashClick}/>
    </div>
    </>
    )
}   

function Resultado (props) {
    const {resultado, perguntas, erro, restart} = props;
    
    if(resultado.length !== 0 && resultado.length < 8){
        return(
        <>
        <p>{resultado.length}/{perguntas.length} CONCLUÍDOS</p>
        <div className="icones">{resultado.map(icone=> icone.item)}</div>
        </>

        )
    }

    if(resultado.length === 8 && erro !== 0){
        return (
            <>
            <h4><img src="./assets/sad.png" alt="Carinha triste"/>Puts...</h4>
            <p> Ainda faltam alguns... <br />
                Mas não desanime!</p>
                <p>{resultado.length}/{perguntas.length} CONCLUÍDOS</p>
            <div className="icones">{resultado.map(icone=> icone.item)}</div>
            <button onClick={restart} className="restart"><p>REINICIAR QUIZZ</p></button>
            </>
        )
    }

    if(resultado.length === 8   ){
        return (
            <>
            <h4><img src="./assets/party.png" alt="Festa"/>Parabéns!</h4>
            <p> Você não esqueceu de <br/>
                nenhum flashcard!</p>
                <p>{resultado.length}/{perguntas.length} CONCLUÍDOS</p>
            <div className="icones">{resultado.map(icone=> icone.item)}</div>
            <button onClick={restart} className="restart"><p>REINICIAR QUIZZ</p></button>
            </>
        )
    }
    return(
        <>
        <p>{resultado.length}/{perguntas.length} CONCLUÍDOS</p>
        </>
    )
}

