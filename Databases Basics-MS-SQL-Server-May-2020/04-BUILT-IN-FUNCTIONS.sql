-- Problem1

SELECT FirstName, LastName FROM Employees
WHERE FirstName LIKE 'SA%'

--Problem2

SELECT FirstName, LastName FROM Employees
WHERE LastName LIKE '%ei%'

--Problem3

SELECT FirstName FROM Employees
WHERE (YEAR(HireDate) BETWEEN 1995 AND 2005) AND DepartmentID IN (3, 10)

--Problem4

SELECT FirstName, LastName FROM Employees
WHERE JobTitle NOT LIKE '%engineer%'

--Problem5

SELECT [Name] FROM Towns
WHERE LEN([Name]) IN (5, 6)
ORDER BY [Name] ASC

--Problem6

SELECT * FROM Towns
WHERE [Name] LIKE '[MKBE]%'
ORDER BY [Name] ASC

--Problem7

SELECT * FROM Towns
WHERE [Name] LIKE '[^RBD]%'
ORDER BY [Name] ASC

--Problem8

CREATE VIEW [V_EmployeesHiredAfter2000] AS
SELECT FirstName, LastName FROM Employees
WHERE YEAR(HireDate) > 2000

--Problem9

SELECT FirstName, LastName FROM Employees
WHERE LEN(LastName) = 5

--Problem10 ???

SELECT 
	EmployeeID, 
	FirstName, 
	LastName, 
	Salary, 
	DENSE_RANK() OVER (PARTITION By Salary ORDER BY EmployeeID ASC) AS Rank
FROM Employees
WHERE Salary BETWEEN 10000 AND 50000
ORDER BY Salary DESC

--Problem11

SELECT * FROM (
SELECT 
	EmployeeID, 
	FirstName, 
	LastName, 
	Salary, 
	DENSE_RANK() OVER (PARTITION By Salary ORDER BY EmployeeID ASC) AS Rank
FROM Employees
WHERE Salary BETWEEN 10000 AND 50000) AS temp
WHERE [Rank] = 2
ORDER BY Salary DESC


--Problem12

SELECT CountryName, IsoCode FROM Countries
WHERE CountryName LIKE '%A%A%A%'
ORDER BY IsoCode

--Problem13

SELECT PeakName, RiverName, LOWER(CONCAT(PeakName, RIGHT(RiverName, LEN(RiverName) -1))) AS Mix FROM Rivers
JOIN Peaks ON LEFT(RiverName, 1) = RIGHT(Peaks.PeakName, 1)
ORDER BY Mix

--Problem14

SELECT TOP 50 [Name], CONVERT(varchar, [Start], 23) AS Start FROM Games
WHERE YEAR([Start]) IN (2011, 2012)
ORDER BY [Start], [Name]

--Problem15

SELECT 
	Username
	,RIGHT(Email,(LEN(Email)- CHARINDEX('@', Email))) AS [Email Provider] 
FROM Users
ORDER BY [Email Provider] ASC, Username ASC

--Problem16

SELECT Username, IpAddress FROM Users
WHERE IpAddress LIKE '___.1%.%.___'
ORDER BY Username

--Problem17

SELECT [Name] AS Game
	,IIF(DATEPART(hour, start) BETWEEN 0 AND 11, 'Morning'
	,IIF(DATEPART(hour, start) BETWEEN 12 AND 17, 'Afternoon'
	,'Evening')) AS [Part of the Day]
	,IIF(Duration <=3, 'Extra Short'
	,IIF(Duration BETWEEN 4 AND 6, 'Short'
	,IIF(Duration > 6, 'Long', 'Extra Long'))) AS Duration
FROM Games
ORDER BY Game ASC, Duration ASC

--Problem18

SELECT
	  ProductName
	, OrderDate
	, DATEADD(DAY, 3, OrderDate) AS [Pay Due] 
	, DATEADD(MONTH, 1, OrderDate) AS [Deliver Due]
	FROM Orders

--Problem18

CREATE TABLE People (
	 Id INT PRIMARY KEY IDENTITY
	,[Name] VARCHAR(50) NOT NULL
	,Birthdate DATETIME2)

INSERT INTO People ([Name], Birthdate)
VALUES
	('Victor','2000-12-07'),
	('Steven','1992-09-10'),
	('Stephen','1910-09-19'),
	('John','2010-01-06')

SELECT
	 [Name]
	, DATEDIFF(YEAR, Birthdate, GETDATE()) AS [Age in Years]
	, DATEDIFF(MONTH, Birthdate, GETDATE()) AS [Age in Months]
	, DATEDIFF(DAY, Birthdate, GETDATE()) AS [Age in Days]
	, DATEDIFF(MINUTE, Birthdate, GETDATE()) AS [Age in Minutes]
	FROM People