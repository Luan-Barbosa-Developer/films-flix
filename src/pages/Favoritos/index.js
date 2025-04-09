import './favoritos.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';



export default function Favoritos() {

  const MySwal = withReactContent(Swal);
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem('@filmsFlix');
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);


  const handleDelete = (id) => {
    MySwal.fire({
      title: 'Tem certeza?',
      text: 'Essa ação é irreversível.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        excluirFavorito(id);
      }
    });
  };


  function excluirFavorito(id) {
  
    const novaLista = filmes.filter((filme) => filme.id !== id);

    localStorage.setItem('@filmsFlix', JSON.stringify(novaLista));
    setFilmes(novaLista);

    toast.success("Filme excluído com sucesso");
  }
  

  return (
    <div className='favoritos-page'>
      <div className='grid-container'>
        {filmes.map((filme) => (
          <div className='grid' key={filme.id}>
            <Link className='link-title' to={`/filme/${filme.id}`}>
              <span>{filme.title}</span>
            </Link>
            <Link to={`/filme/${filme.id}`}>
              <img
                className='img-fav'
                src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
                alt={filme.title || 'Filme'}
              />
            </Link>
            <div className='div-btn'>
              <button onClick={() => handleDelete(filme.id)}>Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
