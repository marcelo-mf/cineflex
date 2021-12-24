import Dates from "./Dates";
import Footer from "../Footer/Footer";

import "./style.css"

import axios from "axios";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";

export default function Showtimes() {

    const [horarios, setHorarios] = useState(null);
    const {idFilme} = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`);
        promise.then(resposta => setHorarios(resposta.data))
    }, []); 

    if(horarios === null) {
        return <h1>Carregando...</h1>
    }

    console.log(horarios);

    return(
        <div className="lista-horarios">
            <h2>Selecione o horário</h2>
            <div className="days-list">
                {
                    horarios.days.map(d => <Dates key={d.id} {...d}/>)
                }
            </div>
            <Footer titulo={horarios.title} imagem={horarios.posterURL}/>
        </div>
    )

    
}