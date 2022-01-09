n = int(input())

even_sum = 0
odd_sum = 0

for i in range(1, n + 1):
    if i % 2 == 0:
        even_sum += int(input())
    else:
        odd_sum += int(input())

diff = abs(even_sum - odd_sum)

if even_sum == odd_sum:
    print('Yes')
    print(f"Sum = {even_sum}")
else:
    print('No')
    print(f"Diff = {diff}")