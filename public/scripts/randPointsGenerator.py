# Python code to generate 
# random numbers and 
# append them to a list 
import random
import sys
import math

latitude = 31.2127424
longitude = 121.2758724

class Poly:

    def __init__(self):
        self.location = (latitude+random.random()/100, longitude+random.random()/100)
        self.weight = random.randint(5,10)
        return

  
# Function to generate 
# and append them  
# start = starting range, 
# end = ending range 
# num = number of  
# elements needs to be appended 
def Rand(start, end, num): 
    res = [] 
  
    for j in range(num):
        # print(str(Poly().location))
        locationStr = "{location: new google.maps.LatLng" + str(Poly().location)
        # print(locationStr)
        outputStr = locationStr + ", weight: " + str(Poly().weight) + "},\n"
        print(outputStr)
        f = open("demofile.txt", "a")
        f.write(outputStr)
        f.close()
  
    return 
  
# Driver Code 
num = 988
start = 20
end = 40
Rand(start, end, num)