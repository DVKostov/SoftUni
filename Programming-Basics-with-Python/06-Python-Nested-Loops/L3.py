n = int(input())
count_combinations = 0

for x1 in range(0, n+1):
    for x2 in range(0, n+1):
        for x3 in range(0, n+1):
            rez = x1 + x2 + x3
            if rez == n:
                count_combinations += 1
print(count_combinations)