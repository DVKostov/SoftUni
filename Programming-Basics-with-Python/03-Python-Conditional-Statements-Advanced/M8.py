x1 = float(input())
y1 = float(input())
x2 = float(input())
y2 = float(input())
x = float(input())
y = float(input())
rez = ""
if (x == x1 or x == x2) and (y1 <= y <= y2):
    rez = 'Border'
elif (y == y1 or y == y2) and (x1 <= x <= x2):
    rez = 'Border'
else:
    rez = 'Inside / Outside'

print(rez)