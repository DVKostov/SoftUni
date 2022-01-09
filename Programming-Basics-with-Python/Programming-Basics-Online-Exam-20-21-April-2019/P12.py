customers = int(input())
total = 0
for i in range(customers):
    items_count = 0
    customers_total = 0
    while True:
        product = input()
        if product == 'Finish':
            if items_count % 2 == 0:
                customers_total *= 0.8
            total += customers_total
            print(f"You purchased {items_count} items for {customers_total:.2f} leva.")
            break
        elif product == 'basket':
            items_count += 1
            customers_total += 1.5
        elif product == 'wreath':
            items_count += 1
            customers_total += 3.8
        else:
            items_count += 1
            customers_total += 7

print(f"Average bill per client is: {(total / customers):.2f} leva.")