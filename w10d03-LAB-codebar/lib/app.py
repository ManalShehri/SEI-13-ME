# Write your code here!

class Member:

    def __init__(self, full_name):
        self.full_name = full_name

    def introduce(self):
        return f'Hi, my name is {self.full_name}!'


class Student(Member):
    def __init__(self, full_name, reason):
        self.reason = reason
        super().__init__(full_name)

class Instructor(Member):
    skills = []
    def __init__(self, full_name, bio):
        super().__init__(full_name)


    def add_skill(self, skill):
        self.skills.append(skill)

class Workshop(Student, Instructor):
    instructors_list = []
    students_list = []

    def __init__(self, date, subject):
        self.date = date
        self.subject = subject
        # self.instructors_list = 

    def add_participant(self, member):
        # return member
        if isinstance(member, Instructor):
            # return 'this is an Instructor'
            self.instructors_list.append(member)
        else:
            # return 'student'
            self.students_list.append(member)
    
    def print_details(self):
        students = 
        return f'Workshop - {self.date} - {self.subject} \nStudents\n'



workshop = Workshop("12/03/2014", "Shutl")

jane = Student("Jane Doe", "I am trying to learn programming and need some help")
lena = Student("Lena Smith", "I am really excited about learning to program!")

vicky = Instructor("Vicky Python", "I want to help people learn coding.")
vicky.add_skill("HTML")
vicky.add_skill("JavaScript")

nicole = Instructor("Nicole McMillan", "I have been programming for 5 years in Python and want to spread the love")
nicole.add_skill("Python")

workshop.add_participant(nicole)

print(workshop.print_details())
# print(isinstance(nicole, Instructor))

# print(workshop.instructors_list[0].full_name)
