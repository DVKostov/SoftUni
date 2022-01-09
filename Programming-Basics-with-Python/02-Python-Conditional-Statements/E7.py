import math
record = float(input())
dist = float(input())
speed = float(input())

time = (dist * speed)
delays = math.floor((dist / 15)) * 12.5
time = time + delays
diff = abs(record - time)

if time < record:
    print(f'Yes, he succeeded! The new world record is {time:.2f} seconds.')
else:
    print(f'No, he failed! He was {diff:.2f} seconds slower.')