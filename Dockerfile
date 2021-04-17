FROM node:14-alpine

COPY . .

RUN npm install

RUN npm build

CMD ["npm", "start"]