budget = float(input())
count = 0
total = 0
while True:
    product = input()
    if product == 'Stop':
        print(f"You bought {count} products for {total:.2f} leva.")
        break
    prc = float(input())
    count += 1
    if count % 3 == 0:
        prc /= 2
    if prc > budget:
        print("You don't have enough money!")
        print(f"You need {(prc - budget):.2f} leva!")
        break
    total += prc
    budget -= prc