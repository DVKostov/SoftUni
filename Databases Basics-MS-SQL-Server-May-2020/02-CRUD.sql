--Problem 1
-- Part I
--Problem 2

SELECT * FROM Departments

--Problem 3

SELECT [Name] FROM Departments

--Problem 4

SELECT FirstName, LastName, Salary FROM Employees

--Problem 5

SELECT FirstName, MiddleName, LastName FROM Employees

--Problem 6

SELECT FirstName + '.' + LastName + '@softuni.bg' AS [Full Email Address]
FROM Employees

--Problem 7

SELECT Salary FROM Employees
GROUP BY Salary

--Problem 8

SELECT * FROM Employees
WHERE JobTitle = 'Sales Representative'

--Problem 9

SELECT FirstName, LastName,JobTitle FROM Employees
WHERE Salary > 20000 AND Salary <30000

SELECT FirstName, LastName,JobTitle FROM Employees
WHERE Salary BETWEEN 20000 AND 30000

--Problem 10

SELECT (FirstName + ' ' + MiddleName + ' ' + LastName) AS [Full Name] FROM Employees
WHERE Salary = 25000 OR Salary = 14000 OR Salary = 12500 OR Salary = 23600

--Problem 11

SELECT FirstName, LastName FROM Employees
WHERE ManagerID IS NULL

--Problem 12

SELECT FirstName, LastName, Salary FROM Employees
WHERE Salary > 50000
ORDER BY Salary DESC

--Problem 13

SELECT TOP(5) FirstName, LastName FROM Employees
ORDER BY Salary DESC

--Problem 14

SELECT FirstName, LastName FROM Employees
WHERE DepartmentID != 4

--Problem 15

SELECT * FROM Employees
ORDER BY Salary DESC, FirstName ASC, LastName DESC, MiddleName ASC

--Problem 16

CREATE VIEW [V_EmployeesSalaries] AS
SELECT FirstName, LastName, Salary FROM Employees

--Problem 17

CREATE VIEW [V_EmployeeNameJobTitle] AS
SELECT CONCAT(FirstName, ' ', ISNULL(MiddleName,''),' ', LastName), JobTitle FROM Employees
--SELECT (FirstName + ' ' + IIF(MiddleName IS NULL,' ', MiddleName + ' ') + LastName) AS [Full Name], JobTitle FROM Employees

--Problem 18

SELECT JobTitle FROM Employees
GROUP BY JobTitle

--Problem 19

SELECT TOP (10) * FROM Projects
ORDER BY StartDate ASC, [Name] ASC

--Problem 20

SELECT TOP(7) FirstName, LastName, HireDate FROM Employees
ORDER BY HireDate DESC

--Problem 21

UPDATE Employees
SET Salary += Salary * 0.12
WHERE DepartmentID IN (1, 2, 4, 11)
--WHERE DepartmentID = 1 OR DepartmentID = 2 OR DepartmentID = 4 OR DepartmentID = 11

SELECT Salary FROM Employees

SELECT Salary FROM Employees
ORDER BY Salary

-- Part II
--Problem 22

SELECT PeakName FROM Peaks
ORDER BY PeakName ASC

--Problem 23

SELECT TOP(30) CountryName, [Population] FROM Countries
WHERE ContinentCode = 'EU'
ORDER BY [Population] DESC, CountryName ASC

--Problem 24

SELECT CountryName, CountryCode, 
CASE
WHEN CurrencyCode = 'EUR' THEN 'Euro'
ELSE 'Not Euro'
END AS [Currency]
FROM Countries
ORDER BY CountryName ASC

--Problem 25

SELECT [Name] FROM Characters
ORDER BY [Name] ASC





