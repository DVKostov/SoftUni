age = int(input())
wash_prc = float(input())
toy_prc = int(input())
birth_sum = 10
toys_qty = 0
total_sum = 0

for i in range(1, age + 1):
    if i % 2 == 0:
        total_sum = total_sum + birth_sum - 1
        birth_sum += 10
    else:
        toys_qty += 1

total_sum = total_sum + (toys_qty * toy_prc)

diff = abs(wash_prc - total_sum)

if total_sum >= wash_prc:
    print(f'Yes! {diff:.2f}')
else:
    print(f'No! {diff:.2f}')

