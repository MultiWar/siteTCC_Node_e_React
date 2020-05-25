import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Cont from '../../services/context';

import api from '../../services/api';

export default function EditarConta() {

    let contxt = useContext(Cont);
    const [dados, setDados] = useState({});
    const [telefone, setTelefone] = useState(dados.fone);
    const [endereco, setEndereco] = useState(dados.endereco);
    const [mensagem, setMensagem] = useState('');
    const history = useHistory();
    const [dadosAtualizados, setDadosAtualizados] = useState({
        fone: telefone,
        endereco: endereco
    })

    if (!contxt.token) {
        history.push('/');
    }

    useEffect(() => {
        api.get('/conta')
            .then((coisas) => {
                setDados(coisas.data)
            });
    }, [api.defaults.headers.common['Authorization']]);

    useEffect(() => {
        api.put('/conta/editar', {foneD: dados.fone, enderecoD: dados.endereco})
    }, [dados])

    async function salvarAlteracoes() {
        await setDados(dadosAtualizados);
        history.push('/conta');
    }

    function verificarAlteracoes() {
        if(!telefone && !endereco) {
            setDadosAtualizados({
                fone: dados.fone,
                endereco: dados.endereco
            });
            setMensagem('Se você confirmar, nenhuma alteração será feita.');
        }
        else if(!telefone && endereco) {
            setDadosAtualizados({
                fone: dados.fone,
                endereco: endereco
            });
            setMensagem(`Se você confirmar, manterá seu número de telefone e alterará seu endereço de ${dados.endereco} para ${endereco}.
            Estes dados poderão ser alterados novamente no futuro.`)
        }
        else if(!endereco && telefone) {
            setDadosAtualizados({
                fone: telefone,
                endereco: dados.endereco
            });
            setMensagem(`Se você confirmar, manterá seu endereço e alterará seu número de telefone de ${dados.fone} para ${telefone}.
            Estes dados poderão ser alterados novamente no futuro.`)
        }
        else {
            setDadosAtualizados({
                fone: telefone,
                endereco: endereco
            });
            setMensagem(`Se você confirmar, alterará seu número de telefone de ${dados.fone} para ${telefone} e seu endereço de ${dados.endereco} para ${endereco}.
            Estes dados poderão ser alterados novamente no futuro.`)
        }
    }

    return (
        <>
            <div className="modal fade" id="modalConfirmacao" tabindex="-1" role="dialog" aria-labelledby="modalDeConfirmacao" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalDeConfirmacao">Você tem certeza disso?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>{mensagem}</p>
                        </div>
                        <div className="modal-footer">
                            <Link className="btn btn-secondary" type="button" data-dismiss="modal" to="/conta">Cancelar</Link>
                            <button className="btn btn-primary" type="button" onClick={salvarAlteracoes} data-dismiss="modal">Salvar alterações</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid">
                <div className="row justify-content-center mt-3">
                    <div className="col-md-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to='/Conta'>Conta</Link></li>
                                <li className="breadcrumb-item active" aria-currente="page">Editar</li>
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
                                    <li className="list-group-item"><strong>Nome: </strong>{dados.nome}</li>
                                    <li className="list-group-item"><strong>CPF: </strong>{dados.cpf}</li>
                                    <li className="list-group-item"><strong>Telefone: </strong>
                                        <input type="text" className="form-control" placeholder='Altere seu telefone'
                                            onChange={e => setTelefone(e.target.value)}
                                        />
                                    </li>
                                    <li className="list-group-item"><strong>Endereço: </strong>
                                        <input type="text" className="form-control" placeholder='Altere seu endereço'
                                            onChange={e => setEndereco(e.target.value)}
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary w-100" data-toggle="modal" data-target="#modalConfirmacao" onClick={verificarAlteracoes}>Salvar alterações</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}