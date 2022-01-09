season = input()
kilometers = float(input())
total_kilometers = kilometers * 4
salary = 0
if kilometers <= 5000:
    if season == 'Winter':
        salary = total_kilometers * 1.05
    elif season == 'Summer':
        salary = total_kilometers * 0.90
    else:
        salary = total_kilometers * 0.75
elif 5000 < kilometers <= 10000:
    if season == 'Winter':
        salary = total_kilometers * 1.25
    elif season == 'Summer':
        salary = total_kilometers * 1.10
    else:
        salary = total_kilometers * 0.95
else:
    salary = total_kilometers * 1.45

salary *= 0.90

print(f"{salary:.2f}")