--Problem1

CREATE TABLE Cities (
	Id INT PRIMARY KEY IDENTITY,
	[Name] NVARCHAR(20) NOT NULL,
	CountryCode VARCHAR(2) NOT NULL,
	)

CREATE TABLE Hotels (
	Id INT PRIMARY KEY IDENTITY,
	[Name] NVARCHAR(30) NOT NULL,
	CityId INT FOREIGN KEY REFERENCES Cities(Id) NOT NULL,
	EmployeeCount INT NOT NULL,
	BaseRate DECIMAL(18,2)
	)

CREATE TABLE Rooms (
	Id INT PRIMARY KEY IDENTITY,
	Price  DECIMAL(18,2) NOT NULL,
	[Type] NVARCHAR(20) NOT NULL,
	Beds INT NOT NULL,
	HotelId INT FOREIGN KEY REFERENCES Hotels(Id) NOT NULL,
	)

CREATE TABLE Trips (
	Id INT PRIMARY KEY IDENTITY,
	RoomId INT FOREIGN KEY REFERENCES Rooms(Id) NOT NULL,
	BookDate DATETIME2 NOT NULL,
	ArrivalDate DATETIME2 NOT NULL,
	ReturnDate DATETIME2 NOT NULL,
	CancelDate DATETIME2,
	CONSTRAINT CHK_BookDate CHECK (BookDate < ArrivalDate),
	CONSTRAINT CHK_ArrivalDate CHECK (ArrivalDate < ReturnDate)
	)

	
CREATE TABLE Accounts (
	Id INT PRIMARY KEY IDENTITY,
	FirstName NVARCHAR(50) NOT NULL,
	MiddleName NVARCHAR(20),
	LastName NVARCHAR(50) NOT NULL,
	CityId INT FOREIGN KEY REFERENCES Cities(Id) NOT NULL,
	BirthDate DATETIME2 NOT NULL,
	Email VARCHAR(100) NOT NULL UNIQUE
	)

CREATE TABLE AccountsTrips (
	AccountId INT FOREIGN KEY REFERENCES Accounts(Id) NOT NULL,
	TripId INT FOREIGN KEY REFERENCES Trips(Id) NOT NULL,
	Luggage INT NOT NULL CHECK (Luggage >= 0)
	PRIMARY KEY (AccountId, TripId)
)

--Problem2

INSERT INTO Accounts (FirstName, MiddleName, LastName, CityId, BirthDate, Email)
VALUES
('John',	'Smith',	'Smith',	34,	'1975-07-21',	'j_smith@gmail.com'),
('Gosho',	NULL,	'Petrov',	11,	'1978-05-16',	'g_petrov@gmail.com'),
('Ivan',	'Petrovich',	'Pavlov',	59,	'1849-09-26',	'i_pavlov@softuni.bg'),
('Friedrich',	'Wilhelm',	'Nietzsche',	2,	'1844-10-15',	'f_nietzsche@softuni.bg')

INSERT INTO Trips (RoomId, BookDate, ArrivalDate, ReturnDate, CancelDate)
VALUES
(101, '2015-04-12',	'2015-04-14', '2015-04-20', '2015-02-02'),
(102, '2015-07-07',	'2015-07-15', '2015-07-22', '2015-04-29'),
(103, '2013-07-17',	'2013-07-23', '2013-07-24', NULL),
(104, '2012-03-17',	'2012-03-31', '2012-04-01', '2012-01-10'),
(109, '2017-08-07',	'2017-08-28', '2017-08-29', NULL)

--Problem3

UPDATE Rooms
SET Price = Price * 1.14
WHERE HotelId IN (5, 7, 9)

--Problem4

DELETE FROM AccountsTrips WHERE AccountId = 47

--Problem5

SELECT FirstName, LastName, FORMAT(BirthDate,'MM-dd-yyyy') , c.Name AS Hometown, Email FROM Accounts AS a
JOIN Cities AS c ON a.CityId = c.Id
WHERE Email LIKE 'e%'
ORDER BY c.Name ASC

--Problem6

SELECT c.Name AS City, COUNT(h.Id) AS Hotels FROM Cities AS c
JOIN Hotels AS h ON c.Id = h.CityId
GROUP BY c.Name
ORDER BY Hotels DESC, City ASC

--Problem7

SELECT at.AccountId, 
	CONCAT(a.FirstName,' ',a.LastName) AS FullName,
	MAX(DATEDIFF(day,t.ArrivalDate, t.ReturnDate)) AS LongestTrip ,
	MIN(DATEDIFF(day,t.ArrivalDate, t.ReturnDate)) AS ShortestTrip
	FROM Accounts AS a
JOIN AccountsTrips AS at ON a.Id = at.AccountId
JOIN Trips AS t ON at.TripId = t.Id
WHERE a.MiddleName IS NULL AND t.CancelDate IS NULL
GROUP BY at.AccountId, a.FirstName, a.LastName
ORDER BY LongestTrip DESC, ShortestTrip ASC

--Problem8

SELECT TOP (10) c.Id, c.Name AS City, c.CountryCode AS Country, COUNT(a.Id) AS Accounts FROM Accounts AS a
JOIN Cities AS c ON a.CityId = c.Id
GROUP BY c.Id, c.Name, c.CountryCode
ORDER BY COUNT(a.Id) DESC

--Problem9

SELECT 
	a.Id, 
	a.Email, 
	cacc.Name AS City,
	COUNT(a.Id) AS Trips
FROM Accounts AS a
JOIN Cities AS cacc ON a.CityId = cacc.Id
JOIN AccountsTrips AS at ON a.Id = at.AccountId
JOIN Trips AS t ON at.TripId = t.Id
JOIN Rooms AS r ON t.RoomId = r.Id
JOIN Hotels AS h ON r.HotelId = h.Id
JOIN Cities AS chot ON h.CityId = chot.Id
WHERE cacc.Id = chot.Id
GROUP BY a.Id, a.Email, cacc.Name
ORDER BY Trips DESC, a.Id ASC

--Problem10

SELECT 
	t.Id, 
	CONCAT(a.FirstName,' ', a.MiddleName,iif(a.MiddleName IS NULL,NULL,' '), a.LastName) AS [Full Name],
	cacc.Name AS [From], 
	chot.Name AS [To],
	iif(t.CancelDate IS NOT NULL,'Canceled',CONCAT(SUM(DATEDIFF(day,t.ArrivalDate, t.ReturnDate)), ' days')) AS Duration
FROM Trips AS t
JOIN AccountsTrips AS at ON t.Id = at.TripId
JOIN Accounts AS a ON at.AccountId = a.Id
JOIN Cities AS cacc ON a.CityId = cacc.Id
JOIN Rooms AS r ON t.RoomId = r.Id
JOIN Hotels AS h ON r.HotelId = h.Id
JOIN Cities AS chot ON h.CityId = chot.Id
GROUP BY t.Id, a.FirstName, a.MiddleName, a.LastName, cacc.Name, chot.Name, t.CancelDate
ORDER BY [Full Name] ASC, t.Id


--Problem11

CREATE FUNCTION udf_GetAvailableRoom(@HotelId INT, @Date DATETIME2, @People INT)
RETURNS NVARCHAR(MAX)
AS
BEGIN
	DECLARE @res NVARCHAR(MAX)
	DECLARE @Room INT = (SELECT TOP (1) id FROM (
						SELECT tmp.Id, 
							Type, 
							Beds, 
							HotelId, 
							h.BaseRate, 
							tmp.Price,
							(h.BaseRate + tmp.Price) * @People AS TotalPrice,
						SUM(free) AS free FROM (
						SELECT 
							r.Id, 
							r.Type, 
							r.Beds,
							r.HotelId,
							r.Price,
							iif((@Date BETWEEN t.ArrivalDate AND t.ReturnDate) AND t.CancelDate IS NULL,1,0)  AS free
							FROM Rooms AS r
						JOIN Trips AS t ON r.Id = t.RoomId
						WHERE HotelId = @HotelId AND Beds >= @People
						) AS tmp
						JOIN Hotels AS h ON tmp.HotelId = h.Id 
						GROUP BY tmp.Id, Type, Beds, HotelId, h.BaseRate, Price
						HAVING SUM(free) = 0) AS tmp2
						ORDER BY TotalPrice DESC)

		DECLARE @RoomType NVARCHAR(MAX) = (SELECT TOP (1) Type FROM (
						SELECT tmp.Id, 
							Type, 
							Beds, 
							HotelId, 
							h.BaseRate, 
							tmp.Price,
							(h.BaseRate + tmp.Price) * @People AS TotalPrice,
						SUM(free) AS free FROM (
						SELECT 
							r.Id, 
							r.Type, 
							r.Beds,
							r.HotelId,
							r.Price,
							iif((@Date BETWEEN t.ArrivalDate AND t.ReturnDate) AND t.CancelDate IS NULL,1,0)  AS free
							FROM Rooms AS r
						JOIN Trips AS t ON r.Id = t.RoomId
						WHERE HotelId = @HotelId AND Beds >= @People
						) AS tmp
						JOIN Hotels AS h ON tmp.HotelId = h.Id 
						GROUP BY tmp.Id, Type, Beds, HotelId, h.BaseRate, Price
						HAVING SUM(free) = 0) AS tmp2
						ORDER BY TotalPrice DESC)

			DECLARE @TotalPrice DECIMAL(18,2) = (SELECT TOP (1) TotalPrice FROM (
						SELECT tmp.Id, 
							Type, 
							Beds, 
							HotelId, 
							h.BaseRate, 
							tmp.Price,
							(h.BaseRate + tmp.Price) * @People AS TotalPrice,
						SUM(free) AS free FROM (
						SELECT 
							r.Id, 
							r.Type, 
							r.Beds,
							r.HotelId,
							r.Price,
							iif((@Date BETWEEN t.ArrivalDate AND t.ReturnDate) AND t.CancelDate IS NULL,1,0)  AS free
							FROM Rooms AS r
						JOIN Trips AS t ON r.Id = t.RoomId
						WHERE HotelId = @HotelId AND Beds >= @People
						) AS tmp
						JOIN Hotels AS h ON tmp.HotelId = h.Id 
						GROUP BY tmp.Id, Type, Beds, HotelId, h.BaseRate, Price
						HAVING SUM(free) = 0) AS tmp2
						ORDER BY TotalPrice DESC)

						DECLARE @Beds INT = (SELECT TOP (1) Beds FROM (
						SELECT tmp.Id, 
							Type, 
							Beds, 
							HotelId, 
							h.BaseRate, 
							tmp.Price,
							(h.BaseRate + tmp.Price) * @People AS TotalPrice,
						SUM(free) AS free FROM (
						SELECT 
							r.Id, 
							r.Type, 
							r.Beds,
							r.HotelId,
							r.Price,
							iif((@Date BETWEEN t.ArrivalDate AND t.ReturnDate) AND t.CancelDate IS NULL,1,0)  AS free
							FROM Rooms AS r
						JOIN Trips AS t ON r.Id = t.RoomId
						WHERE HotelId = @HotelId AND Beds >= @People
						) AS tmp
						JOIN Hotels AS h ON tmp.HotelId = h.Id 
						GROUP BY tmp.Id, Type, Beds, HotelId, h.BaseRate, Price
						HAVING SUM(free) = 0) AS tmp2
						ORDER BY TotalPrice DESC)




	IF (SELECT SUM(@@ROWCOUNT) FROM (
SELECT COUNT(*) AS COUNT FROM (SELECT 
	r.Id, 
	r.Type, 
	r.Beds,
	iif((@Date BETWEEN t.ArrivalDate AND t.ReturnDate) AND t.CancelDate IS NULL,1,0)  AS free
	FROM Rooms AS r
	JOIN Trips AS t ON r.Id = t.RoomId
	WHERE HotelId = @HotelId AND Beds >= @People
	) AS tmp
	GROUP BY Id, Type, Beds
	HAVING SUM(free) = 0) AS tmp2) IS NULL
	SET @res = 'No rooms available'
	ELSE
	SET @res = CONCAT('Room ',@Room,': ',@RoomType,' ','(',@Beds,' beds) - $',@TotalPrice)

	RETURN @res

END

--Problem12

CREATE PROC usp_SwitchRoom(@TripId INT, @TargetRoomId INT)
AS

DECLARE @NowHotelId INT = (SELECT HotelId FROM Trips AS t
						JOIN Rooms AS r ON t.RoomId = r.Id
						WHERE t.Id = @TripId)
DECLARE @TarHotelId INT = (SELECT HotelId FROM Rooms
							WHERE Id = @TargetRoomId)

DECLARE @Nowbeds INT = (SELECT COUNT(*) FROM AccountsTrips
						WHERE TripId = @TripId)

DECLARE @Tarbeds INT = (SELECT Beds FROM Rooms WHERE Id = @TargetRoomId)



		IF @NowHotelId != @TarHotelId
		THROW 50001, 'Target room is in another hotel!', 1;
		ELSE IF @Nowbeds > @Tarbeds
		THROW 50002, 'Not enough beds in target room!', 2;
		ELSE
		BEGIN
		UPDATE Trips
		SET RoomId = @TargetRoomId
		WHERE id = @TripId
		END


