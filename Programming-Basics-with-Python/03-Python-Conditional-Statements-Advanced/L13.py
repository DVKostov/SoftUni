days = int(input())
room = str(input())
feedback = str(input())

nights = days - 1
total = 0

if room == 'room for one person':
    total = nights * 18
elif room == 'apartment':
    total = nights * 25
    if days < 10:
        total = total * 0.7
    elif 10 <= days <= 15:
        total = total * 0.65
    else:
        total = total * 0.5
elif room == 'president apartment':
    total = nights * 35
    if days < 10:
        total = total * 0.9
    elif 10 <= days <= 15:
        total = total * 0.85
    else:
        total = total * 0.8

if feedback == 'positive':
    total = total * 1.25
else:
    total = total * 0.9

print(f"{total:.2f}")
