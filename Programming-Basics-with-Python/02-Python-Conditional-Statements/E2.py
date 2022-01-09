num = int(input())
bonus = 0

if num > 1000:
    bonus = bonus + (num * 0.1)
elif num > 100:
    bonus = bonus + (num * 0.2)
else:
    bonus = bonus + 5

if num % 2 == 0:
    bonus = bonus + 1

if num % 10 != 0 and num % 5 == 0:
    bonus = bonus + 2

num = num + bonus

print(bonus)
print(num)