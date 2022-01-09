free_space = int(input()) * int(input()) * int(input())
used_space = 0
n = input()

while n != 'Done':
    used_space += int(n)
    if used_space >= free_space:
        break
    n = input()


if used_space >= free_space:
    diff = abs(free_space - used_space)
    print(f"No more free space! You need {diff} Cubic meters more.")
else:
    diff = free_space - used_space
    print(f"{diff} Cubic meters left.")