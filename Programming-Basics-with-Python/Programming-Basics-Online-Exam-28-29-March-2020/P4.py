import math

record = float(input())
distance = float(input())
sec_per_meter = float(input())

total_sec = distance * sec_per_meter
delay = math.floor(distance / 50) * 30
total_sec += delay

diff = abs(total_sec - record)

if record <= total_sec:
    print(f"No! He was {diff:.2f} seconds slower.")
else:
    print(f"Yes! The new record is {total_sec:.2f} seconds.")