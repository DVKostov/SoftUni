import math

year = str(input())
holidays = int(input())
weekends = int(input())

sofia_games = (48 - weekends) * (3/4)
holidays_games = holidays * (2/3)

total_games = sofia_games + holidays_games + weekends

if year == 'leap':
    total_games = total_games * 1.15

print(math.floor(total_games))

