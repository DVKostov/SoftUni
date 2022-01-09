vacation_cost = float(input())
money = float(input())
days = 0
spend_days = 0

while True:
    days += 1
    action = input()
    if action == 'spend':
        spend_days += 1
    else:
        spend_days = 0
    if spend_days == 5:
        print(f"You can't save the money.")
        print(f"{days}")
        break
    amount = float(input())

    if action == 'spend':
        if amount > money:
            money = 0
        else:
            money -= amount
    else:
        money += amount

    if money >= vacation_cost:
        print(f"You saved the money for {days} days.")
        break

