# Board API Snack
* A snack Project for testing out working with node js

## Available endpoints
* Base Url: **127.0.0.1:3000**

|method |endpoint |Description |Data|
|-------|---------|------------|----|
|GET |/ | root |# |
|GET |/boards | view all boards |# | 
|POST |/boards | Create a new board |JSON with name & decription keys |
|GET |/boards/boardID |View Details of Board with ID equal to boardID |# |
|PUT |/boards/boardID |Updates details of Board with ID equal to boardID |JSON with name & decription keys |
|DELETE |/boards/boardID |Delete Board with ID equal to boardID  |# |

## Made with:
* ### [Nodejs](https://nodejs.org/en/)
* ### [Express](https://expressjs.com/)
* ### [Docker](https://docs.docker.com/)
* ### [MongoDB](https://docs.mongodb.com/)

## Prerequisites
* Rest Client ie. [Postman](https://www.postman.com/)
* [Nodejs](#nodejs) or [Docker]()

## Project setup
* Clone Project from Github
```sh
git clone https://github.com/Xerrex/board-api-snack.git
```
* Change into Directory
```sh
cd board-api-snack
```

* Install Dependancies
```sh
npm install
```

* Create a '.env' file
```sh
touch .env
```
* Add the following lines to the '.env' file
```
DB_USER=root
DB_PASS=example
DB_HOST=127.0.0.1
DB_PORT=27017
DB_NAME="board_node_api_snack"
```
## Usage
* Start MongoDB
```sh
docker-compose up -d
```
* Run Project
```sh
npm run start
```
* Open postman to interact with [endpoints](#available-endpoints).
    

