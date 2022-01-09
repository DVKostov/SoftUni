bread = int(input())
set_eggs = int(input())
cookies = int(input())

total = (bread * 3.2) + (set_eggs * 4.35) + (cookies * 5.4) + ((set_eggs * 12) * 0.15)

print(f"{total:.2f}")