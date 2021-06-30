# Caixa Eletrônico

## Pré requisitos

- Maven 3+
- Java 8+
- Docker 18.02.0+ 

## Preparando ambiente

- Dentro da pasta backend, execute o `docker-compose up` para inicializar o Zookeeper e Kafka.
- Dentro da pasta backend, execute `mvn clean package` para realizar o build das aplicações.
- Dentro da pasta frontend, execute `npm install` para installar os pacote do node_modules

## Executando 

- Inicialize o projeto `cadastro`
````
cd backend/cadastro
mvn spring-boot:run
````

-  Inicialize o projeto `caixa`
````
cd backend/caixa
mvn spring-boot:run
````

-  Inicialize o projeto `frontend`
````
cd frontend
npm start
````

## Executando 

Acesse o navegador no link abaixo
````
http://localhost:4200
````
