import bluetooth
import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BOARD)
GPIO.setup(14,GPIO.OUT)
GPIO.setup(15,GPIO.OUT)
server_sock=bluetooth.BluetoothSocket( bluetooth.RFCOMM )
port = 1
server_sock.bind(("",port))
server_sock.listen(1)
client_sock,address = server_sock.accept()
print "Accepted connection from ",address
while True:
    recvdata = client_sock.recv(1024)
    print "Received \"%s\" through Bluetooth" % recvdata
    if (recvdata == "Q"):
        print ("Exiting")
        break
    if (recvdata =="open"):
        doorOpen()

client_sock.close()
server_sock.close()
GPIO.cleanup()
#need to restart the program when the connection drops

def doorOpen():
    GPIO.output(14,True)
    time.sleep(.5)
    GPIO.output(15,True)
    time.sleep(1)
    GPIO.output(14,False)
    GPIO.output(15,False)
