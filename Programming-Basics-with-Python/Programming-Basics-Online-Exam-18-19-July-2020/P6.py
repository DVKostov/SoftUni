start = int(input())
end = int(input())
num11 = ''
num22 = ''
num1 = str(start)
for i in range(4):
    nn = int(num1[i])
    if nn % 2 == 0:
        nn += 1
    nn = str(nn)
    num11 += nn
num2 = str(end)
for i in range(4):
    nn = int(num2[i])
    if nn % 2 == 0:
        nn -= 1
    nn = str(nn)
    num22 += nn
n1 = 0
n2 = 0
n3 = 0
n4 = 0

for q in range(int(num11[0]), int(num22[0]) + 1):
    if q % 2 != 0:
        n1 = q
    else:
        continue
    for w in range(int(num11[1]), int(num22[1]) + 1):
        if w % 2 != 0:
            n2 = w
        else:
            continue
        for e in range(int(num11[2]), int(num22[2]) + 1):
            if e % 2 != 0:
                n3 = e
            else:
                continue
            for r in range(int(num11[3]), int(num22[3]) + 1):
                if r % 2 != 0:
                    n4 = r
                else:
                    continue
                print(f"{n1}{n2}{n3}{n4}", end=" ")
