FROM node:18

#make directories and copy package.json
WORKDIR /usr/src/app
RUN mkdir client
COPY ./client/package*.json ./client/
RUN mkdir server
COPY ./server/package*.json ./server/

#install client dependencies
WORKDIR /usr/src/app/client
RUN npm install

#install server dependencies
WORKDIR /usr/src/app/server
RUN npm install

#copy server files
WORKDIR /usr/src/app
COPY ./server/ ./server/

#copy client files and build client
WORKDIR /usr/src/app
COPY ./client/ ./client/
WORKDIR /usr/src/app/client
RUN npm run build
RUN cp -r ./build ../server

WORKDIR /usr/src/app
RUN rm -r client

#start server
WORKDIR /usr/src/app/server
# EXPOSE 8080 commented out for dokku deploy
CMD npm run start:prod