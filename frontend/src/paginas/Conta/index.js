import React, {useState, useContext, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import throttle from 'lodash.throttle';
import Cont from '../../services/context';

import './styles.css';
import api from '../../services/api';

export default function Conta() {
    const [informacoes, setInformacoes] = useState({});
    let contxt = useContext(Cont);

    useEffect(() => {
            api.get('/conta')
                .then((coisas) => {
            setInformacoes(coisas.data)
        })
    }, [api.defaults.headers.common['Authorization']]);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center mt-3">
                <div className="col-md-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active">Conta</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-3">
                    <div className="card mt-2">
                        <div className="card-header text-center pt-3 pb-1">
                            <h5 className="card-title">Informações da conta</h5>
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Nome:</strong> {informacoes.nome}</li>
                                <li className="list-group-item"><strong>CPF:</strong> {informacoes.cpf}</li>
                                <li className="list-group-item"><strong>Telefone:</strong> {informacoes.fone}</li>
                                <li className="list-group-item"><strong>Endereço:</strong> {informacoes.endereco}</li>
                            </ul>
                        </div>
                        <div className="card-footer justify-content-center">
                            <Link className="w-100 btn btn-primary" to='/conta/editar'>Editar conta</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}