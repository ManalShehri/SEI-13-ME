# أ:
# Create a function that prints the string "Hello World" 
# Abdullah is that eazy ? 
def HelloWorld():
  print("Hello World")
HelloWorld()
# ==========================================================
# ب:
# Create a function that takes a single parameter and prints it.
def Myname(name):
  print(f"my name is {name}")
Myname("Manal")
# ==========================================================
# ج:
# Write a function with lambda says printCool that accepts one parameter, name, as an argument.
# The function should print the name and a message saying that that person is cool.
# i.e. printCool("Captain Yasir") // => "Captain Yasir is cool."
printCool = lambda x : f"{x} is cool."
print(printCool("Captain Yasir"))
# ==========================================================
# د:
# Write a function calculateCube that takes a single number and prints the
# volume of a cube made from that number:
#
# i.e. calculateCube(5) // => 125
def calculateCube(num):
    return num*num*num
print(calculateCube(5))   
# ==========================================================
# ه:
# Write a function getMultipleLengths that accepts a single parameter as an
# argument: an array of strings. The function should return an array of numbers
# where each number is the length of the corresponding string.
#
# i.e. getMultipleLengths(["hello", "what", "is", "up", "dude"]); // => [5, 4, 2, 2, 4]
def getMultipleLengths(array):
  new_arr = []
  for i in array:
    new_arr.append(len(i))
  return new_arr
print(getMultipleLengths(["hello", "what", "is", "up", "dude"]))
# ==========================================================
# ز
# Squares
#  Use .map() to get the square of nums and store the value in numsSquared
#  numsSquared => [1, 4, 9, 16, 25]
nums = [1, 2, 3, 4, 5]
numsSquared = list(map(lambda x : x*x,nums))
print(numsSquared)
# ==========================================================
# ك
#  Use .map() and Multiply by 100 and store the value in times100
# Write your solution here
#  times100  => [100, 200,...]
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Multiply100 = list(map(lambda x : x*100,nums))
print(Multiply100)
# ==========================================================
# ل
# isDivisibleBy3
#  Use .filter() to find out the numbers that are divisible by 3 and store the value in isDivisibleBy3
#  isDivisibleBy3 => [3, 6, 9]
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
isDivisibleBy3 = list(filter(lambda x : x%3==0,nums))
print(isDivisibleBy3)
# ==========================================================
# ن
#  Capitalize all the strings in the heroes array and store them in the array capitalizedHeroes.
#  capitalizedHeroes => ["HULK", "CAPTAIN AMERICA", "BLACK PANTHER", "SPIDERMAN"]
heroes = ['hulk', 'captain america', 'black panther', 'spiderman']
capitalizedHeroes = list(map(lambda x : x.upper(),heroes))
print(capitalizedHeroes)