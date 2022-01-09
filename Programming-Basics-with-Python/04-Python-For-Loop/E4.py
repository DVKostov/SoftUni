n = int(input())

total_qty = 0
p_1 = 0
p_2 = 0
p_3 = 0
p_4 = 0
p_5 = 0

for i in range(1, n + 1):
    num = int(input())
    if num < 200:
        p_1 += 1
    elif 200 <= num <= 399:
        p_2 += 1
    elif 400 <= num <= 599:
        p_3 += 1
    elif 600 <= num <= 799:
        p_4 += 1
    else:
        p_5 += 1
    total_qty += 1

print(f"{(p_1 / total_qty * 100):.2f}%")
print(f"{(p_2 / total_qty * 100):.2f}%")
print(f"{(p_3 / total_qty * 100):.2f}%")
print(f"{(p_4 / total_qty * 100):.2f}%")
print(f"{(p_5 / total_qty * 100):.2f}%")