// C++ code
//

int LED = 8;
int PIR = 2;
void setup()
{
    Serial.begin(9600);
    pinMode(PIR,INPUT);
    pinMode(LED,OUTPUT);
}

void loop()
{
    int value = digitalRead(PIR);
    Serial.println(value);
    if(value==1){
        digitalWrite(LED,HIGH);
    }
    else{
        digitalWrite(LED,LOW);
    }
    delay(100);
}
