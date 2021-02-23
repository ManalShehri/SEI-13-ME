import random

# Starting with the following list...
planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

# Access the second value in `planeteers`
print(planeteers[1])

# Add "Heart" to the end of `planeteers`
planeteers.append("Heart")
print(planeteers)

# Remove "Captain Planet" from the list
planeteers.pop(2)
print(planeteers)

# Combine `planeteers` with `rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]` and save the result in a variable called `heroes`
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
planeteers.extend(rangers)
heroes = []
heroes.extend(planeteers)
print(heroes)

# Alphabetize the contents of `heroes` using a function
heroes.sort()
print(heroes)

# Randomize the contents of `heroes` using a function. 
# The Python documentation might help: https://docs.python.org/2/library/random.html
random.shuffle(heroes)
print(heroes)

# Bonus: Select a random element from `heroes` using a function
# The Python documentation might help: https://docs.python.org/2/library/random.html
random_element = random.choice(heroes)
print(random_element)

# Initialize a dictionary called `ninja_turtle` with the properties `name`, `weapon` and `radical`
# They should have values of "Michelangelo", "Nunchuks" and a true boolean, respectively
ninja_turtle = {
    "name": "Michelangelo",
    "weapon": "Nunchuks",
    "radical": True
}
print(ninja_turtle)

# Add a key `age` to `ninja_turtle`. Set it to whatever numerical value you'd like
ninja_turtle["age"] = 20
print(ninja_turtle)

# Remove the `radical` key-value pair from `ninja_turtle`
ninja_turtle.pop('radical')
print(ninja_turtle)

# Add a key `pizza_toppings` to `ninja_turtle`. Set it to an list of strings (e.g., `["cheese", "pepperoni", "peppers"]`)
ninja_turtle["pizza_toppings"] = ["cheese", "pepperoni", "peppers"]
print(ninja_turtle)

# Access the first element of `pizza_toppings`
first_element = ninja_turtle["pizza_toppings"][0]
print(first_element)

# Produce an list containing all of `ninja_turtle`'s keys using a function. 
# The Python documentation might help: https://docs.python.org/3/tutorial/datastructures.html
ninja_turtle_list = list(ninja_turtle)
print(ninja_turtle_list)

# Produce a list containing all of `ninja_turtle`'s values using a function
ninja_turtle_values =  list(ninja_turtle.values())
print(ninja_turtle_values)

# Bonus: Write a function that prints out each key-value pair in the following format - "KEY is equal to VALUE"
print('-------- Loop --------')
for key, value in ninja_turtle.items():
    print('{} is equal to {}'.format(key, value))

#  The Python documentation might help: https://docs.python.org/3/tutorial/datastructures.html