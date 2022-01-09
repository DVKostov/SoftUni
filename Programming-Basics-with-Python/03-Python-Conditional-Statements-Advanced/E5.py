budget = float(input())
season = str(input())

destination = ''
place = ''
total = 0

if budget <= 100:
    destination = 'Bulgaria'
    if season == 'summer':
        place = 'Camp'
        total = budget * 0.3
    else:
        place = 'Hotel'
        total = budget * 0.7
elif budget <= 1000:
    destination = 'Balkans'
    if season == 'summer':
        place = 'Camp'
        total = budget * 0.4
    else:
        place = 'Hotel'
        total = budget * 0.8
else:
    destination = 'Europe'
    place = 'Hotel'
    total = budget * 0.9

print(f"Somewhere in {destination}")
print(f"{place} - {total:.2f}")