first_sec = int(input())
second_sec = int(input())
third_sec = int(input())

total_sec = first_sec + second_sec + third_sec

seconds = total_sec % 60
minutes = int((total_sec - seconds) / 60)

if seconds < 10:
    print(f"{minutes}:0{seconds}")
else:
    print(f"{minutes}:{seconds}")