chicken = int(input())
fish = int(input())
vegan = int(input())

total = (10.35 * chicken) + (12.40 * fish) + (8.15 * vegan)
total *= 1.2
total += 2.5

print(f"Total: {total:.2f}")