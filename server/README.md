Docker commands: 

sudo -i to use terminal as root

IMAGES:
docker build . -t <app name> *names the image
docker images 
docker run -p <machine port>:<app port> -d <app name>
*run is a combination of docker create and docker start

CONTAINER:
docker container ls or docker ps
docker start <container id> 
docker start -i <container id> *interactive mode
docker kill <container id>
docker logs <container id>
docker exec -it <container id> /bin/bash

*stop all containers
docker stop $(docker ps -a -q)


exit container: ctrl+d


sudo groupadd docker
sudo usermod -aG docker $USER
*let regular user run docker

DOCKER COMPOSE:
docker compose up --build
docker compose up -d

