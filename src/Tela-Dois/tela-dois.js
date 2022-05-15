import "./style.css"
import Cartas from "./topicos"
export default function TelaDois (){
    return(
        <>
        <header>
            <img src="assets/logo-pequeno.png" alt="Logo pequeno" />
            <h1>ZapRecall</h1>
        </header>
        <main>
            <Cartas />
        </main>
        <footer>
            <p>0/3 CONCLUÍDOS</p>
        </footer>
        </>
    )
}