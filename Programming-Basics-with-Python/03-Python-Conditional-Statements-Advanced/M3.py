chrysanthemums = int(input())
roses = int(input())
tulips = int(input())
total_count = chrysanthemums + roses + tulips
total_price = 0
season = input()
holiday = False
h = input()
if h == "Y":
    holiday = True
chrysanthemums_prc = 0
roses_prc = 0
tulips_prc = 0

if season == "Spring" or season == "Summer":
    chrysanthemums_prc = chrysanthemums * 2
    roses_prc = roses * 4.1
    tulips_prc = tulips * 2.5
else:
    chrysanthemums_prc = chrysanthemums * 3.75
    roses_prc = roses * 4.5
    tulips_prc = tulips * 4.15

total_price = chrysanthemums_prc + roses_prc + tulips_prc

if holiday:
    total_price *= 1.15

if season == "Spring" and tulips > 7:
    total_price *= 0.95

if season == "Winter" and roses >= 10:
    total_price *= 0.9

if total_count > 20:
    total_price *= 0.8

total_price += 2

print(f"{total_price:.2f}")
