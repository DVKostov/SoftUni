--Problem1

CREATE TABLE Planes (
Id INT PRIMARY KEY IDENTITY,
[Name] VARCHAR(30) NOT NULL,
Seats INT NOT NULL,
[Range] INT NOT NULL
)

CREATE TABLE Flights (
Id INT PRIMARY KEY IDENTITY,
DepartureTime DATETIME2,
ArrivalTime DATETIME2,
Origin VARCHAR(50) NOT NULL,
Destination VARCHAR(50) NOT NULL,
PlaneId INT FOREIGN KEY REFERENCES Planes(Id) NOT NULL
)

CREATE TABLE Passengers (
Id INT PRIMARY KEY IDENTITY,
FirstName VARCHAR(30) NOT NULL,
LastName VARCHAR(30) NOT NULL,
Age INT NOT NULL,
[Address] VARCHAR(30) NOT NULL,
PassportId VARCHAR(11) NOT NULL,
)

CREATE TABLE LuggageTypes (
Id INT PRIMARY KEY IDENTITY,
[Type] VARCHAR(30) NOT NULL,
)

CREATE TABLE Luggages (
Id INT PRIMARY KEY IDENTITY,
LuggageTypeId INT FOREIGN KEY REFERENCES LuggageTypes(Id) NOT NULL,
PassengerId INT FOREIGN KEY REFERENCES Passengers(Id) NOT NULL
)

CREATE TABLE Tickets (
Id INT PRIMARY KEY IDENTITY,
PassengerId INT FOREIGN KEY REFERENCES Passengers(Id) NOT NULL,
FlightId INT FOREIGN KEY REFERENCES Flights(Id) NOT NULL,
LuggageId INT FOREIGN KEY REFERENCES Luggages(Id) NOT NULL,
Price DECIMAL(18,2) NOT NULL
)

--Problem2

INSERT INTO Planes ([Name],	Seats, [Range]) VALUES
('Airbus 336', 112, 5132),
('Airbus 330', 432, 5325),
('Boeing 369', 231, 2355),
('Stelt 297', 254, 2143),
('Boeing 338', 165, 5111),
('Airbus 558', 387, 1342),
('Boeing 128', 345, 5541)

INSERT INTO LuggageTypes ([Type]) VALUES
('Crossbody Bag'),
('School Backpack'),
('Shoulder Bag')

--Problem3

UPDATE Tickets
SET Price = Price * 1.13
WHERE FlightId = (SELECT t.FlightId FROM Tickets AS t
JOIN Flights AS f ON f.Id = t.FlightId
WHERE f.Destination = 'Carlsbad')

--Problem4

DELETE FROM Tickets
WHERE FlightId = (SELECT Id FROM Flights WHERE Destination = 'Ayn Halagim') 
DELETE FROM Flights
WHERE Destination = 'Ayn Halagim'

--Problem5

SELECT * FROM Planes
WHERE [Name] LIKE '%tr%'
ORDER BY Id ASC, [Name] ASC, Seats ASC, Range ASC 

--Problem6

SELECT FlightId, SUM(Price) AS Price 
FROM Tickets
GROUP BY FlightId
ORDER BY Price DESC, FlightId ASC

--Problem7

SELECT * FROM (
				SELECT CONCAT(p.FirstName,' ', p.LastName) AS [Full Name], f.Origin, f.Destination FROM Passengers AS p
				JOIN Tickets AS t ON p.Id = t.PassengerId
				JOIN Flights AS f ON t.FlightId = f.Id
				) AS tmp
ORDER BY [Full Name] ASC, Origin ASC, Destination ASC

--Problem8

SELECT p.FirstName, p.LastName, p.Age FROM Passengers AS p
LEFT JOIN Tickets AS t ON p.Id = t.PassengerId
WHERE t.Id IS NULL
ORDER BY Age DESC, p.FirstName ASC, p.LastName ASC

--Problem9

SELECT [Full Name], [Plane Name], Trip, [Luggage Type] FROM (
	SELECT 
	CONCAT(p.FirstName,' ',p.LastName) AS [Full Name],
	pl.[Name] AS [Plane Name],
	CONCAT(f.Origin,' - ',f.Destination) AS Trip,
	lt.[Type] AS [Luggage Type],
	f.Origin,
	f.Destination
	FROM Passengers AS p
	JOIN Tickets AS t ON p.Id = t.PassengerId
	JOIN Flights AS f ON t.FlightId = f.Id
	JOIN Planes AS pl ON pl.Id = f.PlaneId
	JOIN Luggages AS l ON l.Id = t.LuggageId
	JOIN LuggageTypes AS lt ON l.LuggageTypeId = lt.Id
	) AS tmp
ORDER BY [Full Name] ASC, [Plane Name] ASC, Origin ASC, Destination ASC, [Luggage Type] ASC

--Problem10

SELECT * FROM (
	SELECT pl.Name, pl.Seats, COUNT(p.Id) AS [Passengers Count] 
	FROM Passengers AS p
	JOIN Tickets AS t ON p.Id = t.PassengerId
	JOIN Flights AS f ON t.FlightId = f.Id
	RIGHT JOIN Planes AS pl ON f.PlaneId = pl.Id
	GROUP BY pl.Name, pl.Seats
	) AS tmp
ORDER BY [Passengers Count] DESC, Name ASC, Seats ASC

--Problem11

CREATE FUNCTION udf_CalculateTickets
(@origin VARCHAR(MAX),@destination VARCHAR(MAX), @peopleCount INT)
RETURNS VARCHAR(30)
AS
BEGIN
	DECLARE @res VARCHAR(30)
	DECLARE @prc DECIMAL(18,2)  
	SET @prc = (SELECT Price FROM Flights AS f
	JOIN Tickets AS t ON f.Id = t.FlightId
	WHERE Origin = @origin AND Destination = @destination) *  @peopleCount

	IF @peopleCount <= 0
		SET @res = 'Invalid people count!'
	ELSE IF (SELECT COUNT(*) FROM Flights WHERE Origin = @origin AND Destination = @destination) = 0
		SET @res = 'Invalid flight!'
	ELSE
		SET @res = CONCAT('Total price ',@prc)
	RETURN @res
END

--Problem12

CREATE PROC usp_CancelFlights
AS
UPDATE Flights
SET DepartureTime = NULL, ArrivalTime = NULL
WHERE ArrivalTime > DepartureTime
