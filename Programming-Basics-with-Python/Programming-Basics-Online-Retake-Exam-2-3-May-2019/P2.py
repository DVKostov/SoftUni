budget = float(input())
gas_need = float(input())
day = input()

total = (gas_need * 2.1) + 100

if day == 'Saturday':
    total *= 0.9
else:
    total *= 0.8


if budget >= total:
    print(f"Safari time! Money left: {(budget - total):.2f} lv. ")
else:
    print(f"Not enough money! Money needed: {(total - budget):.2f} lv.")