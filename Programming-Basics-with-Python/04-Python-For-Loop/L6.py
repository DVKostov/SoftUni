text = str(input())
total = 0
for i in range(0, len(text)):
    letter = text[i]
    if letter == 'a':
        total += 1
    elif letter == 'e':
        total += 2
    elif letter == 'i':
        total += 3
    elif letter == 'o':
        total += 4
    elif letter == 'u':
        total += 5

print(total)