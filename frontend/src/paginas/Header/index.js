import React, {useState, useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import Cont from '../../services/context';

import './styles.css';
import api from '../../services/api';

export default function Header () {
    
    let contxt = useContext(Cont);
    function Logout() {
        contxt.setToken('');
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">MediCare</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <form className="form-inline my-2 my-lg-0 mr-2">
                    <div className="input-group">
                        <label className="sr-only" for="Busca">Digite sua busca</label>
                        <input className="form-control" type="search" placeholder="Digite sua busca" aria-label="Search" id="Busca" />
                        <Link to="/categorias/remedios/busca"><button className="btn btn-primary" type="submit">Buscar</button></Link>
                    </div>
                </form>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        {contxt.token === '' ? (null) : (<Link className="nav-link" to="/conta">Gerenciar Conta</Link>)}
                    </li>
                    <li className="nav-item">
                        {contxt.token === '' ? (<Link className="nav-link" to="/login">Entre na sua conta</Link>) : (<a className="nav-link" onClick={Logout} style={{cursor:'pointer'}}>Saia da sua conta</a>)}
                    </li>
                </ul>
            </div>
        </nav>
    )
}