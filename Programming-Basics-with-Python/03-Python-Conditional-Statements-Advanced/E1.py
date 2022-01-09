type_movie = str(input())
rows = int(input())
columns = int(input())

sits = rows * columns
total = 0

if type_movie == 'Premiere':
    total = sits * 12
elif type_movie == 'Normal':
    total = sits * 7.5
elif type_movie == 'Discount':
    total = sits * 5

print(f"{total:.2f} leva")