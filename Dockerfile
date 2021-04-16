FROM node:lastest-alpine

WORKDIR app/

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=${DBPORT}

RUN npm run start