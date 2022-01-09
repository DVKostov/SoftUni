budget = float(input())
season = input()
car = ''
price = 0
car_class = ''
if budget <= 100:
    car_class = 'Economy class'
    if season == "Summer":
        car = 'Cabrio'
        price = budget * 0.35
    else:
        car = 'Jeep'
        price = budget * 0.65
elif 10 < budget <= 500:
    car_class = 'Compact class'
    if season == "Summer":
        car = 'Cabrio'
        price = budget * 0.45
    else:
        car = 'Jeep'
        price = budget * 0.80
else:
    car_class = 'Luxury class'
    car = 'Jeep'
    price = budget * 0.90

print(car_class)
print(f"{car} - {price:.2f}")