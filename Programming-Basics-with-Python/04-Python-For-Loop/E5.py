n = int(input())

total_qty = 0
p_1 = 0
p_2 = 0
p_3 = 0

for i in range(1, n + 1):
    num = int(input())
    if num % 2 == 0:
        p_1 += 1
    if num % 3 == 0:
        p_2 += 1
    if num % 4 == 0:
        p_3 += 1
    total_qty += 1

print(f"{(p_1 / total_qty * 100):.2f}%")
print(f"{(p_2 / total_qty * 100):.2f}%")
print(f"{(p_3 / total_qty * 100):.2f}%")