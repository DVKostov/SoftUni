num1 = int(input())
num2 = int(input())
action = str(input())

res = 0
even_odd = 'odd'

if action == '/':
    if num2 == 0:
        print(f"Cannot divide {num1} by zero")
    else:
        res = num1 / num2
        print(f"{num1} / {num2} = {res:.2f}")
elif action == '%':
    if num2 == 0:
        print(f"Cannot divide {num1} by zero")
    else:
        res = num1 % num2
        print(f"{num1} % {num2} = {res}")
elif action == '+':
    res = num1 + num2
    if res % 2 == 0: even_odd = 'even'
    print(f"{num1} + {num2} = {res} - {even_odd}")
elif action == '-':
    res = num1 - num2
    if res % 2 == 0: even_odd = 'even'
    print(f"{num1} - {num2} = {res} - {even_odd}")
elif action == '*':
    res = num1 * num2
    if res % 2 == 0: even_odd = 'even'
    print(f"{num1} * {num2} = {res} - {even_odd}")
