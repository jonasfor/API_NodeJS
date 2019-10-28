# API_Rentbrella
Está disponível nesse repositório uma API desenvolvida em Node.js e banco de dados MongoDB que exerce as funções de cadastro e consulta dos locais e stações da RentBrella 


## Instalação
* Para que o a API funcione é necessario a instalação do **Node.js** na versão 10.0 ou superior e
  para efetuar o download do node para qualquer sistema operacional [Clique aqui](https://nodejs.org/en/download/)

* É necessario também **Clonar** ou realizar o **Download ZIP** desse repositório.


## Executando o programa
* Para a API iniciar é necessário executar o comando ```npm start``` no diretório raiz da aplicação.


## Testando o programa
* Para realizar os testes automatizados utilize uma ferramenta como o Postman ou Insomnia.

### POST
as requisições devem obedecer o seguinte formato:

```/v1/premises```

```js
{
  "name": "name of local",
  "address": "address of local"
}
```



```/v1/station```

```js
{
  "serial": "serial of station",
  "premise_id": "id of local",
  "name": "name of station"
}
```
