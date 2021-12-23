import { Link } from "react-router-dom"

export default function Hora({hora, id}) {

    return(
        <Link to={`/seats/${id}`} className="hora" style={{textDecoration: 'none'}}>
            {hora}
        </Link>  
    );
}