FROM node:18
#Imagen en la que se basa

RUN mkdir -p /home/app 
#Esto es una ruta dentro del mismo contenedor

COPY . /home/app

EXPOSE 3000

CMD ["node", "/home/app/index.js"]