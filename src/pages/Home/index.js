import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './home.css';
import Language from "../../components/Language";

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('@currentLanguage');
    return savedLanguage ? JSON.parse(savedLanguage) : 'pt-BR';

  });
  
  const [page, setPage] = useState(() => {
    const savedPage = localStorage.getItem('@currentPage');
    return savedPage ? parseInt(savedPage) : 1;
  });

  useEffect(() => {
    async function loadApi() {
      setLoading(true);

      const response = await api.get('movie/now_playing', {
        params: {
          api_key: 'dfff41e5a597e2e1ab764d01aab04ee4',
          language: 'pt-BR',
          page: page,
        }
      });

      setFilmes(response.data.results);
      setLoading(false);
    }

    loadApi();
  }, [language, page]); 

  useEffect(() => {
    localStorage.setItem('@currentPage', page);
    localStorage.setItem('@currentLanguage', JSON.stringify(language))
  }, [page, language]);

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="lista-filmes">

        <Language language={language} data={(value) => setLanguage(value)}/>

        {filmes.map((filme) => (
          <article key={filme.id}>
            <strong>{filme.title}</strong>
            <Link to={`/filme/${filme.id}`}>
              <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            </Link>
            <Link className="link" to={`/filme/${filme.id}`}>Acessar</Link>
          </article>
        ))}

        <div className="pagination">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            ⬅️ Página Anterior
          </button>

          <span>Página {page}</span>

          <button
            onClick={() => setPage(page + 1)}
          >
            Próxima Página ➡️
          </button>
        </div>

      </div>
    </div>
  );
}
