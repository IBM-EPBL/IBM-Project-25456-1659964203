import sys,time
import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)

RED,YELLOW,GREEN=10,11,12
GPIO.output(RED,False)
GPIO.output(YELLOW,False)
GPIO.output(GREEN,False)
while True:
    GPIO.output(RED,True)
    time.sleep(10)
    GPIO.output(RED,False)
    GPIO.output(YELLOW,True)
    time.sleep(2)
    GPIO.output(YELLOW,False)
    GPIO.output(GREEN,True)
    time.sleep(10)
    
    
