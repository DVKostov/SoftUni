item = str(input())
city = str(input())
qty = float(input())
prc = 0
if city == 'Sofia':
    if item == 'coffee':
        prc = qty * 0.5
    elif item == 'water':
        prc = qty * 0.8
    elif item == 'beer':
        prc = qty * 1.2
    elif item == 'sweets':
        prc = qty * 1.45
    elif item == 'peanuts':
        prc = qty * 1.6
elif city == 'Plovdiv':
    if item == 'coffee':
        prc = qty * 0.4
    elif item == 'water':
        prc = qty * 0.7
    elif item == 'beer':
        prc = qty * 1.15
    elif item == 'sweets':
        prc = qty * 1.30
    elif item == 'peanuts':
        prc = qty * 1.5
elif city == 'Varna':
    if item == 'coffee':
        prc = qty * 0.45
    elif item == 'water':
        prc = qty * 0.7
    elif item == 'beer':
        prc = qty * 1.1
    elif item == 'sweets':
        prc = qty * 1.35
    elif item == 'peanuts':
        prc = qty * 1.55

print(prc)