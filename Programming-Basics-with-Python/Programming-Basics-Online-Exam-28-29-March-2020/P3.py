min_walk = int(input())
walks = int(input())
calories = int(input())

min_walk_per_day = min_walk * walks
burn_calories = min_walk_per_day * 5

if (calories / 2) <= burn_calories:
    print(f"Yes, the walk for your cat is enough. Burned calories per day: {burn_calories}.")
else:
    print(f"No, the walk for your cat is not enough. Burned calories per day: {burn_calories}.")