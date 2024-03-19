
mkdir -p src docs build test config
mkdir -p src/controller src/model src/express

touch src/products.ts
touch src/controller/ControllerProducts.ts
touch src/model/ModelProducts.ts
touch src/express/ExpressServer.ts

touch ./config/.development.env
touch ./config/.production.env
touch .gitignore

echo "/node_modules" >> .gitignore
echo "PORT=3000" >> ./config/.development.env
echo "HOST=localhost" >> ./config/.development.env
#No se debe quemar en codigo lo que agregar el puerto o el host pues debe ser exrerno

npm init -y 
npm install express 
npm install typescript ts-standard ts-node-dev ts-node @types/node @types/express -D
npx tsc --init


