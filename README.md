# Apresentação do projeto
  TCC do grupo A de informática (entrega em 2020). Este não é o TCC completo, mas é a parte dele que eu fiz. É uma aplicação web com o 
backend feito em Node e o frontend feito em React. Apesar de termos um banco de dados em SQLServer pro projeto, eu estou utilizando o knex com o sqlite3, pois achei mais simples quando comecei. Eventualmente, vou passar ele pro SQLServer, para que essa aplicação interaja com o resto do trabalho.

Coisas legais utilizadas para a construção do projeto: Node, Express, Axios, Knex, CORS, JWT, React, Lodash.

## Conceito do projeto e funcionalidades
  Nosso projeto de TCC é o de uma farmácia, que tem como principal objetivo a facilitação da vida de pessoas idosas. Este objetivo é refletido no site através da opção de selecionar tamanhos de fontes diferentes e de deixar as coisas maiores no geral, além de designs simples e sem muitas coisas implícitas.
  O site é a parte da loja da farmácia, principalmente. Nele, é possível visualizar os produtos e comprá-los.

## Agradeicmentos
  Só foi possível realizar tudo o que foi realizado por causa da ajuda do grande [@savioacp](https://github.com/savioacp), que me auxiliou bastante durante o desenvolvimento do projeto, me ajudando a resolver problemas e me ensinando alguns conceitos.

# Rodando o projeto no seu PC
## Requisitos:
  Para rodar o projeto, é necessário ter o NodeJS instalado, preferencialmente na última versão estável. Para instalá-lo, basta acessar o site oficial do Node (https://nodejs.org/en/download/) e seguir os passos de instalação de acordo com o seu sistema.

## Instalando dependências
  Para instalar as dependências do projeto, basta abrir o diretório do backend no PowerShell ou algum outro terminal de sua escolha e rodar o comando ```npm install```. Aguarde e ele instalará tudo do backend. Faça o mesmo no frontend.

## Iniciando o server e populando o banco de dados
  Ainda no diretório do backend, rode os comandos ```npx knex migrate:latest``` e ```npx knex seed:run```. Depois, rode ```npm run dev``` para iniciar o servidor. Mantenha este terminal aberto.

## Iniciando a aplicação React
  Ainda com o terminal do backend aberto e rodando, abra outro terminal, vá até o diretório do frontend e rode o comando ```npm start```. Aguarde o site abrir no seu navegador e pronto!

# Contribuindo para o projeto
## Pull Requests
  Para este projeto, prefiro que não sejam feitos pull requests, pois este é meu TCC e eu preciso ter feito ele inteiro.

## Issues
  Issues, por outro lado, são muito bem-vindos. Ficarei feliz em receber feedback por meio de issues para resolver problemas que eu possa ter deixado passar batido.

# Obrigado por ter lido até aqui!
