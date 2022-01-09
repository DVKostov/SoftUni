period = input()
type_contract = input()
internet = input()
bill_months = int(input())

total = 0

if period == 'one':
    if type_contract == 'Small':
        total = bill_months * 9.98
    elif type_contract == 'Middle':
        total = bill_months * 18.99
    elif type_contract == 'Large':
        total = bill_months * 25.98
    else:
        total = bill_months * 35.99
else:
    if type_contract == 'Small':
        total = bill_months * 8.58
    elif type_contract == 'Middle':
        total = bill_months * 17.09
    elif type_contract == 'Large':
        total = bill_months * 23.59
    else:
        total = bill_months * 31.79
if internet == 'yes':
    if total / bill_months <= 10:
        total += bill_months * 5.5
    elif total / bill_months <= 30:
        total += bill_months * 4.35
    else:
        total += bill_months * 3.85

if period == 'two':
    total *= 1 - (3.75 / 100)

print(f"{total:.2f} lv.")