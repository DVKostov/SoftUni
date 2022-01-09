floors = int(input())
rooms_per_floor = int(input())

for i in range(0, rooms_per_floor):
    print(f"L{floors}{i}", end=" ")
floors -= 1
for j in range(floors, 0, - 1):
    print()
    for k in range(0, rooms_per_floor, 1):
        if j % 2 == 0:
            print(f"O{j}{k}", end=" ")
        else:
            print(f"A{j}{k}", end=" ")