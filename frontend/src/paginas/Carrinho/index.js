import React, {useState, useEffect} from 'react';

import './styles.css';
import api from '../../services/api';
import {  FaTimes } from 'react-icons/fa';

export default function Carrinho() {

    const [itensCarrinho, setItensCarrinho] = useState([]);
    const [quantidade, setQuantidade] = useState([]);
    const [itemCarrinhoDeletar, setItemCarrinhoDeletar] = useState('');

    //Carregar informações iniciais
    useEffect(() => {
        api.get('/carrinho').then(itens => {
            setItensCarrinho(itens.data);
        })
    }, [itensCarrinho]);

    //Alterar quantidade de algum item
    useEffect(() => {
        api.put('/carrinho', quantidade).then(e => {
            console.log(e);
        });
    }, [quantidade]);

    useEffect(() => {
        api.delete('/carrinho', itemCarrinhoDeletar).then(e => {
            console.log(e);
        })
    }, [itemCarrinhoDeletar])

    function handleAlterarQuantidade(idProduto, quantidadeItem) {
        function NaoDuplicarItens(idProduto2) {
            return quantidade.filter(e => {
                return e.idProduto !== idProduto2;
            })
        }
        const quantidadeAtualizada = NaoDuplicarItens(idProduto);

        setQuantidade([...quantidadeAtualizada, {idProduto, quantidade: Number(quantidadeItem)}]);        
    }

    function handleDeletarProduto(idProdutoClicado) {
        setItemCarrinhoDeletar(idProdutoClicado);
        function atualizarItens(idProdutoClicadoMesmo) {
            return itensCarrinho.filter(e => {
                return e.idProduto !== idProdutoClicadoMesmo;
            })
        }
        const itensAtualizados = atualizarItens(idProdutoClicado);
        setItensCarrinho(itensAtualizados);
    }

    return (
        <div className="container-fluid">
            {itensCarrinho.map(item => (
                <div className="row itensCarrinho" key={item.idProduto}>
                    <div className="col-2"></div>
                    <div className="col-8">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-3">
                                        <img alt={item.nomeProduto} className="img-fluid"/>
                                    </div>
                                    <div className="col-5">
                                        <strong>{item.nomeProduto}</strong>
                                        <small>{item.categoria}</small>
                                    </div>
                                    <div className="col-3">
                                        <div className="row">
                                            <div className="col">
                                                <p>quantidade:</p>
                                            </div>
                                            <div className="col">
                                                <select type="number" name="quantidade" onChange={e => handleAlterarQuantidade(item.idProduto, e.target.value)}>
                                                    <option value={item.quantidade}>{item.quantidade}</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <button className="btn btn-outline-danger" onClick={e => handleDeletarProduto(item.idProduto)}><FaTimes size={30}/></button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2"></div>
                </div>
            ))}
        </div>
    )
}