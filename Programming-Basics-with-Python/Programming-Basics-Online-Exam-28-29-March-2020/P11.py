days = int(input())
money_total = 0
win_total = 0
lose_total = 0
for i in range(days):
    money_day = 0
    win_day = 0
    lose_day = 0
    while True:
        sport = input()
        if sport == 'Finish':
            win_total += win_day
            lose_total += lose_day
            break
        score = input()
        if score == 'win':
            money_day += 20
            win_day += 1
        else:
            lose_day += 1
    if win_day > lose_day:
        money_day *= 1.1
    money_total += money_day

if win_total > lose_total:
    money_total *= 1.2
    print(f"You won the tournament! Total raised money: {money_total:.2f}")
else:
    print(f"You lost the tournament! Total raised money: {money_total:.2f}")