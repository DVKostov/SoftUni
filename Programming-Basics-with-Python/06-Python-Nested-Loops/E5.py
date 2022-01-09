n = int(input())
l = int(input()) + 96
a = ''
s = ''
for q in range(1, n + 1):
    for w in range(1, n + 1):
        for e in range(97, l + 1):
            a = chr(e)
            for r in range(97, l + 1):
                s = chr(r)
                for t in range(max(q, w) + 1, n + 1):
                    print(f"{q}{w}{a}{s}{t}", end=' ')