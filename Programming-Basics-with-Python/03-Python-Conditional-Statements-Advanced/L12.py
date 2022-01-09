city = str(input())
sales = float(input())
res = 0
is_error = False

if 0 <= sales <= 500:
    if city == 'Sofia':
        res = sales * 0.05
    elif city == 'Varna':
        res = sales * 0.045
    elif city == 'Plovdiv':
        res = sales * 0.055
elif 500 < sales <= 1000:
    if city == 'Sofia':
        res = sales * 0.07
    elif city == 'Varna':
        res = sales * 0.075
    elif city == 'Plovdiv':
        res = sales * 0.08
    else:
        is_error = True
elif 1000 < sales <= 10000:
    if city == 'Sofia':
        res = sales * 0.08
    elif city == 'Varna':
        res = sales * 0.1
    elif city == 'Plovdiv':
        res = sales * 0.12
    else:
        is_error = True
elif sales > 10000:
    if city == 'Sofia':
        res = sales * 0.12
    elif city == 'Varna':
        res = sales * 0.13
    elif city == 'Plovdiv':
        res = sales * 0.145
    else:
        is_error = True
else:
    is_error = True

if is_error:
    print('error')
else:
    print(f"{res:.2f}")