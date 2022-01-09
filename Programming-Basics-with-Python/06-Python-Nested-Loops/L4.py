begin = int(input())
end = int(input())
magic = int(input())
count_combinations = 0
rez = 0

for i in range(begin, end + 1):
    for j in range(begin, end + 1):
        count_combinations += 1
        rez = i + j
        if rez == magic:
            break
    if rez == magic:
        print(f"Combination N:{count_combinations} ({i} + {j} = {rez})")
        break
if rez != magic:
    print(f"{count_combinations} combinations - neither equals {magic}")