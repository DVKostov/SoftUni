--Problem1

SELECT COUNT(*) FROM WizzardDeposits

--Problem2

SELECT MAX(MagicWandSize) AS LongestMagicWand FROM WizzardDeposits

--Problem3

SELECT DepositGroup
	,MAX(MagicWandSize) AS LongestMagicWand 
	FROM WizzardDeposits
	GROUP BY DepositGroup

--Problem4

SELECT TOP (2) DepositGroup
	FROM WizzardDeposits
	GROUP BY DepositGroup
	ORDER BY AVG(MagicWandSize) ASC

--Problem5

SELECT DepositGroup
	,SUM(DepositAmount) AS TotalSum 
	FROM WizzardDeposits
	GROUP BY DepositGroup

--Problem6

SELECT DepositGroup
	,SUM(DepositAmount) AS TotalSum 
	FROM WizzardDeposits
	WHERE MagicWandCreator = 'Ollivander family'
	GROUP BY DepositGroup

--Problem7

SELECT DepositGroup
	,SUM(DepositAmount) AS TotalSum 
	FROM WizzardDeposits
	WHERE MagicWandCreator = 'Ollivander family'
	GROUP BY DepositGroup
	HAVING SUM(DepositAmount) < 150000
	ORDER BY TotalSum DESC

--Problem8

SELECT DepositGroup 
	,MagicWandCreator
	,MIN(DepositCharge) AS 'MinDepositCharge'
	FROM WizzardDeposits
	GROUP BY DepositGroup, MagicWandCreator
	ORDER BY MagicWandCreator, DepositGroup

--Problem9

SELECT AgeGroup
	,COUNT(*) AS WizardCount
FROM (SELECT  
		CASE WHEN Age BETWEEN 0 AND 10 THEN '[0-10]' 
		WHEN Age BETWEEN 11 AND 20 THEN '[11-20]' 
		WHEN Age BETWEEN 21 AND 30 THEN '[21-30]' 
		WHEN Age BETWEEN 31 AND 40 THEN '[31-40]' 
		WHEN Age BETWEEN 41 AND 50 THEN '[41-50]' 
		WHEN Age BETWEEN 51 AND 60 THEN '[51-60]' 
		ELSE '[61+]' END AS AgeGroup
		FROM WizzardDeposits) AS tmp
GROUP BY tmp.AgeGroup
	
--Problem10

SELECT FirstLetter 
	FROM (SELECT LEFT(FirstName, 1) AS FirstLetter
			FROM WizzardDeposits
			WHERE DepositGroup = 'Troll Chest') AS tmp
GROUP BY FirstLetter
ORDER BY FirstLetter

--Problem11

SELECT DepositGroup
	,IsDepositExpired
	,AVG(DepositInterest) AS AverageInterest 
FROM WizzardDeposits
WHERE DepositStartDate > '1985-01-01'
GROUP BY DepositGroup, IsDepositExpired
ORDER BY DepositGroup DESC, IsDepositExpired ASC

--Problem12

SELECT SUM(Difference) AS SumDifference FROM (
SELECT DepositAmount 
	,DepositAmount - LEAD(DepositAmount,1) OVER (ORDER BY id) AS Difference
FROM WizzardDeposits) AS tmp

--Problem13

SELECT DepartmentID
	,SUM(Salary) AS TotalSalary
	FROM Employees
	GROUP BY DepartmentID
	ORDER BY DepartmentID

--Problem14

SELECT DepartmentID
	,MIN(Salary) AS TotalSalary
	FROM Employees
	WHERE DepartmentID IN (2, 5, 7) AND HireDate > '2000-01-01'
	GROUP BY DepartmentID

--Problem15

SELECT * INTO [NewTable] FROM Employees
WHERE Salary > 30000

DELETE FROM NewTable
WHERE ManagerID = 42

UPDATE NewTable
SET Salary = Salary + 5000
WHERE DepartmentID = 1

SELECT DepartmentID, AVG(Salary) AS AverageSalary FROM NewTable
GROUP BY DepartmentID

--Problem16

SELECT * FROM (
SELECT DepartmentID
	,MAX(Salary) AS TotalSalary
	FROM Employees
	GROUP BY DepartmentID) AS tmp
WHERE TotalSalary NOT BETWEEN 30000 AND 70000

--Problem17

SELECT COUNT(Salary) AS [Count] FROM Employees
WHERE ManagerID IS NULL

--Problem18

SELECT DepartmentID, Salary AS ThirdHighestSalary 
FROM (SELECT *,
	ROW_NUMBER() OVER (PARTITION BY DepartmentID ORDER BY Salary DESC) AS [ROWnum]  
		FROM (SELECT DepartmentID, Salary FROM Employees
			GROUP BY DepartmentID, Salary) AS tmp) AS tmp2
WHERE ROWnum = 3

--Problem19

SELECT TOP (10) e.FirstName
	,e.LastName
	,e.DepartmentID
	FROM Employees AS e
	JOIN (SELECT DepartmentID, AVG(Salary) AS AvgSalary FROM Employees
			GROUP BY DepartmentID) AS AvgPerDep
	ON e.DepartmentID = AvgPerDep.DepartmentID
WHERE e.Salary > AvgPerDep.AvgSalary
ORDER BY DepartmentID