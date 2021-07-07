# ::: (1) Built-in Functions :::

# Example with print()
# print() logs the argument in the terminal
# print("Good Morning")

# Example with print(), input(), and variables
# firstName = input("What is your name? ")
# print("You entered " + firstName)


# ::: (2) Data Types :::
# String
# Numbers (Integers, Floats)
# Boolean
# Object (Lists, Tuples, Sets, Dictionaries)


# ::: (3) Rules for Naming Variables :::
# 1 - Must begin with a lowercase letter or underscore
# 2 - No special characters allowed except _
# 3 - Don't name after reserved keywords
# 4 - Use either camel case convention or _ convention

# Examples
# myphonenumber = "050 123 4567"
# myPhoneNumber = "050 123 4567"
# my_phone_number = "050 123 4567"


# Solution to Exercise 1
"""
firstName = input("What is your first name? ")
lastName = input("What is your last name? ")
phoneNumber = input("What is your phone number? ")

print("Successfully registered!")
print("You entered:\n" + firstName + "\n" + lastName + "\n" + phoneNumber)
"""

# ::: (4) Data Structures :::

# Example of List
# people = ['Aima', 'Corina', 'Deeksha', 'Lexie', 'Lily']

# Example of multidimensional list
# people = [
#     ['Aima','Jailani','aima@gmail.com'],
#     ['firstname','lastname','email'],
#     ['firstname','lastname','email'],
#     ['firstname','lastname','email'],    
# ]

# print(people[0][2])


# List Methods
# .append()       Will append an element at the end 
# .insert()       Will insert an element at a specified index
# .clear()        Will empty the list
# .index()        Find an index by its value
# .remove()       Will remove an element from the end
# .pop()          Will remove an element at a specified index 
# .sort()         Sort elements by their value

# Function for Enums
# len()           A function to return the length of data structure

"""
people.append("Mahmoud")
people.insert(2, "Malik")
people.pop(2)

print("We have {} people in here".format(len(people)))
"""

# ::: (5) Operators :::
# +         addition or concatenation
# -         subtraction
# *         multiplicatin
# /         division
# %         modulo
# =         assignment operator
# ==        equality comparison operator
# |        OR operator
# &        AND operator
# !         NOT
# !=        NOT equal comparison operator
# <         less than comparison
# >         greater than comparison
# <=        leq comparison
# >=        geq comparison


# ::: (6) Control Statements :::

# If/else
# thePrice = 4000
# theBudget = 4000

# Using elif
"""
if thePrice < theBudget:
    print("Buy the product")
elif thePrice == theBudget:
    print("Buy the product")
else:
    print("Don't buy the product")
"""



# Using inequality operator
"""
if thePrice <= theBudget:
    print("Buy the product")
else:
    print("Don't buy the product")
"""

# For loop
# customers = [
#     'Aima Grace',           
#     'Corina Matthews', 
#     'Deeksha Gupta', 
#     'Lexie Vacca',
#     'Lily Anethang'
# ]

# Using for loop with specified range
# for index in range(0, 5):
#     print(customers[index])

# Using for loop with 'in'
# for currentPerson in customers:
#     print("Dear {},".format(currentPerson))
#     print("You have been randomly selected for a prize")
#     print("Click this link to claim your prize!")
#     print("DON'T IGNORE OR YOUR PRIZE WILL EXPIRE")
#     print("Regards,\nLegitimate Inc.\n\n")


# ::: (7) String Methods :::
# print("My name is {} {}".format("Mary", "Jane"))



# Solution to Exercise 2

"""
# The given variables
coffeeOptions = ['Latte', 'Americano', 'Cappuccino', 'Espresso', 'Turkish']
price = [23, 18, 19, 17, 20]

# User friendly input display
print("Welcome to Starbax")

for option in coffeeOptions:
    print(option)

selection = input("Please enter your choice of coffee: ")

# Conditional statements to check selection and print price
if selection == coffeeOptions[0]:
    print(price[0])
elif selection == coffeeOptions[1]:
    print(price[1])
elif selection == coffeeOptions[2]:
    print(price[2])
elif selection == coffeeOptions[3]:
    print(price[3])
elif selection == coffeeOptions[4]:
    print(price[4])
else:
    print("Not a valid option")
"""

# Solution to Exercise 3
"""
coffeeOptions = ['Latte', 'Americano', 'Cappuccino', 'Espresso', 'Turkish']
milkOptions = ['Dairy', 'Coconut', 'Almond', 'Hazeulnut','Oat','Soy']
sizes = ['Tall','Grande','Venti']
theOrder = []

coffeeSelection = input("Please enter your coffee selection: ")
milkSelection = input("Please enter your milk selection: ")
sizeSelection = input("Please enter size of your drink: ")

if coffeeSelection in coffeeOptions:
    theOrder.append(coffeeSelection)
else:
    print("Not a valid option")

if milkSelection in milkOptions:
    theOrder.append(coffeeSelection)
else:
    print("Not a valid option")

if sizeSelection in sizes:
    theOrder.append(coffeeSelection)
else:
    print("Not a valid option")


print("Here's your order:")
for item in theOrder:
    print(item)
"""

# ::: (8) Functions :::

# Simple Example of a Function

# def addTwoNumbers(numA, numB):
#     sum = numA + numB
#     return sum

# print(addTwoNumbers(5, 6))


# Another Example of a Function
# def registerUser():

#     firstName = input("What is your first name? ")
#     lastName = input("What is your last name? ")
#     phoneNumber = input("What is your phone number? ")

#     print("Successfully registered!")
#     print("You entered:\n" + firstName + "\n" + lastName + "\n" + phoneNumber)



# Solution to Exercise 4

# Create a function
"""
def coffeeMachine(coffeeType, milkOption, sizeOption):
    theOrder = []

    theOrder.append(coffeeType)
    theOrder.append(milkOption)
    theOrder.append(sizeOption)

    return theOrder


# Using the function
for index in range(1, 10):
    theOrder = coffeeMachine(
        input('Please enter your coffee choice: '),
        input('Please enter your milk preference: '),
        input('Please enter size of order: ')
    )

    print('Order number {}'.format(index), theOrder)
"""


# Function with Optional Parameters
"""
def coffeeMachine(coffeeType, sizeOption, milkOption="none", foamOption="na"):
    theOrder = []

    theOrder.append(coffeeType)

    if milkOption != "none":
        theOrder.append(milkOption)

    if foamOption != "na":
        theOrder.append(foamOption)

    theOrder.append(sizeOption)

    return theOrder

print( coffeeMachine('black', 'medium') )
print( coffeeMachine('black', 'large', 'oat') )
print( coffeeMachine('black', 'large', 'oat', 'foam') )
"""


# ::: (9) Tuples, Sets, Dictionaries :::



# ::: (10) Classes :::