import math
income = float(input())
avg_grade = float(input())
min_salary = float(input())

social = 0
excellent = 0

if income < min_salary and avg_grade > 4.5:
    social = min_salary * 0.35
if avg_grade >= 5.5:
    excellent = avg_grade * 25

if social + excellent == 0:
    print('You cannot get a scholarship!')
elif social > excellent:
    print(f'You get a Social scholarship {math.floor(social)} BGN')
else:
    print(f'You get a scholarship for excellent results {math.floor(excellent)} BGN')