line = float(input())

while True:
    if line < 0:
        print('Negative number!')
        break
    else:
        rez = line * 2
        print(f"Result: {rez:.2f}")
    line = float(input())