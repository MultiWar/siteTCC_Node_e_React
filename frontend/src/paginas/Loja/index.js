import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import chunk from 'lodash.chunk';


import './styles.css';
import api from '../../services/api';
import Imagem from '../../assets/dipirona.jpg';

export default function Loja() {

    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        api.get('/').then((responsaMANO) => {
            setProdutos(responsaMANO.data)
        });
    }, []);
       
    return (
        <div className="container-fluid">
            {chunk(produtos, 4).map((pedasso) =>
                <div className="card-group py-4">
                    {
                        pedasso.map((produto) =>
                            
                            <div className="card mx-2 text-center pt-2 justify-content-center" key={produto.nomeProduto}>
                                <h5 className="card-title">{produto.nomeProduto}</h5>
                                <small className="text-muted">{produto.categoria[0].toUpperCase() + produto.categoria.slice(1)}</small>
                                <img className="card-img-top img-fluid mx-auto" src={Imagem} style={{maxWidth: '300px'}} alt={produto.nomeProduto}/>
                                <div className="card-body">
                                    <p className="card-text">{produto.descricao}</p>
                                </div>
                                <div className="card-footer">
                                    <p className="card-text">Preço unitário: R$ {produto.precoUnitario}</p>
                                </div>
                                <div className="card-footer">
                                    {produto.categoria === 'remédio' ? 
                                        <Link className="btn btn-primary w-100" to={`/categorias/remedio/tarja/${produto.tarja}/${produto.nomeProduto}`} >Detalhes do produto</Link> : 
                                        <Link className="btn btn-primary w-100" to={`/categorias/${produto.categoria}/${produto.nomeProduto}`} >Detalhes do produto</Link>
                                    }
                                </div>
                            </div>
                        )
                    }
            </div>
            )}
        </div>
    )
}