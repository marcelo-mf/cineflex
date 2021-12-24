import "./style.css"

export default function Footer({titulo, imagem, name, weekday, tracin}) {

    return(
        <div className="footer">
            <div className="footer-container">
                <img src={imagem} alt={titulo}/>
                <div className="texto-footer">
                    <p>{titulo}</p>
                    <p className="p-hora">{name} {tracin} {weekday}</p>
                </div>
            </div>
        </div>
    )
}