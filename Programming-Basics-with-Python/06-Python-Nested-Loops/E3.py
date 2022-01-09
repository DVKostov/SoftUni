prime = 0
non_prime = 0
is_prime = True

while True:
    is_prime = True
    n = input()
    if n == "stop":
        break
    num = int(n)
    if num < 0:
        print("Number is negative.")
        continue
    for i in range(2, num):
        if (num > 1) and (num % i == 0):
            is_prime = False
    if is_prime:
        prime += num
    else:
        non_prime += num

print(f"Sum of all prime numbers is: {prime}")
print(f"Sum of all non prime numbers is: {non_prime}")
