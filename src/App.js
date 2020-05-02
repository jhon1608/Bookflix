import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CreateNovedad from './components/CreateNovedad';
import EditNovedad from './components/EditNovedad';
import IniciarSesion from './components/IniciarSesion';

function App() {
  return (
    <div className="body" >
    <IniciarSesion></IniciarSesion>
    <CreateNovedad></CreateNovedad>
    <EditNovedad></EditNovedad>    
    </div>
  );
}

export default App;
