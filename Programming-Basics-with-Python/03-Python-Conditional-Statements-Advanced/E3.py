flowers = str(input())
qty = int(input())
budget = int(input())

total = 0

if flowers == 'Roses':
    total = qty * 5
    if qty > 80:
        total = total * 0.9
elif flowers == 'Dahlias':
    total = qty * 3.8
    if qty > 90:
        total = total * 0.85
elif flowers == 'Tulips':
    total = qty * 2.8
    if qty > 80:
        total = total * 0.85
elif flowers == 'Narcissus':
    total = qty * 3
    if qty < 120:
        total = total * 1.15
elif flowers == 'Gladiolus':
    total = qty * 2.5
    if qty < 80:
        total = total * 1.2

diff = abs(budget - total)

if budget >= total:
    print(f"Hey, you have a great garden with {qty} {flowers} and {diff:.2f} leva left.")
else:
    print(f"Not enough money, you need {diff:.2f} leva more.")
