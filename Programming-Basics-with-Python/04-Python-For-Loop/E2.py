import sys
n = int(input())
max_num = -sys.maxsize
total = 0
for i in range(1, n + 1):
    num = int(input())
    if max_num < num:
        max_num = num
    total += num

diff = abs(total - max_num - max_num)

if (total - max_num) == max_num:
    print('Yes')
    print(f'Sum = {max_num}')
else:
    print('No')
    print(f'Diff = {diff}')
