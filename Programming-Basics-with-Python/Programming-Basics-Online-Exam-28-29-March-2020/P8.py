teams = int(input())
people = 0
first = 0
second = 0
third = 0
fourth = 0
fifth = 0
for i in range(teams):
    team = int(input())
    people += team
    if team <= 5:
        first += team
    elif 6 <= team <= 12:
        second += team
    elif 13 <= team <= 25:
        third += team
    elif 26 <= team <= 40:
        fourth += team
    else:
        fifth += team

print(f"{((first / people) * 100):.2f}%")
print(f"{((second / people) * 100):.2f}%")
print(f"{((third / people) * 100):.2f}%")
print(f"{((fourth / people) * 100):.2f}%")
print(f"{((fifth / people) * 100):.2f}%")
