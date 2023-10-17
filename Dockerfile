FROM node:16.14-alpine

WORKDIR /usr/server

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "start" ]