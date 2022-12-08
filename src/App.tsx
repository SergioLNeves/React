import React from 'react';
import './App.css';
import Home from './paginas/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from '@mui/icons-material';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import ListaTema from './components/temas/listaTema/ListaTema';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import { Provider } from 'react-redux';
import store from './store/store';


function App() {
    return (
        <Provider store={store}>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastrousuario" element={<CadastroUsuario />} />
                <Route path="/home" element={<Home />} />
                <Route path="/temas" element={<ListaTema />} />
                <Route path="/posts" element={<ListaPostagem />} />

                <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
                <Route path="/formularioPostagem" element={<CadastroPost />} />
                <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

                <Route path="/deletarTema/:id" element={<DeletarTema />} />
                <Route path="/formularioTema" element={<CadastroTema />} />
                <Route path="/formularioTema/:id" element={<CadastroTema />} />
            </Routes>
            <Footer />
        </Router>
        </Provider>
    );
}

export default App;
