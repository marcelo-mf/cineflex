import "./style.css"
import { Link } from "react-router-dom"

export default function Header() {
    return(
        <>
            <div className="header">
                <Link to="/" className='logo' style={{textDecoration: 'none'}} >CINEFLEX</Link>
            </div>
        </>
    )
}