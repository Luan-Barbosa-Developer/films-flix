import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Filmes from "./pages/Filme";
import Error from "./pages/Error";
import Favoritos from "./pages/Favoritos";

import Header from "./components/Header";
import Footer from './components/Footer'

export default function RoutesAPP(params) {
    return(

            <BrowserRouter>

            <Header/>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/filme/:id" element={<Filmes/>}/>
                    <Route path="/favoritos" element={<Favoritos/>}/>

                    <Route path="*" element={<Error/>}/>
                </Routes>

            <Footer/>

            </BrowserRouter>

    )
}