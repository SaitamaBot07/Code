# Prerequisitos
sudo apt-get update
sudo apt-get install nginx certbot python3-certbot-nginx -y
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
NODE_MAJOR=20
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
sudo apt-get update
sudo apt-get install nodejs -y
# Configuracion de firewall
sudo ufw allow 'Nginx Full'
# Configuracion de nginx
sudo touch /etc/nginx/sites-available/thenexusbattles2.cloud
sudo bash -c "echo 'server {
    listen 80;
    listen [::]:80;
    server_name thenexusbattles2.cloud www.thenexusbattles2.cloud;

    #location / {
    #    proxy_pass http://localhost:4200/;
    #}
}' > /etc/nginx/sites-available/thenexusbattles2.cloud"

sudo ln -s /etc/nginx/sites-available/thenexusbattles2.cloud /etc/nginx/sites-enabled/
sudo sed -i 's/# server_names_hash_bucket_size 64;/server_names_hash_bucket_size 64;/' /etc/nginx/nginx.conf
sudo systemctl restart nginx
# Clonar repos
git clone https://github.com/JaimeAndresQ/Prueba-PI
# Desplegar servicios
cd ~/Prueba-PI
npm install
npm start & > /dev/null
# Certificado SSL para el dominio configurado en nginx automatizado
sudo certbot --nginx -d thenexusbattles2.cloud -d www.thenexusbattles2.cloud --agree-tos --email sucorreo@correo.com --non-interactive --redirect