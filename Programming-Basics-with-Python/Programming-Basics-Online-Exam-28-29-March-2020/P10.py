capacity = float(input())
count = 0

while True:
    suitcase = input()
    count += 1
    if suitcase == "End":
        count -= 1
        print("Congratulations! All suitcases are loaded!")
        break
    suitcase = float(suitcase)
    if count % 3 == 0:
        suitcase *= 1.1
    if capacity < suitcase:
        count -= 1
        print("No more space!")
        break
    else:
        capacity -= suitcase

print(f"Statistic: {count} suitcases loaded.")