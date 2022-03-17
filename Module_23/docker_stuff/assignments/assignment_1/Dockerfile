FROM node:slim

LABEL  "Maintainer"="JonMalloy"

WORKDIR /app

COPY index.js /app/index.js

COPY package.json /app/package.json

RUN npm install

EXPOSE 3001

ENTRYPOINT node index.js
