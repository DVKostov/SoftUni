n = int(input())

for digit_1 in range(1, 10):
    for digit_2 in range(1, 10):
        for digit_3 in range(1, 10):
            for digit_4 in range(1, 10):
                if n % digit_1 == 0 and n % digit_2 == 0 and n % digit_3 == 0 and n % digit_4 == 0:
                    print(f"{digit_1}{digit_2}{digit_3}{digit_4}", end=' ')
