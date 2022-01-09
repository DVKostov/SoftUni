trip_prc = float(input())
puzzle_qty = int(input())
dolls_qty = int(input())
bears_qty = int(input())
minion_qty = int(input())
truck_qty = int(input())

total_qtu = puzzle_qty + dolls_qty + bears_qty + minion_qty + truck_qty

total_sum = puzzle_qty * 2.6 + dolls_qty * 3 + bears_qty * 4.1 + minion_qty * 8.2 + truck_qty * 2

if total_qtu >= 50:
    total_sum = total_sum * 0.75

total_sum = total_sum * 0.9

diff = abs(trip_prc - total_sum)

if total_sum >= trip_prc:
    print(f"Yes! {diff:.2f} lv left.")
else:
    print(f"Not enough money! {diff:.2f} lv needed.")