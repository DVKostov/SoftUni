flour_prc = float(input())
flour_qty = float(input())
sugar_qty = float(input())
eggs_set = int(input())
may = int(input())

sugar_prc = flour_prc * 0.75
eggs_set_prc = flour_prc * 1.1
may_prc = sugar_prc * 0.2

total = (flour_qty * flour_prc) + (sugar_prc * sugar_qty) + (eggs_set_prc * eggs_set) + (may * may_prc)

print(f"{total:.2f}")