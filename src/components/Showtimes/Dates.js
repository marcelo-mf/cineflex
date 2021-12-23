import Hora from "./Hora"

export default function Dates({weekday, date, showtimes}) {

    return(
        <>
            <div className="data-hora">{weekday} - {date}</div>
            <div className="horarios">{
                showtimes.map(h => (<Hora key={h.id} hora={h.name} id={h.id}/>))
                }
            </div>
        </>
    )
}