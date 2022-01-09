n = int(input())
num = int(input())
maxNum = num
minNum = num

for i in range(1, n):
    num = int(input())
    if maxNum < num:
        maxNum = num
    if minNum > num:
        minNum = num

print(f"Max number: {maxNum}")
print(f"Min number: {minNum}")

