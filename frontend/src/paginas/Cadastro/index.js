import React, {useState, useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FaRegEyeSlash, FaRegEye} from 'react-icons/fa';

import './styles.css';
import api from '../../services/api';
import Cont from '../../services/context';

export default function Cadastro() {

    const [visibilidadeSenha, setVisibilidadeSenha] = useState('password');
    const [displayAlert, setDisplayAlert] = useState('none');
    const [mensagemDeErro, setMensagemDeErro] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    let contxt = useContext(Cont);
    const history = useHistory();

    const data = {
        cpfD: cpf,
        nomeD: nome,
        senhaD: senha,
        foneD: telefone,
        enderecoD: endereco
    }

    async function handleSignIn(e) {
        e.preventDefault();

        try {
            const resultado = await api.post('/cadastro', data);
            contxt.setToken(resultado.data);
            localStorage.setItem('token', resultado.data);
            history.push('/');
        }
        catch(err) {
            setDisplayAlert('block');
            alert(err);
        }
    }

    return (
        <div className="container-fluid pt-3">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>Cadastre-se</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md"></div>
                <div className="col-md">
                    <form onSubmit={handleSignIn}>
                        <div className="form-row">
                            <div className="col-md-12 form-group">
                                <label htmlFor="nome">Nome completo</label>
                                <input type="text" className="form-control" id="nome" placeholder="Digite aqui seu nome completo"
                                    onChange={e => setNome(e.target.value)}
                                />  
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md form-group">
                                <label htmlFor="cpf">CPF</label>
                                <input type="text" className="form-control" id="cpf" placeholder="Digite aqui seu CPF" 
                                    onChange={e => setCpf(e.target.value)}
                                />
                            </div>
                            <div className="col-md form-group">
                                <label htmlFor="senha">Senha (mínimo de 6 caracteres)</label>
                                <input type={visibilidadeSenha} className="form-control" id="senha" placeholder="Digite aqui sua senha" 
                                    onChange={e => setSenha(e.target.value)}
                                />
                                <div className="input-group-append">
                                    <label htmlFor="mostrarSenha" className="sr-only">Mostrar ou esconder senha</label>
                                    {visibilidadeSenha === 'password' ? 
                                    (<a className="btn btn-outline-primary w-100" onClick={() => setVisibilidadeSenha('text')} id="mostrarSenha"><FaRegEyeSlash /></a>) : 
                                    (<a className="btn btn-outline-primary w-100" onClick={() => setVisibilidadeSenha('password')} id="mostrarSenha"><FaRegEye /></a>)}
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-3 form-group">
                                <label htmlFor="telefone">Telefone</label>
                                <input type="text" className="form-control" id="telefone" placeholder="Digite aqui seu telefone" 
                                    onChange={e => setTelefone(e.target.value)}
                                />
                            </div>
                            <div className="col-md-9 form-group">
                                <label htmlFor="endereco">Endereço completo</label>
                                <input type="text" className="form-control" id="endereco" placeholder="Digite aqui seu endereço" 
                                    onChange={e => setEndereco(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="alert alert-danger" style={{display:`${displayAlert}`}}></div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-12">
                                <button className="btn btn-primary w-100" type="submit">Cadastrar</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md"></div>
            </div>
        </div>
    )
}