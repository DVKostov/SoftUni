high_need = int(input())
high = high_need - 30
jumps = 0
while True:
    fails = 0
    while True:
        line = int(input())
        jumps += 1
        if line <= high:
            fails += 1
            if fails == 3:
                break
        else:
            break
    if fails == 3:
        print(f"Tihomir failed at {high}cm after {jumps} jumps.")
        break
    if high == high_need:
        print(f"Tihomir succeeded, he jumped over {high}cm after {jumps} jumps.")
        break
    high += 5