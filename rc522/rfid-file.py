import RPi.GPIO as gpio
import sys
from pirc522 import RFID
rdr = RFID()

if __name__=="__main__":
 gpio.setwarnings(False)
 b=sys.stdin.read()
 if b=="rfid":
  rdr.wait_for_tag()
  (error, tag_type) = rdr.request()
  if not error:
   (error, uid) = rdr.anticoll()
   if not error:
    a=str(uid)
    sys.stdout.write(a)
   else:
    sys.stdout.write("error")
 else:
    sys.stdout.write("error")
 rdr.cleanup()