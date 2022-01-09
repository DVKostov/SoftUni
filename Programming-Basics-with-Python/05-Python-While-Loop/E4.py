goal = 10000
progress = 0

while True:
    line = input()
    if line == 'Going home':
        line = int(input())
        progress += line
        break
    else:
        line = int(line)
    progress += line
    if progress >= goal:
        break
diff = abs(goal - progress)
if progress >= goal:
    print(f"Goal reached! Good job!")
    print(f"{diff} steps over the goal!")
else:
    print(f"{diff} more steps to reach goal.")
