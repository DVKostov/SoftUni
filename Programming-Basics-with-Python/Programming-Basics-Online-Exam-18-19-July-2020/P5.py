best_name = ''
best_score = 0
hat_trick = False
while True:
    name = input()
    if name == 'END':
        break
    score = int(input())
    if score > best_score:
        best_name = name
        best_score = score
    if score >= 3:
        hat_trick = True
    if score >= 10:
        break

print(f"{best_name} is the best player!")
if hat_trick:
    print(f"He has scored {best_score} goals and made a hat-trick !!!")
else:
    print(f"He has scored {best_score} goals.")