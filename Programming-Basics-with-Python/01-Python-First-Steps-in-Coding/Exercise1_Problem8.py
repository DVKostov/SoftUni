Dalj = int(input())
Shir = int(input())
Vis = int(input())
Fill = float(input()) / 100

Volume = Dalj * Shir * Vis
VolumeL = Volume * 0.001
Total = VolumeL * (1 - Fill)

print(Total)
