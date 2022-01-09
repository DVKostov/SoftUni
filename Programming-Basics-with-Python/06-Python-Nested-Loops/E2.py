n1 = int(input())
n2 = int(input())
for i in range(n1, n2 + 1):
    even = 0
    odd = 0
    i_to_str = str(i)
    for index, digit in enumerate(i_to_str):
        if index % 2 == 0:
           even += int(digit)
        else:
            odd += int(digit)
    if even == odd:
        print(i, end=" ")