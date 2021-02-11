# Gym Manager


Sistema para controle de instrutores e membros de uma academia. Projeto realizado durante a NLW da [Rocketseat](https://rocketseat.com.br/) para aprofundamento em MVC, entendimento inicial de tabelas relacionais e paginação.


### Tecnologias


O projeto é bem simples e utiliza apenas:


* [Node.js](https://nodejs.org/en/) - Ambiente de execução Javascript server-side
* [Express](https://expressjs.com/pt-br/) - Framework para aplicações web para Node.js
* [MySQL](https://www.mysql.com/) - Sistema de gerenciamento de banco de dados SQL


### Instalação


Para rodar a aplicação é necessário que você tenha o Node.js e o MySQL instalado em seu ambiente.
No terminal, vá até a pasta onde você costuma deixar os seus projetos e realize os comandos:


```sh
$ git init
$ git clone https://github.com/adejota/gym-manager.git
$ cd gym-manager
```


Para realizar a conexão com o banco de dados vá para src/config/db.js e troque o usuário 'root' e a senha '********' pelas suas credenciais


Para criar as tabelas abra sua ferramenta de administração de banco de dados, como o [MySQL Workbench](https://www.mysql.com/products/workbench/), e execute o script localizado em src/config/db.sql. Copie o código, cole e execute.


Após a conexão do banco e criação das tabelas, volte para o terminal e execute os comandos:


```sh
$ npm install
$ npm start
```


Tudo pronto! Você deve ver uma mensagem como essa no seu terminal


```sh
server is running
```


Para acessar o projeto localmente, abra seu navegador e digite 


```sh
localhost:8081
```


</br>


**Feito por [adejota](http://portfolio-env.eba-tx8m7zxu.sa-east-1.elasticbeanstalk.com/)**
