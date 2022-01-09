breads = int(input())
max_chef = ''
max_points = 0

for i in range(breads):
    chef = input()
    current_points = 0

    while True:
        points = input()
        if points == 'Stop':
            print(f"{chef} has {current_points} points.")
            break
        current_points += int(points)

    if current_points > max_points:
        max_chef = chef
        max_points = current_points
        print(f"{max_chef} is the new number 1!")

print(f"{max_chef} won competition with {max_points} points!")

