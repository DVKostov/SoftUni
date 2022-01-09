student = 0
standard = 0
kids = 0
student_movie = 0
standard_movie = 0
kids_movie = 0
total = 0
total_movie = 0
while True:
    movie = input()
    if movie == 'Finish':
        total = standard + student + kids
        print(f"Total tickets: {total}")
        pro_student = (student / total) * 100
        pro_standard = (standard / total) * 100
        pro_kids = (kids / total) * 100
        print(f"{pro_student:.2f}% student tickets.")
        print(f"{pro_standard:.2f}% standard tickets.")
        print(f"{pro_kids:.2f}% kids tickets.")
        break
    free = int(input())
    for i in range(0, free):
        ticket = input()
        if ticket == 'student':
            student += 1
            student_movie += 1
        elif ticket == 'standard':
            standard += 1
            standard_movie += 1
        elif ticket == 'kid':
            kids += 1
            kids_movie += 1
        else:
            break
    total_movie = student_movie + standard_movie + kids_movie
    pro = (total_movie / free) * 100
    print(f"{movie} - {pro:.2f}% full.")
    student_movie = 0
    standard_movie = 0
    kids_movie = 0
    total_movie = 0