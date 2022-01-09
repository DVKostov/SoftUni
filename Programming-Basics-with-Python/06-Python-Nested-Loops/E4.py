jury = int(input())
total = 0
count = 0
while True:
    total_grade = 0
    presentation = input()
    if presentation == "Finish":
        break
    for i in range(jury):
        grade = float(input())
        total_grade += grade
        total += grade
        count += 1
        avg_grade = total_grade / jury
    print(f"{presentation} - {avg_grade:.2f}.")
avg = total / count
print(f"Student's final assessment is {avg:.2f}.")