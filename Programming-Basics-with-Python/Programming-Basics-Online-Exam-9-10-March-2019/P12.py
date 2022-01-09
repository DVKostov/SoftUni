wins = 0
loses = 0

while True:
    tournament = input()
    if tournament == 'End of tournaments':
        break
    games = int(input())
    for i in range(1, games + 1):
        we_score = int(input())
        they_score = int(input())
        if we_score > they_score:
            wins += 1
            print(f"Game {i} of tournament {tournament}: win with {we_score - they_score} points.")
        else:
            loses += 1
            print(f"Game {i} of tournament {tournament}: lost with {they_score - we_score} points.")

total_games = wins + loses
print(f"{((wins / total_games) * 100):.2f}% matches win")
print(f"{((loses / total_games) * 100):.2f}% matches lost")