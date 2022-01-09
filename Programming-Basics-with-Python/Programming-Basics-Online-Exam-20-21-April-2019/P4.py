import math
guests = int(input())
budget = int(input())
bread = math.ceil(guests / 3)
eggs = guests * 2
budget -= ((bread * 4) + (eggs * 0.45))
if budget >= 0:
    print(f"Lyubo bought {bread} Easter bread and {eggs} eggs.")
    print(f"He has {budget:.2f} lv. left.")
else:
    print(f"Lyubo doesn't have enough money.")
    print(f"He needs {abs(budget):.2f} lv. more.")