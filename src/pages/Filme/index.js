import { useParams, useNavigate } from "react-router-dom"
import api from "../../services/api";
import { useState, useEffect } from "react";
import './filme.css';
import Language from "../../components/Language";

import { toast } from "react-toastify";


export default function Filmes(params) {

    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    const [language, setLanguage] = useState(() => {
        const savedLanguage = localStorage.getItem('@currentLanguage');
        return savedLanguage ? JSON.stringify(savedLanguage) : 'pt-BR';
    });

    const navigate = useNavigate()

    useEffect(() => {

        async function loadApi(params) {
            await api.get(`movie/${id}`,{
                params:{
                    api_key: 'dfff41e5a597e2e1ab764d01aab04ee4',
                    language: language,
                }
            })
            .then((response) => {
                setMovie(response.data);
                setLoading(false);
            })
            .catch(()=>{
                navigate('/', {replace: true});
                return;
            })


        }

       loadApi();
    },[id, navigate, language]);


      useEffect(() => {
        localStorage.setItem('@currentLanguage', language)
      }, [ language]);


    function saveMovie() {
        const minhaLista = localStorage.getItem('@filmsFlix');

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === movie.id);

        if(hasFilme){
            toast.warn("Esse filme já está salvo");
            return;
        }

        filmesSalvos.push(movie);
        localStorage.setItem('@filmsFlix', JSON.stringify(filmesSalvos));
        toast.success('Filme salvo com sucesso')
    }

    if (loading) {
        return(
            <div className="loading">
                <h2> Carregando filmes...</h2>
            </div>
        )
    }

    return(
        <div className="container">


            <div className="film-info">
            <Language language={language} data={(value) => setLanguage(value)}/>
                <h1>{movie.title}</h1>
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>
                <h3>Sinopse</h3>
                <span>{movie.overview}</span>
                <br/>
                <strong>{movie.vote_average} / 10</strong>
                <div className="area-btn">
                    <button onClick={saveMovie}>Salvar</button>
                    <button><a target="blank" rel="external" href={`https://youtube.com/results?search_query=${movie.title} trailer`}>Trailer</a></button>
                </div>
            </div>
        </div>
    )
}