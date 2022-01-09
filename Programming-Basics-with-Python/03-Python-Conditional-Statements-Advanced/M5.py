budget = float(input())
season = input()
place = ''
country = ''
total = 0
if budget <= 1000:
    place = 'Camp'
    if season == 'Summer':
        country = 'Alaska'
        total = budget * 0.65
    else:
        country = 'Morocco'
        total = budget * 0.45
elif 1000 < budget <= 3000:
    place = 'Hut'
    if season == 'Summer':
        country = 'Alaska'
        total = budget * 0.80
    else:
        country = 'Morocco'
        total = budget * 0.60
else:
    place = 'Hotel'
    if season == 'Summer':
        country = 'Alaska'
    else:
        country = 'Morocco'
    total = budget * 0.90

print(f"{country} - {place} - {total:.2f}")