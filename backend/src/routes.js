const express = require('express');
const connection = require('./database/connection');

const authMiddleware = require('./middlewares/auth');

const lojaController = require('./controllers/lojaController');
const contaController = require('./controllers/contaController');
const produtosController = require('./controllers/produtosController');
const usuarioController = require('./controllers/usuariosController');
const carrinhoController = require('./controllers/carrinhoController');

const routes = express.Router();


routes.post('/login', usuarioController.entrar); //colocado no React, FUNCIONA.

routes.use(authMiddleware);

routes.get('/', lojaController.index); //colocado no React, QUASE PRONTO

routes.get('/categorias/remedios/busca', lojaController.busca); //colocado no, só falta fazer tudo
routes.get('/categorias/:categoria', produtosController.index); //colocado no, só falta fazer tudo
routes.get('/categorias', produtosController.index); //colocado no, só falta fazer tudo
routes.get('/categorias/remedios/tarja/:tarja', produtosController.tarjas); //colocado no, só falta fazer tudo
routes.get('/categorias/remedios/tarja/:tarja/:nome', produtosController.remedio); //colocado no, só falta fazer tudo
routes.get('/categorias/remedios/tarja', produtosController.tarjas); //colocado no, só falta fazer tudo
routes.get('/categorias/remedios/principioativo/:princAtiv', produtosController.principio); //colocado no, só falta fazer tudo
routes.get('/categorias/remedios/principioativo', produtosController.principio); //colocado no, só falta fazer tudo

routes.get('/logout', usuarioController.sair); //colocado no React, FUNCIONA
routes.get('/conta', contaController.index); //colocado no React, FUNCIONA
routes.post('/cadastro', usuarioController.cadastro); //FUNCIONA
routes.put('/conta/editar', contaController.editAccountConfig); //colocado no React, FUNCIONA

routes.get('/carrinho', carrinhoController.index); //Teoricamente funciona aqui, ainda não foi colocado no React.
routes.post('/carrinho', carrinhoController.adicionar); //Teoricamente funciona aqui, ainda não foi colocado no React.
routes.put('/carrinho', carrinhoController.alterar); //Teoricamente funciona aqui, ainda não foi colocado no React.
routes.delete('/carrinho', carrinhoController.deletar); //Teoricamente funciona aqui, ainda não foi colocado no React.

routes.get('/teste', usuarioController.teste); //colocado no, só falta fazer tudo


//Falta adicionar:
//
//coisas legais de compra ae, tipo sistemas de pagamento
//
//Diferenciar remédios que precisam de receita dos que não precisam
//
//Remédios e coisas populares que pessoas geralmente têm em casa
//
//Teoricamente, posso ir pro React depois de fazer essas coisas que estão listadas, mas pode ser que eu adicione mais coisas conforme os dias passam.
module.exports = routes;