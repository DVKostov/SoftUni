fails_avl = int(input())
total = 0
count = 0
fails = 0
while True:

    problem = input()
    if problem == 'Enough':
        print(f"Average score: {avg:.2f}")
        print(f"Number of problems: {count}")
        print(f"Last problem: {current_problem}")
        break
    grade = int(input())
    count += 1
    total += grade
    avg = total / count
    if grade <= 4:
        fails += 1
    if fails == fails_avl:
        print(f"You need a break, {fails} poor grades.")
        break
    current_problem = problem