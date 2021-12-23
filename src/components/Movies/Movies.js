import "./style.css"

import Movie from "./Movie"
import { useEffect, useState } from "react"
import axios from "axios"
import Showtimes from "../Showtimes/Showtimes";

export default function Movies() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v4/cineflex/movies');
        promise.then( response => setMovies(response.data) );
    }, []);

    return(
        <>
            <div className="select-movie">
                <h2>Selecione o filme</h2>
                <div className="movies">
                    {
                        movies.map( m => (<Movie key={m.id} movie={m}/>))
                    } 
                </div>
            </div>
        </>
    )
}