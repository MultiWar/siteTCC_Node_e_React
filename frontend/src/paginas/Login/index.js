import React, {useState, useContext} from 'react';
import {FiEyeOff, FiEye} from "react-icons/fi";
import {BsFillEyeFill, BsFillEyeSlashFill} from 'react-icons/bs';
import {FaRegEyeSlash, FaRegEye} from 'react-icons/fa';
import {Link, useHistory} from 'react-router-dom';
import Cont from '../../services/context';

import './styles.css';
import api from '../../services/api';
import imgConta from '../../assets/user-512.png';

export default function Login() {

    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [displayAlert, setDisplayAlert] = useState('none');
    const [visibilidadeSenha, setVisibilidadeSenha] = useState('password');
    let contxt = useContext(Cont);
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await api.post('login', {cpfD: cpf, senhaD: senha});
            contxt.setToken(response.data);
            localStorage.setItem('token', response.data);
            history.push('/');
        }
        catch(err) {
            setDisplayAlert('block');
        }
    }

    let estado = 'password';

    return (
        <div className="container-fluid pt-2">
            <div className="row justify-content-center">
                <div className="col-lg-2 justify-content-center">
                    <img src={imgConta} className="img-fluid mx-auto d-block"/>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-3 justify-content-center">
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="cpf">Digite seu CPF</label>
                            <input className="form-legal form-control" type="text" placeholder="CPF" id="cpf" required
                                onChange={e => setCpf(e.target.value)}
                            />
                        </div> 
                        <div className="form-group">
                            <div className="input-group">
                                <label className="sr-only" htmlFor="senha">Digite sua senha</label>
                                <input className="form-legal form-control" type={visibilidadeSenha} placeholder="Senha"id="senha" required 
                                    onChange= {e => setSenha(e.target.value)}
                                    style={{outline: 'none'}}
                                />
                                <div className="input-group-append">
                                    <label htmlFor="mostrarSenha" className="sr-only">Mostrar/Esconder senha</label>
                                    {visibilidadeSenha === 'password' ? 
                                    (<a className="btn btn-outline-primary btn-showHide" onClick={() => setVisibilidadeSenha('text')} id="mostrarSenha"><FaRegEyeSlash className="iconeShowHide" /></a>) : 
                                    (<a className="btn btn-outline-primary btn-showHide" onClick={() => setVisibilidadeSenha('password')} id="mostrarSenha"><FaRegEye className="iconeShowHide" /></a>)}
                                </div>
                            </div>
                        </div>
                        <div className="alert alert-danger" style={{display: `${displayAlert}`}}>Falha no login</div>
                        <button className="btn btn-primary form-control" type="submit">Entrar</button>               
                    </form>
                </div>
            </div>
        </div>
    )
}