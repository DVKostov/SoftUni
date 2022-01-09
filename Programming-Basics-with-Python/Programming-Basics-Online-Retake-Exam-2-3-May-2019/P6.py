days = int(input())
hours = int(input())
total = 0
for d in range(1, days + 1):
    day_total = 0
    for h in range(1, hours + 1):
        if d % 2 == 0 and h % 2 != 0:
            day_total += 2.5
        elif d % 2 != 0 and h % 2 == 0:
            day_total += 1.25
        else:
            day_total += 1
    total += day_total
    print(f"Day: {d} - {day_total:.2f} leva")
print(f"Total: {total:.2f} leva")