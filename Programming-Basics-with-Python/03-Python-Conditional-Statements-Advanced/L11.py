fruit = str(input())
day = str(input())
qty = float(input())
is_error = True
prc = 0.00

if day == 'Saturday' or day == 'Sunday':
    if fruit == 'banana':
        prc = qty * 2.7
        is_error = False
    elif fruit == 'apple':
        prc = qty * 1.25
        is_error = False
    elif fruit == 'orange':
        prc = qty * 0.9
        is_error = False
    elif fruit == 'grapefruit':
        prc = qty * 1.6
        is_error = False
    elif fruit == 'kiwi':
        prc = qty * 3
        is_error = False
    elif fruit == 'pineapple':
        prc = qty * 5.6
        is_error = False
    elif fruit == 'grapes':
        prc = qty * 4.2
        is_error = False
elif day == 'Monday' or day == 'Tuesday' or day == 'Wednesday' or day == 'Thursday' or day == 'Friday':
    if fruit == 'banana':
        prc = qty * 2.5
        is_error = False
    elif fruit == 'apple':
        prc = qty * 1.2
        is_error = False
    elif fruit == 'orange':
        prc = qty * 0.85
        is_error = False
    elif fruit == 'grapefruit':
        prc = qty * 1.45
        is_error = False
    elif fruit == 'kiwi':
        prc = qty * 2.7
        is_error = False
    elif fruit == 'pineapple':
        prc = qty * 5.5
        is_error = False
    elif fruit == 'grapes':
        prc = qty * 3.85
        is_error = False

if is_error:
    print('error')
else:
    print(f"{prc:.2f}")