class Gladiator:

    def __init__(self, name, weapon):
        self.name = name
        self.weapon = weapon

class Arena:

    def __init__(self, name):
        self.name = name.capitalize()
        self.gladiators = []

    def __repr__(self):
        return self.gladiators

    
    def addGladiator(self,gladiator):
        if len(self.gladiators) < 2:
            self.gladiators.append(gladiator)
        else:
            return 'Error: no more than two'

    def fight(self):
        if len(self.gladiators) == 2:
            if self.gladiators[0].weapon == 'Trident' and self.gladiators[1].weapon == 'Spear':
                self.gladiators.pop(1) # eliminated
            elif self.gladiators[1].weapon == 'Trident' and self.gladiators[0].weapon == 'Spear':
                self.gladiators.pop(0) # eliminated
            elif self.gladiators[0].weapon == 'Spear' and self.gladiators[1].weapon == 'Club':
                self.gladiators.pop(1) # eliminated
            elif self.gladiators[1].weapon == 'Spear' and self.gladiators[0].weapon == 'Club':
                self.gladiators.pop(0) # eliminated
            elif self.gladiators[0].weapon == 'Club' and self.gladiators[1].weapon == 'Trident':
                self.gladiators.pop(1) # eliminated
            elif self.gladiators[1].weapon == 'Club' and self.gladiators[0].weapon == 'Trident':
                self.gladiators.pop(0) # eliminated
            elif self.gladiators[0].weapon == self.gladiators[1].weapon:
                self.gladiators.pop(0) # eliminated
                self.gladiators.pop(1) # eliminated
        else: 
            pass
            
max = Gladiator("Maximus", "Trident")
titus = Gladiator("Titus", "Spear")
colosseum = Arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
colosseum.fight()
print(colosseum.gladiators)
