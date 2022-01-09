import math

breads = int(input())
total_sugar = 0
total_flour = 0
max_sugar = 0
max_flour = 0

for i in range(breads):
    sugar = int(input())
    flour = int(input())
    total_sugar += sugar
    total_flour += flour
    if max_sugar < sugar:
        max_sugar = sugar
    if max_flour < flour:
        max_flour = flour

sugar_need = math.ceil(total_sugar / 950)
flour_need = math.ceil(total_flour / 750)

print(f"Sugar: {sugar_need}")
print(f"Flour: {flour_need}")
print(f"Max used flour is {max_flour} grams, max used sugar is {max_sugar} grams.")