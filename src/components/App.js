import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Header/Header"
import Movies from "./Movies/Movies"
import Seats from "./Seats/Seats"
import Showtimes from "./Showtimes/Showtimes"
import Success from "./Sucesss/Success"


export default function App() {

    const [infoBooking, setInfoBooking] = useState();
    
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/showtimes/:idFilme" element={<Showtimes />} />
                <Route path="/seats/:idSessao" element={<Seats setInfoBooking={setInfoBooking}/>} />
                <Route path="/success" element={<Success {...infoBooking} setInfoBooking={setInfoBooking}/>} />
            </Routes>
        </BrowserRouter>
    );
}