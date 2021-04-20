FROM node:14-alpine

WORKDIR /app

COPY yarn.lock package.json ./
RUN yarn

COPY . .
RUN yarn build

CMD ["yarn", "start:prod"]
