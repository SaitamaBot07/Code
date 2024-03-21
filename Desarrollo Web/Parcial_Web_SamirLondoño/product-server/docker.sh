docker pull node:latest
docker build -t products-app:1.0.0 .
docker container run -p 1802:1802 -d products-app:1.0.0
docker ps -a