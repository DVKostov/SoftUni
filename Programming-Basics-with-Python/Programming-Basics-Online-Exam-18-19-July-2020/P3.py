qty = int(input())
size = input()
delivery = input()
prc = 0
if size == '90X130':
    prc = 110
    if 30 < qty <= 60:
        prc *= 0.95
    elif qty > 60:
        prc *= 0.92
elif size == '100X150':
    prc = 140
    if 40 < qty <= 80:
        prc *= 0.94
    elif qty > 80:
        prc *= 0.9
elif size == '130X180':
    prc = 190
    if 20 < qty <= 50:
        prc *= 0.93
    elif qty > 50:
        prc *= 0.88
elif size == '200X300':
    prc = 250
    if 25 < qty <= 50:
        prc *= 0.91
    elif qty > 50:
        prc *= 0.86

total = prc * qty

if delivery == 'With delivery':
    total += 60

if qty > 99:
    total *= 0.96

if qty <= 10:
    print("Invalid order")
else:
    print(f"{total:.2f} BGN")