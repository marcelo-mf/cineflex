import "./style.css"
import { useNavigate } from "react-router-dom"

export default function Success({name, hour, movie, day, seats, cpf, setInfoBooking}) {

    const navigate = useNavigate();

    function handleGoHome() {

        setInfoBooking(null)
        navigate('/')
    }

    return(
        <div className="success-page">
            <div className="pedido-sucesso">Pedido feito com sucesso!</div>
            <div className="sucesso">
                <div className="filme-sessao">
                    <h1>Filme e Sessão</h1>
                    <p>{movie}</p>
                    <p>{day} {hour}</p>
                </div>
                <div className="ingressos">
                    <h1>Ingressos</h1>
                    {seats.map(seat => 
                        <p key={seat}>Assento {seat}</p>
                    )}
                </div>
                <div className="comprador">
                    <h1>Comprador</h1>
                    <p>Nome: {name}</p>
                    <p>CPF: {cpf}</p>
                </div>
            </div>
            <button onClick={() =>handleGoHome()}>Voltar pra Home</button>
        </div>
    )
}