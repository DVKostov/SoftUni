import math
days = int(input())
food = float(input())
dog_eat_total = 0
cat_eat_total = 0
dog_eat_day = 0
cat_eat_day = 0
biscuit = 0

for day in range(1, days + 1):
    dog_eat_day = int(input())
    cat_eat_day = int(input())
    dog_eat_total += dog_eat_day
    cat_eat_total += cat_eat_day
    if day % 3 == 0:
        biscuit += (dog_eat_day + cat_eat_day) * 0.1

biscuit = round(biscuit)
total_eat = dog_eat_total + cat_eat_total
dog_pro = (dog_eat_total / total_eat) * 100
cat_pro = (cat_eat_total / total_eat) * 100
tot_pro = (total_eat / food) * 100
print(f"Total eaten biscuits: {biscuit}gr.")
print(f"{tot_pro:.2f}% of the food has been eaten.")
print(f"{dog_pro:.2f}% eaten from the dog.")
print(f"{cat_pro:.2f}% eaten from the cat.")
