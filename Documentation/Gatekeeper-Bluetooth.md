#Gatekeeper Bluetooth Listener
#Setup
Run:

sudo apt-get install bluetooth bluez python-bluez -y

edit a whole bunch of system files which I don't even know

sudo pulseaudio --system

background that shit

systemctl restart bluetooth.service

sudo bluetoothctl

power on

scan on

pair Device-Address

pair Device-Address

quit bluetoothctl

sudo python Gatekeeper.py
