eggs = int(input())
sold = 0

while True:
    action = input()
    if action == 'Close':
        print("Store is closed!")
        print(f"{sold} eggs sold.")
        break
    elif action == 'Fill':
        eggs += int(input())
    else:
        to_sell = int(input())
        if eggs < to_sell:
            print("Not enough eggs in store!")
            print(f"You can buy only {eggs}.")
            break
        else:
            eggs -= to_sell
            sold += to_sell
