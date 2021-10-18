import React, {useState} from 'react';
import './estilos.css';
export default function HomePage() {
    const [numeroAleatorio, setNumeroAleatorio] = useState(0);
    function sortear() {
        const numero = Math.floor(Math.random() * 99 + 1);
        setNumeroAleatorio(numero);
    }

    return(
    <div className="mainArea">
        <h1>Gerador de Números Aleatórios</h1>
        <h2>{numeroAleatorio}</h2>
        <div className="buttonArea">
            <label><p>Clique no botão para gerar um número aleatório.</p></label>
            <button onClick={sortear}>
                Gerar número
            </button>
        </div>
    </div>
);
}