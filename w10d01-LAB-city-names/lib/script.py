from capitals import states

# test list
# states = [
# {
#     "name": "Alabama",
#     "capital": "Montgomery",
#     "correct": 0,
#     "incorrect": 0
# }, {
#     "name": "Alaska",
#     "capital": "Juneau",
#     "correct": 0,
#     "incorrect": 0
# }, {
#     "name": "Arizona",
#     "capital": "Phoenix",
#     "correct": 0,
#     "incorrect": 0
# }]

for state in states: 
    state['correct'] = 0
    state['incorrect'] = 0

import random
random.shuffle(states)
# print(states)


def play():
    total_correct = 0 
    total_incorrect = 0
    for state in states:
        correct_one = state['correct']
        incorrect_one = state['incorrect']
        answer = input("Enter the capital of {}: ".format(state['name'])) 
        if answer == state['capital']:
            total_correct = total_correct + 1 
            state['correct'] = correct_one + 1
        else:
            total_incorrect = total_incorrect + 1
            state['incorrect'] = incorrect_one + 1

    print("corrct answers: {} and incorrect answers: {}".format(total_correct, total_incorrect))

print('Hello to  you for playing')
play()
play_again = input("wanna play agian? Y or N ")

while play_again == 'Y':
    play()
    play_again = input("wanna play agian? Y or N")

print('Thank you for playing')
print(states)