pens = int(input())
markers = int(input())
detergent = float(input())
discount = int(input())

pens *= 5.8
markers *= 7.2
detergent *= 1.2

total = pens + markers + detergent
total *= (1 - (discount / 100))

print(f"{total:.3f}")