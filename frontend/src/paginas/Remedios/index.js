import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

export default function Produtos() {

    const [produto, setProduto] = useState({});
    useEffect(() => {
        api.get(this.props.location).then((response) => {
            setProduto(response.data)
        });
    }, []);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/categorias">Categorias</Link></li>
                            <li className="breadcrumb-item"><Link to="/categorias/remedios">Remédios</Link></li>
                            <li className="breadcrumb-item"><Link to="/categorias/remedios/tarja">Tarjas</Link></li>
                            <li className="breadcrumb-item"><Link to={`/categorias/remedios/tarja/${produto.tarja}`}></Link></li>
                            <li className="breadcrumb-item active">{produto.nomeProduto}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    )
}