budget = int(input())
season = str(input())
people = int(input())

total = 0

if season == 'Spring':
    total = 3000
elif season == 'Winter':
    total = 2600
else:
    total = 4200

if people <= 6:
    total = total * 0.9
elif 7 <= people <= 11:
    total = total * 0.85
else:
    total = total * 0.75

if people % 2 == 0 and season != 'Autumn':
    total = total * 0.95

diff = abs(budget - total)

if budget >= total:
    print(f"Yes! You have {diff:.2f} leva left.")
else:
    print(f"Not enough money! You need {diff:.2f} leva.")