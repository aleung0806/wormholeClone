FROM node:18

WORKDIR /usr/src/app
RUN mkdir client
RUN mkdir server
COPY ./client/package*.json ./client/
COPY ./server/package*.json ./server/

WORKDIR /usr/src/app/client
RUN npm install
RUN npm run build
COPY ./build ../server/build

WORKDIR /usr/src/app/server
RUN npm install

WORKDIR /usr/src/app
COPY . . 
EXPOSE 3000

WORKDIR /usr/src/app/server
CMD npm run start:prod