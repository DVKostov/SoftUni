size = input()
color = input()
qty = int(input())
total = 0
if size == 'Large':
    if color == 'Red':
        total = qty * 16
    elif color == 'Green':
        total = qty * 12
    else:
        total = qty * 9
elif size == 'Medium':
    if color == 'Red':
        total = qty * 13
    elif color == 'Green':
        total = qty * 9
    else:
        total = qty * 7
else:
    if color == 'Red':
        total = qty * 9
    elif color == 'Green':
        total = qty * 8
    else:
        total = qty * 5

total *= 0.65

print(f"{total:.2f} leva.")