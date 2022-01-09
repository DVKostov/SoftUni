--Problem1

SELECT [Email Provider], COUNT(Username) AS [Number Of Users] FROM (
SELECT 
Username, 
SUBSTRING(Email, CHARINDEX('@',Email) + 1, LEN(Email)) AS [Email Provider]
FROM Users) AS tmp
GROUP BY [Email Provider]
ORDER BY [Number Of Users] DESC, [Email Provider] ASC

--Problem2

SELECT
g.[Name] AS Game,
gt.[Name] AS [Game Type],
u.Username,
ug.[Level],
ug.Cash,
c.[Name]
FROM Games as g
JOIN GameTypes AS gt ON g.GameTypeId = gt.Id
JOIN UsersGames AS ug ON g.Id = ug.GameId
JOIN Users AS u ON ug.UserId = u.Id
JOIN Characters AS c ON ug.CharacterId = c.Id
ORDER BY ug.[Level] DESC, u.Username ASC, g.[Name] ASC

--Problem3

SELECT 
u.Username,
g.[Name] AS Game,
COUNT(i.Id) AS [Items Count],
SUM(i.Price) AS [Items Price]
FROM Games AS g
JOIN UsersGames AS ug ON g.Id = ug.GameId
JOIN Users AS u ON ug.UserId = u.Id
JOIN UserGameItems AS ugi ON ug.Id = ugi.UserGameId
JOIN Items AS i ON ugi.ItemId = i.Id
GROUP BY u.Username, g.[Name]
HAVING COUNT(i.Id) >= 10
ORDER BY [Items Count] DESC, [Items Price] DESC, u.Username ASC
 
--Problem4

SELECT * FROM Users AS u
JOIN UsersGames AS ug ON u.Id = ug.UserId

GO
SELECT * FROM [Statistics] AS s
LEFT JOIN GameTypes AS gt ON s.Id = gt.BonusStatsId
LEFT JOIN Characters AS c ON s.Id = c.StatisticId
LEFT JOIN Items AS i ON s.Id = i.StatisticId
SELECT * FROM GameTypes

--Problem5

SELECT i.[Name], i.Price, i.MinLevel, 
		s.Strength, s.Defence, s.Speed, s.Luck, s.Mind 
FROM items AS i
JOIN [Statistics] AS s ON i.StatisticId = s.Id
CROSS JOIN (SELECT AVG(s.Speed) AS [as], AVG(s.Luck) AS al, AVG(s.Mind) am 
FROM items AS i
JOIN [Statistics] AS s ON i.StatisticId = s.Id) AS t
WHERE 
		s.Speed > t.[as] AND
		s.Luck > t.al AND
		s.Mind > t.am
ORDER BY i.[Name]

--Problem6

SELECT i.[Name] AS Item, i.Price, i.MinLevel, gt.[Name] AS [Forbidden Game Type]
FROM Items AS i
LEFT JOIN GameTypeForbiddenItems AS f ON i.Id = f.ItemId
LEFT JOIN GameTypes AS gt ON f.GameTypeId = gt.Id
ORDER BY gt.[Name] DESC, i.[Name] ASC

--Problem7

INSERT INTO UserGameItems (ItemId, UserGameId)
VALUES
((SELECT id FROM Items WHERE [Name] = 'Blackguard'),
(SELECT ug.Id FROM Users AS u
JOIN UsersGames AS ug ON u.Id = ug.UserId
JOIN Games AS g ON ug.GameId = g.Id
WHERE u.Username = 'Alex' AND g.[Name] = 'Edinburgh'))

UPDATE UsersGames
SET Cash = Cash - (SELECT Price FROM Items WHERE [Name] = 'Blackguard')
WHERE Id = (SELECT ug.Id FROM Users AS u
JOIN UsersGames AS ug ON u.Id = ug.UserId
JOIN Games AS g ON ug.GameId = g.Id
WHERE u.Username = 'Alex' AND g.[Name] = 'Edinburgh')

INSERT INTO UserGameItems (ItemId, UserGameId)
VALUES
((SELECT id FROM Items WHERE [Name] = 'Bottomless Potion of Amplification'),
(SELECT ug.Id FROM Users AS u
JOIN UsersGames AS ug ON u.Id = ug.UserId
JOIN Games AS g ON ug.GameId = g.Id
WHERE u.Username = 'Alex' AND g.[Name] = 'Edinburgh'))

UPDATE UsersGames
SET Cash = Cash - (SELECT Price FROM Items WHERE [Name] = 'Bottomless Potion of Amplification')
WHERE Id = (SELECT ug.Id FROM Users AS u
JOIN UsersGames AS ug ON u.Id = ug.UserId
JOIN Games AS g ON ug.GameId = g.Id
WHERE u.Username = 'Alex' AND g.[Name] = 'Edinburgh')

INSERT INTO UserGameItems (ItemId, UserGameId)
VALUES
((SELECT id FROM Items WHERE [Name] = 'Eye of Etlich (Diablo III)'),
(SELECT ug.Id FROM Users AS u
JOIN UsersGames AS ug ON u.Id = ug.UserId
JOIN Games AS g ON ug.GameId = g.Id
WHERE u.Username = 'Alex' AND g.[Name] = 'Edinburgh'))

UPDATE UsersGames
SET Cash = Cash - (SELECT Price FROM Items WHERE [Name] = 'Eye of Etlich (Diablo III)')
WHERE Id = (SELECT ug.Id FROM Users AS u
JOIN UsersGames AS ug ON u.Id = ug.UserId
JOIN Games AS g ON ug.GameId = g.Id
WHERE u.Username = 'Alex' AND g.[Name] = 'Edinburgh')

INSERT INTO UserGameItems (ItemId, UserGameId)
VALUES
((SELECT id FROM Items WHERE [Name] = 'Gem of Efficacious Toxin'),
(SELECT ug.Id FROM Users AS u
JOIN UsersGames AS ug ON u.Id = ug.UserId
JOIN Games AS g ON ug.GameId = g.Id
WHERE u.Username = 'Alex' AND g.[Name] = 'Edinburgh'))

UPDATE UsersGames
SET Cash = Cash - (SELECT Price FROM Items WHERE [Name] = 'Gem of Efficacious Toxin')
WHERE Id = (SELECT ug.Id FROM Users AS u
JOIN UsersGames AS ug ON u.Id = ug.UserId
JOIN Games AS g ON ug.GameId = g.Id
WHERE u.Username = 'Alex' AND g.[Name] = 'Edinburgh')

INSERT INTO UserGameItems (ItemId, UserGameId)
VALUES
((SELECT id FROM Items WHERE [Name] = 'Golden Gorget of Leoric'),
(SELECT ug.Id FROM Users AS u
JOIN UsersGames AS ug ON u.Id = ug.UserId
JOIN Games AS g ON ug.GameId = g.Id
WHERE u.Username = 'Alex' AND g.[Name] = 'Edinburgh'))

UPDATE UsersGames
SET Cash = Cash - (SELECT Price FROM Items WHERE [Name] = 'Golden Gorget of Leoric')
WHERE Id = (SELECT ug.Id FROM Users AS u
JOIN UsersGames AS ug ON u.Id = ug.UserId
JOIN Games AS g ON ug.GameId = g.Id
WHERE u.Username = 'Alex' AND g.[Name] = 'Edinburgh')

INSERT INTO UserGameItems (ItemId, UserGameId)
VALUES
((SELECT id FROM Items WHERE [Name] = 'Hellfire Amulet'),
(SELECT ug.Id FROM Users AS u
JOIN UsersGames AS ug ON u.Id = ug.UserId
JOIN Games AS g ON ug.GameId = g.Id
WHERE u.Username = 'Alex' AND g.[Name] = 'Edinburgh'))

UPDATE UsersGames
SET Cash = Cash - (SELECT Price FROM Items WHERE [Name] = 'Hellfire Amulet')
WHERE Id = (SELECT ug.Id FROM Users AS u
JOIN UsersGames AS ug ON u.Id = ug.UserId
JOIN Games AS g ON ug.GameId = g.Id
WHERE u.Username = 'Alex' AND g.[Name] = 'Edinburgh')


SELECT  
u.Username,
g.[Name],
ug.Cash,
i.[Name] AS [Item Name]
FROM Users AS u
JOIN UsersGames AS ug ON u.Id = ug.UserId
JOIN Games AS g ON ug.GameId = g.Id
JOIN UserGameItems AS ugi ON ug.Id = ugi.UserGameId
JOIN Items AS i ON ugi.ItemId = i.Id
WHERE g.[Name] = 'Edinburgh'