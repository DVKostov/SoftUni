import math
fig_type = str(input())
res = float()
if fig_type == 'square':
    res = math.pow(float(input()), 2)
elif fig_type == 'rectangle':
    res = float(input()) * float(input())
elif fig_type == 'circle':
    res = math.pi * math.pow(float(input()), 2)
elif fig_type == 'triangle':
    res = (float(input()) * float(input())) / 2
print(f"{res:.3f}")