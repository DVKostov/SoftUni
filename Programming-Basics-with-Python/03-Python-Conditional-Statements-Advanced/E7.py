month = str(input())
nights = int(input())

studio_prc = 0
apartment_prc = 0
discount_studio = 0
discount_apartment = 0

if month == 'May' or month == 'October':
    studio_prc = 50
    apartment_prc = 65
    if nights > 14:
        discount_studio = 0.3
    elif nights > 7:
        discount_studio = 0.05
elif month == 'June' or month == 'September':
    studio_prc = 75.2
    apartment_prc = 68.7
    if nights > 14:
        discount_studio = 0.2
else:
    studio_prc = 76
    apartment_prc = 77

if nights > 14:
    discount_apartment = 0.1

studio_total = (studio_prc * nights) * (1 - discount_studio)
apartment_total = (apartment_prc * nights) * (1 - discount_apartment)

print(f"Apartment: {apartment_total:.2f} lv.")
print(f"Studio: {studio_total:.2f} lv.")
