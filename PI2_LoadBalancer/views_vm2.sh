#! /bin/bash
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo usermod -aG docker $USER
sudo apt-get update
mkdir /home/docker_files
cd /home/docker_files
wget --no-check-certificate 'https://docs.google.com/uc?export=download&id=1_F_7RCno1Uj9_5PYvxyhUHe-e5aP2b8-' -O docker-compose.yml
sudo docker compose -f /home/docker_files/docker-compose.yml up -d
sudo touch /home/docker_files/script.sh
echo "#! /bin/bash" | sudo tee /home/docker_files/script.sh > /dev/null
echo "sudo docker pull davopaco/views:latest" | sudo tee -a /home/docker_files/script.sh > /dev/null
echo "sudo docker pull davopaco/nginx_images:latest" | sudo tee -a /home/docker_files/script.sh > /dev/null
echo "sudo docker compose -f /home/docker_files/docker-compose.yml down" | sudo tee -a /home/docker_files/script.sh > /dev/null
echo "sudo docker compose -f /home/docker_files/docker-compose.yml up -d" | sudo tee -a /home/docker_files/script.sh > /dev/null
sudo chmod +x /home/docker_files/script.sh
sudo crontab -l; echo "* 3 * * * /bin/bash /home/docker_files/script.sh" | crontab -
sudo docker compose -f /home/docker_files/docker-compose.yml up -d
