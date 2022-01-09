Days = int(input())
People = int(input())
Cakes = int(input())
Wof = int(input())
Pine = int(input())

CakesSum = Cakes * 45
WofSum = Wof * 5.8
PineSum = Pine * 3.2

TotalSum = CakesSum + WofSum + PineSum

Total1 = TotalSum * People * Days
Raz = Total1 * (1 / 8)
Total2 = Total1 - Raz
print(Total2)
