import { Link } from "react-router-dom";
import './erro.css'

export default function Error(){
    return(
        <div className="container">
            <div className="not-found">
                <h1>404</h1>
                <h2>Ops, essa página não foi encontrada :(</h2>
                <Link to=''>Acessar página principal</Link>
            </div>
        </div>
    )
}