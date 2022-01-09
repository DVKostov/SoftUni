exam_hour = int(input())
exam_minutes = int(input())
arrival_hour = int(input())
arrival_minutes = int(input())

exam_time_m = exam_minutes + (exam_hour * 60)
arrival_time_m = arrival_minutes + (arrival_hour * 60)

diff_time_m = abs(exam_time_m - arrival_time_m)
diff_hour = diff_time_m // 60
diff_minutes = diff_time_m % 60

zero = ''
if diff_minutes < 10:
    zero = '0'

if exam_time_m < arrival_time_m:
    print('Late')
    if diff_hour == 0:
        print(f"{diff_minutes} minutes after the start")
    else:
        print(f"{diff_hour}:{zero}{diff_minutes} hours after the start")
else:
    if diff_time_m <= 30:
        print('On time')
        if diff_time_m > 0:
            print(f"{diff_minutes} minutes before the start")
    else:
        print('Early')
        if diff_hour == 0:
            print(f"{diff_minutes} minutes before the start")
        else:
            print(f"{diff_hour}:{zero}{diff_minutes} hours before the start")