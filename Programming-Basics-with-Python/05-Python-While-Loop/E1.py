the_book = input()
book = input()
count_books = 0

while book != 'No More Books':

    if book == the_book:
        break
    count_books += 1
    book = input()

if book == the_book:
    print(f"You checked {count_books} books and found it.")
else:
    print("The book you search is not here!")
    print(f"You checked {count_books} books.")
