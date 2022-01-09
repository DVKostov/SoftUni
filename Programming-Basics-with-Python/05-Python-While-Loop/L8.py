name = input()
total = 0.0
count = 1
health_points = 2

while count <= 12:
    if health_points == 0:
        break
    grade = float(input())
    if grade < 4.00:
        health_points -= 1
        continue

    total += grade
    count += 1

if health_points == 0:
    print(f"{name} has been excluded at {count} grade")
else:
    avg = total / 12
    print(f"{name} graduated. Average grade: {avg:.2f}")