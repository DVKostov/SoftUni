season = input()
group_type = input()
students = int(input())
nights = int(input())
sport = ''
students_nights = students * nights
total = 0

if group_type == 'girls':
    if season == 'Winter':
        sport = 'Gymnastics'
        total = students_nights * 9.6
    elif season == 'Spring':
        sport = 'Athletics'
        total = students_nights * 7.2
    else:
        sport = 'Volleyball'
        total = students_nights * 15
elif group_type == 'boys':
    if season == 'Winter':
        sport = 'Judo'
        total = students_nights * 9.6
    elif season == 'Spring':
        sport = 'Tennis'
        total = students_nights * 7.2
    else:
        sport = 'Football'
        total = students_nights * 15
else:
    if season == 'Winter':
        sport = 'Ski'
        total = students_nights * 10
    elif season == 'Spring':
        sport = 'Cycling'
        total = students_nights * 9.5
    else:
        sport = 'Swimming'
        total = students_nights * 20

if students >= 50:
    total *= 0.5
elif students >= 20:
    total *= 0.85
elif students >= 10:
    total *= 0.95

print(f"{sport} {total:.2f} lv.")