--Problem1

CREATE TABLE Students (
	Id INT PRIMARY KEY IDENTITY,
	FirstName NVARCHAR(30) NOT NULL,
	MiddleName NVARCHAR(25),
	LastName NVARCHAR(30) NOT NULL,
	Age INT CHECK (Age > 0),
	[Address] NVARCHAR(50),
	Phone NVARCHAR(10)
	)

CREATE TABLE Subjects (
		Id INT PRIMARY KEY IDENTITY,
		[Name] NVARCHAR(20) NOT NULL,
		Lessons INT CHECK (Lessons > 0) NOT NULL
		)

CREATE TABLE StudentsSubjects (
		Id INT PRIMARY KEY IDENTITY,
		StudentId INT FOREIGN KEY REFERENCES Students(Id) NOT NULL,
		SubjectId INT FOREIGN KEY REFERENCES Subjects(Id) NOT NULL,
		Grade DECIMAL(18,2) CHECK (Grade BETWEEN 2 AND 6) NOT NULL
		)

CREATE TABLE Exams (
		Id INT PRIMARY KEY IDENTITY,
		[Date] DATETIME2,
		SubjectId INT FOREIGN KEY REFERENCES Subjects(Id) NOT NULL,
		)

CREATE TABLE StudentsExams (
		StudentId INT FOREIGN KEY REFERENCES Students(Id) NOT NULL,
		ExamId INT FOREIGN KEY REFERENCES Exams(Id) NOT NULL,
		Grade DECIMAL(18,2) CHECK (Grade BETWEEN 2 AND 6) NOT NULL
		PRIMARY KEY (StudentId,ExamId)
		)

CREATE TABLE Teachers (
		Id INT PRIMARY KEY IDENTITY,
		FirstName NVARCHAR(20) NOT NULL,
		LastName NVARCHAR(20) NOT NULL,
		[Address] NVARCHAR(20) NOT NULL,
		Phone NVARCHAR(10),
		SubjectId INT FOREIGN KEY REFERENCES Subjects(Id) NOT NULL,
		)

CREATE TABLE StudentsTeachers (
		StudentId INT FOREIGN KEY REFERENCES Students(Id) NOT NULL,
		TeacherId INT FOREIGN KEY REFERENCES Teachers(Id) NOT NULL,
		PRIMARY KEY (StudentId,TeacherId)
		)

--Problem2

INSERT INTO Teachers (FirstName, LastName, [Address], Phone, SubjectId)
VALUES 
('Ruthanne','Bamb',	'84948 Mesta Junction',	'3105500146', 6),
('Gerrard','Lowin',	'370 Talisman Plaza', '3324874824',	2),
('Merrile','Lambdin', '81 Dahle Plaza',	'4373065154', 5),
('Bert','Ivie',	'2 Gateway Circle',	'4409584510', 4)

INSERT INTO Subjects ([Name], Lessons)
VALUES
('Geometry', 12),
('Health', 10),
('Drama', 7),
('Sports', 9)

--Problem3

UPDATE StudentsSubjects
SET Grade = 6
WHERE SubjectId IN (1,2) AND Grade >= 5.50

--Problem4

DELETE FROM StudentsTeachers WHERE TeacherId IN (SELECT Id FROM Teachers
WHERE Phone LIKE '%72%')

DELETE FROM Teachers WHERE Phone LIKE '%72%'

--Problem5

SELECT FirstName, LastName, Age FROM Students
WHERE Age >= 12
ORDER BY FirstName ASC, LastName ASC 

--Problem6

SELECT s.FirstName, s.LastName, COUNT(t.Id) AS TeachersCount FROM Students AS s
JOIN StudentsTeachers AS st ON s.Id = st.StudentId
JOIN Teachers AS t ON st.TeacherId = t.Id
GROUP BY s.FirstName, s.LastName

--Problem7

SELECT CONCAT(s.FirstName,' ',s.LastName) [Full Name] FROM Students AS s
LEFT JOIN StudentsExams AS se ON s.Id = se.StudentId
WHERE se.StudentId IS NULL
ORDER BY [Full Name] ASC

--Problem8

SELECT TOP (10) s.FirstName, s.LastName, CONVERT(DECIMAL(18,2), AVG(se.Grade))  AS Grade FROM Students AS s
JOIN StudentsExams AS se ON s.Id = se.StudentId
GROUP BY s.FirstName, s.LastName
ORDER BY Grade DESC, FirstName ASC, LastName ASC

--Problem9

SELECT CONCAT(s.FirstName, ' ', s.MiddleName,iif(s.MiddleName IS NULL,NULL,' '), s.LastName) AS [Full Name] FROM Students AS s
LEFT JOIN StudentsSubjects AS ss ON s.Id = ss.StudentId
WHERE ss.StudentId IS NULL
ORDER BY [Full Name]

--Problem10

SELECT [Name], AverageGrade FROM (
SELECT s.[Name], ss.SubjectId, AVG(ss.Grade) AS AverageGrade FROM Subjects AS s
JOIN StudentsSubjects AS ss ON s.Id = ss.SubjectId
GROUP BY s.[Name], ss.SubjectId
				) AS tmp
ORDER BY SubjectId

--Problem11

CREATE FUNCTION udf_ExamGradesToUpdate(@studentId INT, @grade DECIMAL(18, 2))
RETURNS NVARCHAR(MAX)
AS
BEGIN
	DECLARE @res NVARCHAR(MAX)

	IF ((SELECT COUNT(StudentId) FROM StudentsExams WHERE StudentId = @studentId) = 0)
	SET @res = 'The student with provided id does not exist in the school!'
	ELSE IF (@grade > 6.00)
	SET @res = 'Grade cannot be above 6.00!'
	ELSE
	BEGIN

	DECLARE @count INT = (SELECT COUNT(Grade) FROM StudentsExams
		WHERE StudentId = @studentId AND Grade BETWEEN @grade AND @grade + 0.5)

	DECLARE @Name NVARCHAR(MAX) = (SELECT FirstName FROM Students
		WHERE Id = @studentId)

	SET @res = CONCAT('You have to update ',@count,' grades for the student ',@Name)

	END
	RETURN @res

END

--Problem12

CREATE PROC usp_ExcludeFromSchool (@StudentId INT)
AS

	IF ((SELECT COUNT(Id) FROM Students WHERE Id = @studentId) = 0)
	THROW 50001, 'This school has no student with the provided id!', 1;
	ELSE
	BEGIN
	DELETE FROM StudentsSubjects WHERE StudentId = @studentId
	DELETE FROM StudentsExams WHERE StudentId = @studentId
	DELETE FROM StudentsTeachers WHERE StudentId = @studentId
	DELETE FROM Students WHERE Id = @studentId
	END

EXEC usp_ExcludeFromSchool 1
SELECT COUNT(*) FROM Students
