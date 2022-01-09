destination = input()
dates = input()
nights = int(input())
total = 0
if destination == 'France':
    if dates == '21-23':
        total = nights * 30
    elif dates == '24-27':
        total = nights * 35
    else:
        total = nights * 40
elif destination == 'Italy':
    if dates == '21-23':
        total = nights * 28
    elif dates == '24-27':
        total = nights * 32
    else:
        total = nights * 39
else:
    if dates == '21-23':
        total = nights * 32
    elif dates == '24-27':
        total = nights * 37
    else:
        total = nights * 43

print(f"Easter trip to {destination} : {total:.2f} leva.")