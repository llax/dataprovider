FROM node:latest

WORKDIR /app

COPY package*.json yarn.lock ./
RUN yarn

COPY . .
