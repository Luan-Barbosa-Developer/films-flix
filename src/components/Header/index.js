import { Link } from "react-router-dom"
import './index.css';

export default function Header(params) {

 



    return(
        <header>
            <Link className="logo" to="/">Films Flix</Link>
            <Link className="favoritos" to="/favoritos">Favoritos</Link>


        </header>
    )
}