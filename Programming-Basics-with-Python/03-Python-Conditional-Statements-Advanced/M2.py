juniors = int(input())
seniors = int(input())
type_of = input()

juniors_tax = 0
seniors_tax = 0
if type_of == 'trail':
    juniors_tax = juniors * 5.50
    seniors_tax = seniors * 7.00
elif type_of == 'cross-country':
    if juniors + seniors >= 50:
        juniors_tax = juniors * (8.00 * 0.75)
        seniors_tax = seniors * (9.50 * 0.75)
    else:
        juniors_tax = juniors * 8.00
        seniors_tax = seniors * 9.50
elif type_of == 'downhill':
    juniors_tax = juniors * 12.25
    seniors_tax = seniors * 13.75
else:
    juniors_tax = juniors * 20.00
    seniors_tax = seniors * 21.50


total = (juniors_tax + seniors_tax) * 0.95

print(f"{total:.2f}")