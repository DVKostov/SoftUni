BerriesPRC = float(input())
BananaQTY = float(input())
OrangeQTY = float(input())
RaspberriesQTY = float(input())
BerriesQTY = float(input())

BerriesSUM = BerriesQTY * BerriesPRC
RaspberriesPRC = BerriesPRC * 0.5
RaspberriesSUM = RaspberriesQTY * RaspberriesPRC
BananaPRC = RaspberriesPRC * 0.2
BananaSUM = BananaQTY * BananaPRC
OrangePRC = RaspberriesPRC * 0.6
OrangeSUM = OrangeQTY * OrangePRC


Total = BerriesSUM + BananaSUM + OrangeSUM + RaspberriesSUM

print(Total)


