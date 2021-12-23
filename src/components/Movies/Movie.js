import "./stylemovie.css"

import { Link } from "react-router-dom";

export default function Movie(props) {
    return(
        <Link to="/showtimes" className="movie">
            <img src={props.movie.posterURL}/>
        </Link>
    );
}