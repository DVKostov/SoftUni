import sys

n = input()
maxNum = -sys.maxsize
while n != 'Stop':
    n = int(n)
    if maxNum < n:
        maxNum = n
    n = input()
print(maxNum)