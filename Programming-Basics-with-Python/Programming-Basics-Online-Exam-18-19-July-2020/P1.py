name = input()
tickets_old = int(input())
tickets_kid = int(input())
old_prc = float(input())
tax = float(input())

kid_prc = old_prc * 0.3

total = (tickets_kid * kid_prc) + (tickets_old * old_prc) + ((tickets_old + tickets_kid) * tax)
profit = total * 0.2

print(f"The profit of your agency from {name} tickets is {profit:.2f} lv.")