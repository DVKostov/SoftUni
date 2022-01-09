width = int(input())
height = int(input())
count = 0
area = width * height

while True:
    line = input()
    if line == 'STOP':
        print(f"{area} pieces are left.")
        break
    else:
        piece = int(line)
        area -= piece
        count += 1
        if area <= 0:
            print(f"No more cake left! You need {abs(area)} pieces more.")
            break
