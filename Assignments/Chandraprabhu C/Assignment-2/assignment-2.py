import time,random

while True:
    current_temperature = random.randint(0,40)
    current_humidity = random.randint(0,100)
    
    print("Current temperature is {}".format(current_temperature))
    print("Current humidity is {}".format(current_humidity))
    
    if current_temperature > 30 :
        print("The temperature is high")
    elif current_temperature > 15:
        print("The temperature is normal")
    else:
        print("The temperature is low")
    
    if current_humidity > 80 :
        print("The humidity is high")
    elif current_humidity > 15:
        print("The humidity is normal")
    else:
        print("The humidity is low")
    print()
    time.sleep(3)
        
