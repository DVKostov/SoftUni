--Problem1
CREATE PROC usp_GetEmployeesSalaryAbove35000 
AS (SELECT FirstName, LastName FROM Employees
	WHERE Salary > 35000)

--Problem2

CREATE PROC usp_GetEmployeesSalaryAboveNumber
	(@Salary DECIMAL(18,4) = 0)
AS (SELECT FirstName, LastName FROM Employees
	WHERE Salary >= @Salary)

--Problem3

CREATE PROC usp_GetTownsStartingWith 
	(@str NVARCHAR(50), @str1 NVARCHAR(50) = '%')
AS (SELECT [Name] AS Town FROM Towns
	WHERE [Name] LIKE @str + @str1)

--Problem4

CREATE PROC usp_GetEmployeesFromTown
	(@townName NVARCHAR(50))
AS (SELECT FirstName, LastName FROM Employees AS e
	LEFT JOIN Addresses AS a ON a.AddressID = e.AddressID
	LEFT JOIN Towns AS t ON a.TownID = t.TownID
	WHERE t.Name = @townName)

--Problem5
	
CREATE FUNCTION ufn_GetSalaryLevel
	(@Salary DECIMAL(18,4))
	RETURNS VARCHAR(10)
AS
BEGIN
	DECLARE @SalaryLevel VARCHAR(10);
	IF (@Salary < 30000)
		SET @SalaryLevel = 'Low'
	ELSE IF (@Salary BETWEEN 30000 AND 50000)
		SET @SalaryLevel = 'Average'
	ELSE
		SET @SalaryLevel = 'High'
	RETURN @salaryLevel;
END

--Problem6

CREATE PROC usp_EmployeesBySalaryLevel 
	(@salaryLevel VARCHAR(10))
AS (SELECT FirstName, LastName FROM Employees
	WHERE dbo.ufn_GetSalaryLevel(Salary) = @salaryLevel)

--Problem7

CREATE FUNCTION ufn_IsWordComprised
	(@setOfLetters VARCHAR(50), @word VARCHAR(50))
RETURNS BIT
AS
BEGIN
	DECLARE @result BIT
	DECLARE @counter INT = 1
	DECLARE @check INT = 0
	WHILE @counter <= LEN(@word)
	BEGIN
	IF CHARINDEX(SUBSTRING(@word,@counter,1),@setOfLetters) > 0
	SET @check += 1
	SET @counter += 1
	END
	IF @check >= LEN(@word)
	SET @result = 1
	ELSE
	SET @result = 0
RETURN @result
END

--Problem8

CREATE OR ALTER PROC usp_DeleteEmployeesFromDepartment 
	(@departmentId INT)
AS
	
	DELETE FROM EmployeesProjects WHERE EmployeeID IN 
	(SELECT EmployeeID FROM Employees WHERE DepartmentID = @departmentId)
	
	UPDATE Employees SET ManagerID = NULL
	WHERE ManagerID IN
	(SELECT EmployeeID FROM Employees WHERE DepartmentID = @departmentId)

	ALTER TABLE Departments ALTER COLUMN ManagerID INT
	UPDATE Departments SET ManagerID = NULL
	WHERE ManagerID IN
	(SELECT EmployeeID FROM Employees WHERE DepartmentID = @departmentId)

	DELETE FROM Employees WHERE DepartmentID = @departmentId

	DELETE FROM Departments WHERE Departments.DepartmentID = @departmentId

	SELECT COUNT(*) FROM Employees
	WHERE DepartmentID = @departmentId




--Problem9

CREATE PROC usp_GetHoldersFullName
AS
SELECT FirstName + ' ' + LastName AS [Full Name] FROM AccountHolders

--Problem10

CREATE PROC usp_GetHoldersWithBalanceHigherThan 
	(@money DECIMAL(18,2))
AS
	SELECT ah.FirstName, ah.LastName FROM AccountHolders AS ah
	JOIN Accounts AS a ON ah.Id = a.AccountHolderId
	GROUP BY ah.FirstName, ah.LastName
	HAVING SUM(a.Balance) > @money
	ORDER BY ah.FirstName, ah.LastName

--Problem11

CREATE OR ALTER FUNCTION ufn_CalculateFutureValue
	(@Initialsum DECIMAL(18,4)
	,@YearlyInterestrate FLOAT
	,@years INT)
RETURNS DECIMAL(18,4)
AS
BEGIN
	RETURN @Initialsum * POWER(1 + @YearlyInterestrate, @years)
END

SELECT dbo.ufn_CalculateFutureValue(1000,0.1,5)

--Problem12 ???

CREATE OR ALTER PROC usp_CalculateFutureValueForAccount 
	(@AccountId INT, @interestRate DECIMAL(18,2))
AS

	SELECT a.Id
	,ah.FirstName
	,ah.LastName 
	,SUM(a.Balance)
	,dbo.ufn_CalculateFutureValue(SUM(a.Balance), @interestRate, 5) AS [Balance in 5 years]
	FROM Accounts AS a
	JOIN AccountHolders AS ah ON a.Id = ah.Id
	GROUP BY a.Id, ah.FirstName, ah.LastName
	HAVING a.Id = @AccountId


EXEC usp_CalculateFutureValueForAccount 1, 0.1

--Problem13

CREATE OR ALTER FUNCTION ufn_CashInUsersGames
	(@gamename nvarchar(50))
RETURNS TABLE AS
RETURN SELECT (
SELECT SUM(Cash) AS SumCash FROM(
SELECT ug.Cash, g.[Name], ROW_NUMBER() OVER(PARTITION BY g.[Name] ORDER BY ug.Cash DESC) AS ROW# FROM UsersGames AS ug
JOIN Games AS g ON ug.GameId = g.Id
WHERE g.[Name] = @gamename) AS tmp
WHERE ROW# % 2 != 0 
) AS SumCash


SELECT * FROM dbo.ufn_CashInUsersGames ('Love in a mist')