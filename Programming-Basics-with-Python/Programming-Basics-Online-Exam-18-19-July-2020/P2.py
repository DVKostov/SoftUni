prc_20 = float(input())
kilograms = float(input())
days = int(input())
qty = int(input())

if kilograms < 10:
    prc_20 *= 0.2
elif 10 <= kilograms <= 20:
    prc_20 *= 0.5

if days > 30:
    prc_20 *= 1.1
elif 7 <= days <= 30:
    prc_20 *= 1.15
else:
    prc_20 *= 1.4

total = qty * prc_20

print(f"The total price of bags is: {total:.2f} lv.")