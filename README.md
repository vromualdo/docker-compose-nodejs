# docker-compose-nodejs
Projeto Exemplo - Docker Compose com Angular, NodeJS e Mongo


#Configuração de 3 Services
    dbvagner,  backend e  frontend

services:
  dbvagner:
    image: mongo:4.4
  backend:
    image: node:10.16.0
    volumes:
      - ./backend:/backend
    ports:
      - 3001:3000
    command: bash -c "cd /backend && npm i && node server"
  frontend:
    image: nginx:1.13
    volumes:
      - ./frontend/dist/frontend:/usr/share/nginx/html/
    ports:
      - 8080:80


#Executar na Raiz do Projeto
docker-compose up