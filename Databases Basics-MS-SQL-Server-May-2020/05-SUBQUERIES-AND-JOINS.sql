--Problem1

SELECT TOP(5) e.EmployeeID
	,e.JobTitle
	,e.AddressID
	,a.AddressText 
	FROM Employees AS e
JOIN Addresses AS a 
	ON e.AddressID = a.AddressID
ORDER BY e.AddressID ASC

--Problem2

SELECT TOP(50) e.FirstName
	,e.LastName
	,t.Name AS [Town]
	,a.AddressText
	FROM Employees AS e
	JOIN Addresses AS a ON a.AddressID = e.AddressID
	JOIN Towns AS t ON a.TownID = t.TownID
	ORDER BY FirstName ASC, LastName ASC

--Problem3

SELECT EmployeeID
	,e.FirstName
	,e.LastName
	,d.[Name] AS DepartmentName
	FROM Employees AS e
	JOIN Departments AS d ON e.DepartmentID = d.DepartmentID
	WHERE d.[Name] = 'Sales'
	ORDER BY e.EmployeeID

--Problem4

SELECT TOP (5) e.EmployeeID
	,e.FirstName
	,e.Salary
	,d.[Name] AS DepartmentName
	FROM Employees AS e
	JOIN Departments AS d ON e.DepartmentID = d.DepartmentID
	WHERE e.Salary > 15000
	ORDER BY e.DepartmentID ASC

--Problem5

SELECT TOP (3) e.EmployeeID
	,e.FirstName
	FROM Employees AS e
	LEFT JOIN EmployeesProjects AS ep ON ep.EmployeeID = e.EmployeeID
	WHERE ep.EmployeeID IS NULL
	ORDER BY e.EmployeeID ASC

--Problem6

SELECT e.FirstName
	,e.LastName
	,e.HireDate
	,d.[Name] AS DeptName
	FROM Employees AS e
	JOIN Departments AS d ON e.DepartmentID = d.DepartmentID
	WHERE e.HireDate > '1999-1-1' AND d.[Name] IN ('Sales', 'Finance')
	ORDER BY e.HireDate ASC

--Problem7

SELECT TOP (5) e.EmployeeID
	,e.FirstName
	,p.[Name] AS ProjectName
	FROM Employees AS e
	JOIN EmployeesProjects AS ep ON e.EmployeeID = ep.EmployeeID
	JOIN Projects AS p ON ep.ProjectID = p.ProjectID
	WHERE p.StartDate > '2002-8-13' AND p.EndDate IS NULL
	ORDER BY e.EmployeeID ASC

--Problem8

SELECT e.EmployeeID
	,e.FirstName
	,CASE WHEN YEAR(p.StartDate) >= 2005 THEN NULL
	ELSE p.[Name] END AS ProjectName
	---,IIF(YEAR(p.StartDate) >= 2005, NULL, p.[Name]) AS ProjectName
	FROM Employees AS e
	JOIN EmployeesProjects AS ep ON ep.EmployeeID = e.EmployeeID
	JOIN Projects AS p ON ep.ProjectID = p.ProjectID
	WHERE e.EmployeeID = 24

--Problem9

SELECT ee.EmployeeID
	,ee.FirstName
	,ee.ManagerID
	,em.FirstName AS ManagerName
	FROM Employees AS ee
	JOIN Employees em ON ee.ManagerID = em.EmployeeID
	WHERE em.EmployeeID IN (3, 7)
	ORDER BY ee.EmployeeID ASC

--Problem10

SELECT TOP (50) ee.EmployeeID
	,CONCAT(ee.FirstName, ' ', ee.LastName) AS EmployeeName
	,CONCAT(em.FirstName, ' ', em.LastName) AS ManagerName
	,d.[Name] AS DepartmentName
	FROM Employees AS ee
	JOIN Employees AS em ON ee.ManagerID = em.EmployeeID
	JOIN Departments AS d ON ee.DepartmentID = d.DepartmentID
	ORDER BY ee.EmployeeID ASC

--Problem11

SELECT TOP (1) AVG(e.Salary) AS MinAverageSalary 
	FROM Employees AS e
	GROUP BY DepartmentID
	ORDER BY MinAverageSalary

--Problem12

SELECT c.CountryCode
	,m.MountainRange
	,p.PeakName
	,p.Elevation
	FROM Peaks AS p
	JOIN Mountains AS m ON p.MountainId = m.Id
	JOIN MountainsCountries AS mc ON m.Id = mc.MountainId
	JOIN Countries AS c ON mc.CountryCode = c.CountryCode
	WHERE c.CountryCode = 'BG' AND p.Elevation > 2835
	ORDER BY p.Elevation DESC

--Problem13

SELECT mc.CountryCode 
	,COUNT(mc.MountainId) AS MountainRanges
	FROM MountainsCountries AS mc
	WHERE mc.CountryCode IN ('BG', 'RU', 'US')
	GROUP BY mc.CountryCode
	
--Problem14

SELECT TOP (5) c.CountryName
	,r.RiverName
	FROM Countries AS c
	LEFT JOIN CountriesRivers AS cr ON c.CountryCode = cr.CountryCode
	LEFT JOIN Rivers AS r ON cr.RiverId = r.Id
	WHERE c.ContinentCode = 'AF'
	ORDER BY c.CountryName ASC
	
--Problem15

SELECT tmp3.ContinentCode, tmp3.CurrencyCode, tmp3.maxCurrencyUsage AS CurrencyUsage
	FROM (SELECT tmp.ContinentCode , tmp.CurrencyCode, tmp.CurrencyUsage, tmp2.maxCurrencyUsage
	FROM (SELECT ContinentCode ,CurrencyCode ,COUNT(CurrencyCode) AS CurrencyUsage
	FROM Countries
	GROUP BY ContinentCode, CurrencyCode) AS tmp
	JOIN (SELECT ContinentCode 
	,MAX(CurrencyUsage) maxCurrencyUsage
	FROM (SELECT ContinentCode
	,CurrencyCode
	,COUNT(CurrencyCode) AS CurrencyUsage
	FROM Countries
	GROUP BY ContinentCode, CurrencyCode) AS tmp
	GROUP BY ContinentCode) AS tmp2
	ON tmp.CurrencyUsage = tmp.CurrencyUsage
	AND tmp.ContinentCode = tmp2.ContinentCode) AS tmp3
WHERE tmp3.CurrencyUsage = tmp3.maxCurrencyUsage AND tmp3.maxCurrencyUsage > 1
ORDER BY tmp3.ContinentCode ASC

--Problem16

	SELECT COUNT(c.CountryCode) AS [Count] 
	FROM  Countries AS c
	LEFT JOIN MountainsCountries AS mc ON mc.CountryCode = c.CountryCode
	WHERE mc.CountryCode IS NULL

--Problem17

SELECT TOP (5) c1.CountryName, p1.HighestPeakElevation, r1.LongestRiverLength
FROM Countries AS c1
	LEFT JOIN (
SELECT c.CountryName, MAX(p.Elevation) HighestPeakElevation 
	FROM Countries AS c
	JOIN MountainsCountries AS mc ON c.CountryCode = mc.CountryCode
	JOIN Mountains AS m ON mc.MountainId = m.Id
	JOIN Peaks AS p ON mc.MountainId = p.MountainId
GROUP BY c.CountryName ) AS p1 ON c1.CountryName = p1.CountryName
	LEFT JOIN (
SELECT c.CountryName, MAX(r.[Length]) AS LongestRiverLength
	FROM Countries AS c
	JOIN CountriesRivers AS cr ON c.CountryCode = cr.CountryCode
	JOIN Rivers AS r ON cr.RiverId = r.Id
GROUP BY c.CountryName ) AS r1 ON c1.CountryName = r1.CountryName
ORDER BY p1.HighestPeakElevation DESC, r1.LongestRiverLength DESC, c1.CountryName

-----------------------------------------------------------------------------------

SELECT TOP (5) c.CountryName 
	,MAX(p.Elevation) AS HighestPeakElevation
	,MAX(r.Length) AS LongestRiverLength
		FROM Countries AS c
		LEFT JOIN CountriesRivers AS cr ON c.CountryCode = cr.CountryCode
		LEFT JOIN Rivers AS r ON cr.RiverId = r.Id
		LEFT JOIN MountainsCountries AS mc ON c.CountryCode = mc.CountryCode
		LEFT JOIN Mountains AS m ON mc.MountainId = m.Id
		LEFT JOIN Peaks AS p ON m.Id = p.MountainId
		GROUP BY c.CountryName
	ORDER BY HighestPeakElevation DESC, LongestRiverLength DESC

--Problem18


SELECT TOP (5) tmp.CountryName AS Country
		,CASE WHEN tmp.PeakName IS NULL 
		THEN '(no highest peak)'
		ELSE tmp.PeakName 
		END AS [Highest Peak Name]
		,CASE WHEN tmp.Elevation IS NULL 
		THEN 0 
		ELSE tmp.Elevation 
		END AS [Highest Peak Elevation]
		,CASE WHEN tmp.MountainRange IS NULL 
		THEN '(no mountain)'
		ELSE tmp.MountainRange 
		END AS [Mountain]
	FROM (
			SELECT c.CountryName
				,p.PeakName
				,m.MountainRange
				,p.Elevation
				,DENSE_RANK() OVER (PARTITION BY c.CountryName ORDER BY p.Elevation DESC) AS [Rank]  
			FROM Countries AS c
			LEFT JOIN MountainsCountries AS mc 
			ON c.CountryCode = mc.CountryCode
			LEFT JOIN Mountains AS m 
			ON mc.MountainId = m.Id
			LEFT JOIN Peaks AS p 
			ON m.Id = p.MountainId
			) AS tmp
	WHERE [Rank] = 1
	ORDER BY tmp.CountryName ASC, tmp.PeakName ASC
