FROM node:lts-alpine3.13

WORKDIR /app

COPY package*.json yarn.lock ./
RUN npm install

COPY . .

npm run start
