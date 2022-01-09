balls = int(input())
total = 0
red = 0
orange = 0
yellow = 0
white = 0
other = 0
black = 0

for i in range(balls):
    ball = input()
    if ball == 'red':
        red += 1
        total += 5
    elif ball == 'orange':
        orange += 1
        total += 10
    elif ball == 'yellow':
        yellow += 1
        total += 15
    elif ball == 'white':
        white += 1
        total += 20
    elif ball == 'black':
        black += 1
        total /= 2
    else:
        other += 1
total = int(total)
print(f"Total points: {total}")
print(f"Points from red balls: {red}")
print(f"Points from orange balls: {orange}")
print(f"Points from yellow balls: {yellow}")
print(f"Points from white balls: {white}")
print(f"Other colors picked: {other}")
print(f"Divides from black balls: {black}")