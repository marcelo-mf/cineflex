import "./stylemovie.css"

import { Link } from "react-router-dom";

export default function Movie(props) {
    return(
        <Link to={`/showtimes/${props.movie.id}`} className="movie">
            <img src={props.movie.posterURL} alt={props.movie.title}/>
        </Link>
    );
}