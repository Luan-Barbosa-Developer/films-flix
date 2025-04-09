import './App.css';
import RoutesAPP from './routes';
import {ToastContainer} from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000}/>
      <RoutesAPP/>
    </div>
  );
}

export default App;
