# Archangel-Server
# Setup wlan Server
Run:

sudo raspi-config

-change password

-change hostname

-Input Wifi settings

-Time Zone

-Enable SSH!!


sudo apt-get install nodejs openvpn git npm -y

git clone https://github.com/Eviper01/Archangel-Server.git

cd Archangel-Server

npm install express

#Setup Bluetooth Listening
sudo apt-get install bluetooth bluez python-bluez -y
