cash = float(input())
sex = input()
age = int(input())
sport = input()

sport_prc = 0

if sex == 'm':
    if sport == 'Gym':
        sport_prc = 42
    elif sport == 'Boxing':
        sport_prc = 41
    elif sport == 'Yoga':
        sport_prc = 45
    elif sport == 'Zumba':
        sport_prc = 34
    elif sport == 'Dances':
        sport_prc = 51
    elif sport == 'Pilates':
        sport_prc = 39
else:
    if sport == 'Gym':
        sport_prc = 35
    elif sport == 'Boxing':
        sport_prc = 37
    elif sport == 'Yoga':
        sport_prc = 42
    elif sport == 'Zumba':
        sport_prc = 31
    elif sport == 'Dances':
        sport_prc = 53
    elif sport == 'Pilates':
        sport_prc = 37

if age <= 19:
    sport_prc *= 0.8

diff = abs(cash - sport_prc)
if cash >= sport_prc:
    print(f"You purchased a 1 month pass for {sport}.")
else:
    print(f"You don't have enough money! You need ${diff:.2f} more.")