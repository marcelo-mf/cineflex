import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Legend from "./Legend";
import Footer from "../Footer/Footer";

import "./style.css"
import Loading from "../Loading/Loading";

export default function Seats({setInfoBooking}) {

    const [sessao, setSessao] = useState(null);
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seatsNames, setSeatsnames] = useState([]);
    
    const {idSessao} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`);
        promise.then(resposta => setSessao(resposta.data))
    }, [idSessao]); 

    if(sessao === null) {
        return <Loading />
    }

    function handleSelection(seat) {
        if(!seat.isAvailable){
            return;
        } 
        
        if(selectedSeats.includes(seat.id)){
            let x = selectedSeats.indexOf(seat.id);
            selectedSeats.splice(x, 1);
            setSelectedSeats([...selectedSeats]);

            let y = seatsNames.indexOf(seat.name);
            seatsNames.splice(y, 1);
            setSeatsnames([...seatsNames]);
            return;
        };

        setSelectedSeats([...selectedSeats, seat.id])
        setSeatsnames([...seatsNames, seat.name])
    }

    function handleSubmit() {

        const promise = axios.post('https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many', {
            ids: selectedSeats,
            name: name,
            cpf: cpf

        })

        setInfoBooking({
            movie: sessao.movie.title,
            day: sessao.day.date,
            hour: sessao.name,
            seats: seatsNames,
            name: name,
            cpf: cpf
        })

        promise.then(navigate('/success'));

        promise.catch(error => alert(error.response.data.message));
    }

    return(
        <div className="sessao">
            <h2>Selecione o(s) assento(s)</h2>
            <div className="selecionar-assento">
                {
                    sessao.seats.map(seat => <div key={seat.id} 
                        className={`assento ${!seat.isAvailable && 'ocupado'}
                        ${selectedSeats.includes(seat.id) && 'selecionado'}`}
                        onClick={() => handleSelection(seat)}
                        >{seat.name}</div>)
                }
            </div>
            <Legend />
            <Footer imagem={sessao.movie.posterURL} titulo={sessao.movie.title} name={sessao.name} weekday={sessao.day.weekday} tracin="-"/>
            <div className="inputs-comprador">
                <label>Nome do comprador:</label>
                <input type="text" placeholder="Digite seu nome..." onChange={(e) => setName(e.target.value)}/>
                <label>CPF do comprador:</label>
                <input type="text" placeholder="Digite seu CPF..." onChange={(e) => setCpf(e.target.value)}/>
            </div>
            <button onClick={() => handleSubmit()}>Reservar assento(s)</button>
        </div>
    )
}