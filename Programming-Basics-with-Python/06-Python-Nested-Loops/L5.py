destination = ''
need = 0
total = 0
while True:
    destination = input()
    if destination == 'End':
        break
    need = float(input())
    while True:
        income = float(input())
        total += income
        if total >= need:
            print(f"Going to {destination}!")
            break
    total = 0
