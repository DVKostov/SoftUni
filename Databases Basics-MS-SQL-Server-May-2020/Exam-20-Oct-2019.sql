--Problem1

CREATE TABLE Users (
	Id INT PRIMARY KEY IDENTITY,
	Username VARCHAR(30) UNIQUE NOT NULL,
	[Password] VARCHAR(50) NOT NULL,
	[Name] VARCHAR(50),
	Birthdate DATETIME2,
	Age INT CHECK (Age BETWEEN 14 AND 110),
	Email VARCHAR(50) NOT NULL,
	)

CREATE TABLE Departments (
	Id INT PRIMARY KEY IDENTITY,
	[Name] VARCHAR(50) NOT NULL
	)

CREATE TABLE Employees (
	Id INT PRIMARY KEY IDENTITY,
	FirstName VARCHAR(25),
	LastName VARCHAR(25),
	Birthdate DATETIME2,
	Age INT CHECK (Age BETWEEN 14 AND 110),
	DepartmentId INT FOREIGN KEY REFERENCES Departments(Id)
	)

CREATE TABLE Categories (
	Id INT PRIMARY KEY IDENTITY,
	[Name] VARCHAR(50) NOT NULL,
	DepartmentId INT FOREIGN KEY REFERENCES Departments(Id) NOT NULL
	)

CREATE TABLE Status (
	Id INT PRIMARY KEY IDENTITY,
	[Label] VARCHAR(30) NOT NULL,
	)

CREATE TABLE Reports (
	Id INT PRIMARY KEY IDENTITY,
	CategoryId INT FOREIGN KEY REFERENCES Categories(Id) NOT NULL,
	StatusId INT FOREIGN KEY REFERENCES Status(Id) NOT NULL,
	OpenDate DATETIME2 NOT NULL,
	CloseDate DATETIME2,
	Description VARCHAR(200) NOT NULL,
	UserId INT FOREIGN KEY REFERENCES Users(Id) NOT NULL,
	EmployeeId INT FOREIGN KEY REFERENCES Employees(Id)
	)

--Problem2

INSERT INTO Employees (FirstName, LastName, Birthdate, DepartmentId)
VALUES ('Marlo','O''Malley','9-21-1958',1),
		('Niki','Stanaghan','11-26-1969',4),
		('Ayrton','Senna','3-21-1960',9),
		('Ronnie','Peterson','2-14-1944',9),
		('Giovanna','Amati','7-20-1959',5)

INSERT INTO Reports 
	(CategoryId, StatusId, OpenDate, CloseDate, Description, UserId, EmployeeId)
VALUES 
	(1, 1, '2017-04-13', NULL,'Stuck Road on Str.133', 6, 2),
	(6,	3, '2015-09-05', '2015-12-06', 'Charity trail running', 3, 5),
	(14, 2, '2015-09-07', NULL,	'Falling bricks on Str.58',	5, 2),
	(4,	3, '2017-07-03', '2017-07-06', 'Cut off streetlight on Str.11', 1, 1)

--Problem3

UPDATE Reports
	SET CloseDate = GETDATE()
	WHERE CloseDate IS NULL

--Problem4

DELETE FROM Reports
	WHERE StatusId = 4

--Problem5

SELECT Description, OpenDate FROM (
SELECT Description, CONVERT(VARCHAR, OpenDate, 105) AS OpenDate, OpenDate AS OpenDate1 FROM Reports 
WHERE EmployeeId IS NULL) AS tmp
ORDER BY OpenDate1 ASC, Description ASC

--Problem6

SELECT r.Description, c.Name AS CategoryName FROM Reports AS r
JOIN Categories AS c ON r.CategoryId = c.Id
ORDER BY r.Description ASC, c.Name ASC

--Problem7

SELECT TOP (5) c.[Name] AS CategoryName, 
	COUNT(r.Id) AS ReportsNumber  
FROM Categories AS c
JOIN Reports AS r ON c.Id = r.CategoryId
GROUP BY c.Name
ORDER BY ReportsNumber DESC, c.[Name] ASC

--Problem8

SELECT u.Username, c.Name AS CategoryName FROM Users AS u
JOIN Reports AS r ON u.Id = r.UserId
JOIN Categories AS c ON c.Id = r.CategoryId
WHERE DATEPART(DAY, u.Birthdate) = DATEPART(DAY, r.OpenDate)
ORDER BY u.Username ASC, c.Name ASC

--Problem9

SELECT CONCAT(FirstName,' ',LastName) AS FullName, UsersCount FROM (
SELECT e.FirstName, e.LastName, COUNT(u.Id) AS UsersCount FROM Employees AS e
LEFT JOIN Reports AS r ON e.Id = r.EmployeeId
LEFT JOIN Users AS u ON r.UserId = u.Id
GROUP BY e.FirstName, e.LastName) AS tmp
ORDER BY UsersCount DESC, FullName ASC

--Problem10
		SELECT  COALESCE(NULLIF(CONCAT(e.FirstName,' ',e.LastName),''), 'None') AS Employee,
				ISNULL(d.Name,'None') AS Department,
				c.[Name] AS Category,
				r.[Description],
				CONVERT(VARCHAR, OpenDate, 104) AS OpenDate,
				s.[Label] AS [Status],
				u.[Name] AS [User]
		FROM Departments AS d
		JOIN Employees AS e ON e.DepartmentId = d.Id
		FULL JOIN Reports AS r ON e.Id = r.EmployeeId
		JOIN Categories AS c ON r.CategoryId = c.Id
		JOIN Status AS s ON r.StatusId = s.Id
	    JOIN Users AS u ON r.UserId = u.Id
		ORDER BY e.FirstName DESC, 
				e.LastName DESC, 
				d.Name ASC, 
				c.[Name] ASC, 
				r.[Description] ASC, 
				r.OpenDate ASC, 
				s.[Label] ASC, 
				u.[Name] ASC

--Problem11

CREATE OR ALTER FUNCTION udf_HoursToComplete
	(@StartDate DATETIME2, @EndDate DATETIME2) 
RETURNS INT
AS
BEGIN
DECLARE @DEFF INT = 0
IF @StartDate IS NULL OR @EndDate IS NULL
SET @DEFF = 0
ELSE
SET @DEFF = DATEDIFF(HOUR, @StartDate, @EndDate)

RETURN @DEFF
END

--Problem12

CREATE PROC usp_AssignEmployeeToReport
	(@EmployeeId INT, @ReportId INT)
AS 
IF (SELECT COUNT(*) FROM (
	SELECT c.DepartmentId FROM Reports AS r
	JOIN Categories AS c ON r.CategoryId = c.Id
	WHERE r.Id = @ReportId) AS a
	JOIN (SELECT DepartmentId FROM Employees
	WHERE Id = @EmployeeId) AS b ON a.DepartmentId = b.DepartmentId) = 0
	THROW 50001, 'Employee doesn''t belong to the appropriate department!', 1;
	ELSE 
	BEGIN
	UPDATE Reports
	SET EmployeeId = @EmployeeId
	WHERE Id = @ReportId
	END

	
	
