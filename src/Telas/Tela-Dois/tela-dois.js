import React from "react";
import Botoes from "./botoes";
import "./style.css"
export default function TelaDois (){
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
    return(
        <>
        <header>
            <img src="assets/logo-pequeno.png" alt="Logo pequeno" />
            <h1>ZapRecall</h1>
        </header>
        <main>
            {perguntas.map((item, index)=> <Cartas key={index} index={index + 1} topico={item.topico} pergunta={item.pergunta} resposta={item.resposta}/>)}
        </main>
        <footer>
            <p>0/3 CONCLUÍDOS</p>
        </footer>
        </>
    )
}

function Cartas (props){
    const {topico, pergunta, resposta, index} = props;
    const [flashTexto, setFlashTexto] = React.useState(`Pergunta ${index}`);
    const [flashClasse, setFlashClasse] = React.useState(`topico`);
    const [flashBotao, setFlashBotao] = React.useState(`play`)
    const [flashBotaoClasse, setFlashBotaoClasse] = React.useState(`inicial`)
    const [flashResposta, setFlashResposta] = React.useState(``)
    function flashClick (){
        if(flashBotao === `play`){
            setFlashTexto(pergunta);
            setFlashClasse(`questao`);
            setFlashBotao(`viraCarta`);
        }
        if(flashBotao === `viraCarta`){
            setFlashTexto(resposta);
            setFlashBotao(`opcoes`)
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
