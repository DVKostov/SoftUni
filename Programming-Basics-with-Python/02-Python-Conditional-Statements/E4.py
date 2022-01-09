num = float(input())
fromm = str(input())
too = str(input())

if fromm == 'cm':
    num = num / 100
elif fromm == 'mm':
    num = num / 1000

if too == 'cm':
    num = num * 100
elif too == 'mm':
    num = num * 1000

print(f'{num:.3f}')