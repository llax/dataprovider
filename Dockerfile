FROM node:12.13-alpine

WORKDIR app/

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=${DBPORT}

RUN npm run start