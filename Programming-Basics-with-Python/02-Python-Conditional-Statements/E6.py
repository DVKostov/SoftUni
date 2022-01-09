budget = float(input())
people = int(input())
prc = float(input())

decor_sum = budget * 0.1
dress_sum = people * prc

if people > 150:
    dress_sum = dress_sum * 0.9

total_sum = decor_sum + dress_sum

diff = abs(budget - total_sum)

if budget >= total_sum:
    print('Action!')
    print(f'Wingard starts filming with {diff:.2f} leva left.')
else:
    print('Not enough money!')
    print(f'Wingard needs {diff:.2f} leva more.')