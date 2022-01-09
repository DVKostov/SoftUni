budget = float(input())
category = input()
count_people = int(input())
tickets_price = 0

if 1 <= count_people <= 4:
    budget *= 0.25
elif 5 <= count_people <= 9:
    budget *= 0.4
elif 10 <= count_people <= 24:
    budget *= 0.5
elif 25 <= count_people <= 49:
    budget *= 0.6
else:
    budget *= 0.75

if category == 'VIP':
    tickets_price = count_people * 499.99
else:
    tickets_price = count_people * 249.99

diff = abs(budget - tickets_price)
if budget <= tickets_price:
    print(f"Not enough money! You need {diff:.2f} leva.")
else:
    print(f"Yes! You have {diff:.2f} leva left.")