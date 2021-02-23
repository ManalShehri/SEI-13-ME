#  Work through each of the prompts below.
# أ:
#
# Create a list called months with all 12 months as strings in it (i.e.
# "January", "February", "March", etc). In a single line, delete "September",
# "October", and "November".
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
months.remove("Sep")
months.remove("Oct")
months.remove("Nov")
print(months)
#=============================================================================
# ب:
#
# Create a list called months with all 12 months as strings in it (i.e.
# "January", "February", "March", etc). Create a loop that prints out each
# month from the list on a separate line.
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
for i in months:
  print(f"{i}")
#=============================================================================
#
# ج:
#
# Create an empty list called randomNumbers. Write a for loop that will add
# 4 random numbers to the randomNumbers list using random.randInt() and push.
randomNumbers =[]
import random
for i in range(4):
  x = random.randint(0,50)
  randomNumbers.append(x)
print(randomNumbers)
##=============================================================================
# د:
#
# Create a list named foods and add 10 foods to it. Create another list
# called favoriteFoods but leave it empty. Create a list that loops through
# the foods list and adds the current item to the favoriteFoods list if the
# string is longer than 6 characters (i.e. string.length > 6).
foods = ["pizza","burger","shawarma","pasta","Yogurt","Potatoes","Mangoes","Sweet Potatoes","Watermelon","Eggs"]
favoriteFoods = []
for i in foods:
  if(len(i) > 6):
    favoriteFoods.append(i)
print(favoriteFoods)
###=============================================================================
# هـ:
#
# Create an empty dictionary called computer and save it to a variable.
#
# On the next line, add a make property and set it equal to 'Apple'.
# On the next line, add a model property and set it equal to 'MacBook'.
# On the next line, add a year property and set it equal to 2017.
# On the next line, add a `warranty-type` (spelled exactly) property and set it
# equal to 'limited'.
computer ={}
computer["make"] = 'Apple'
computer["model"] = 'MacBook'
computer["year"] = 2017
computer["warranty-typ"] = 'limited'
print(computer)
###=============================================================================
# و:
#
# Crazy dictionary! Use the dictionary below to log out each the following:
#
#   - "omg my mouth is burning"
#   - "Pretty pretty prettayyyyy good"
#   - "Swearing at Larry and Jeff"
#   - "Chicken Teriyaki Boyyyyyy"
#   - The dictionary the contains the name funkhauser
#   - Add the quote "I'm trying to elevate small talk to medium talk" to Larry's
#     quote array. Confirm that it was added.
crazydictionary = {
  "taco": [
    {
      "meat": 'steak',
      "cheese": ['panela', 'queso', 'chihuahua']
    },
    {
      "meat": 'chicken',
      "salsa": [
        'pico',
        'hot',
        'hotter',
        'really hot',
        'really really hot',
        'omg my mouth is burning'
      ]
    }
  ],
  "larry": {
    "nicknames": ['LD', 'Chicken Teriyaki Boyyyyyy'],
    "quotes": [
      'Pretty pretty prettayyyyy good',
      "Is that a parkinson's thing?",
      'women love a self confident bald man',
      "I'm a walking talking enigma"
    ],
    "characters": [
      {
        "name": 'Jeff',
        "occupation": 'manager'
      },
      {
        "name": 'funkhauser',
        "occupation": 'tv dude'
      },
      {
        "name": 'susie',
        "occupation": 'jeffs wife',
        "favourtieHobby": 'Swearing at Larry and Jeff'
      }
    ]
  }
};
print(crazydictionary['taco'][1]['salsa'][5])
print(crazydictionary['larry']['quotes'][0])
print(crazydictionary['larry']['characters'][2]['favourtieHobby'])
print(crazydictionary['larry']['nicknames'][1])
print(crazydictionary['larry']['characters'][1])
crazydictionary['larry']['quotes'].append("I'm trying to elevate small talk to medium talk")
print(crazydictionary['larry']['quotes'])
##=============================================================================
# ز:
#
# Change the value of limbo to null in the following dictionary:
#
inception = {
  "reality": {
    "dreamLayer1": {
      "dreamLayer2": {
        "dreamLayer3": {
          "dreamLayer4": {
            "dreamLayer5": {
              "dreamLayer6": {
                "limbo": 'Joseph Gordon Levitt'
              }
            }
          }
        }
      }
    }
  }
};
inception['reality']['dreamLayer1']['dreamLayer2']['dreamLayer3']['dreamLayer4']['dreamLayer5']['dreamLayer6']['limbo']=""
print(inception)
##=============================================================================
# ح:
#
# Create a loop that prints each number from 10 to 0.
for i in range(10, -1, -1):
  print(i)
print("=======================================")
#==============================================================================
# ط:
#
# Create a loop that prints out the odd numbers between 50 and 0
for i in range(51):
  if(i % 2 == 1):
    print(i)
#==============================================================================
# ي:
#
# Write a for loop that prints the numbers in the following array in order
twoDArray1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for i in twoDArray1:
  for j in i:
    print(j)
#==============================================================================
#
# ك:
#
# Write a for loop that prints the numbers in the following array in order
twoDArray = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
twoDArray=twoDArray[0]+twoDArray[1]+twoDArray[2]
twoDArray.sort()
print(twoDArray)