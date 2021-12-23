import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./style.css"

export default function Seats() {

    const [sessao, setSessao] = useState(null);
    const {idSessao} = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`);
        promise.then(resposta => setSessao(resposta.data))
    }, []); 

    if(sessao === null) {
        return <h1>Carregando...</h1>
    }

    return(
        <div className="sessao">
            <h2>Selecione o assento</h2>
            <div className="selecionar-assento">
                {
                    sessao.seats.map(seat => <div key={seat.id} className="assento">{seat.name}</div>)
                }
            </div>
        </div>
    )
}