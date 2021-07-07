# Exercise 5
# Complete the Building
building = {
    'Parking': ['P1','P2'],
    'Residential': ['Floor 1', 'Floor 2', 'Floor 3'],
    'Gym': {
        'Equipment': ['Treadmill','Bicycle'],
        'Personel': ['Trainer', 'Crocodile']
    }
}


# Add your code below
# Step 1
# Add 'P3' to the Parking
building['Parking'].append('P3')

# Step 2
# Add 7 more floors to 'Residential'
for floorNum in range(4, 11):
    building['Residential'].append('Floor {}'.format(floorNum))


# Step 3
# Add 'Dumbells' to the 'Equipment' in the 'Gym'
building['Gym']['Equipment'].append('Dumbells')


# Step 4 
# Count the number of 'Equipment' in the 'Gym'
len(building['Gym']['Equipment'])


# Step 5 (Bonus)
# Use the appropriate string method to replace the 'Crocodile' with 'Security Guard'
# https://www.w3schools.com/python/python_ref_string.asp
building['Gym']['Personel'][1] = building['Gym']['Personel'][1].replace('Crocodile', 'Security Guard')