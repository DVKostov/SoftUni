eggs = int(input())
red = 0
orange = 0
blue = 0
green = 0

for i in range(1, eggs + 1):
    color = input()
    if color == 'red':
        red += 1
    elif color == 'orange':
        orange += 1
    elif color == 'blue':
        blue += 1
    else:
        green += 1


print(f"Red eggs: {red}")
print(f"Orange eggs: {orange}")
print(f"Blue eggs: {blue}")
print(f"Green eggs: {green}")

if red > max(orange, blue, green):
    print(f"Max eggs: {red} -> red")
elif orange > max(red, blue, green):
    print(f"Max eggs: {orange} -> orange")
elif blue > max(red, orange, green):
    print(f"Max eggs: {blue} -> blue")
elif green > max(red, orange, blue):
    print(f"Max eggs: {green} -> green")