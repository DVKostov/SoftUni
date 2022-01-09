guests = int(input())
prc_per_person = float(input())
budget = float(input())

budget *= 0.9

if 10 <= guests <= 15:
    prc_per_person *= 0.85
elif 15 < guests <= 20:
    prc_per_person *= 0.8
elif guests > 20:
    prc_per_person *= 0.75

budget -= (prc_per_person * guests)

if budget >= 0:
    print(f"It is party time! {budget:.2f} leva left.")
else:
    print(f"No party! {abs(budget):.2f} leva needed.")