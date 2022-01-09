fruit = input()
set_quy = input()
order = int(input())
prc = 0
if set_quy == 'small':
    set_quy = 2
    if fruit == 'Watermelon':
        prc = 56
    elif fruit == 'Mango':
        prc = 36.66
    elif fruit == 'Pineapple':
        prc = 42.10
    elif fruit == 'Raspberry':
        prc = 20
else:
    set_quy = 5
    if fruit == 'Watermelon':
        prc = 28.7
    elif fruit == 'Mango':
        prc = 19.6
    elif fruit == 'Pineapple':
        prc = 24.8
    elif fruit == 'Raspberry':
        prc = 15.2
order *= set_quy
total = prc * order

if total > 1000:
    total /= 2
elif total >= 400:
    total *= 0.85

print(f"{total:.2f} lv.")


