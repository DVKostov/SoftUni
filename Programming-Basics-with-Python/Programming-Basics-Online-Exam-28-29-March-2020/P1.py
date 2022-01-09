bitcoin = int(input())
joana = float(input())
commission = float(input())

bitcoin *= 1168
joana *= 0.15
joana *= 1.76

total = bitcoin + joana
total /= 1.95
total = total * (1 - (commission / 100))

print(f"{total:.2f}")