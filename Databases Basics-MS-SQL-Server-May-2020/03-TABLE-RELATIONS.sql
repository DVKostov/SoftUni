--Problem1

CREATE TABLE Passports(
PassportID INT PRIMARY KEY,
PassportNumber VARCHAR(8) NOT NULL
)

CREATE TABLE Persons(
PersonID INT PRIMARY KEY IDENTITY,
FirstName nvarchar(50) NOT NULL,
Salary DECIMAL(7,2) NOT NULL, 
PassportID INT FOREIGN KEY REFERENCES Passports(PassportID) UNIQUE
)

INSERT INTO Passports
VALUES
(101,'N34FG21B'),
(102,'K65LO4R7'),
(103,'ZE657QP2')


INSERT INTO Persons (FirstName, Salary, PassportID)
VALUES
('Roberto',43300.00,102),
('Tom',56100.00,103),
('Yana',60200.00,101)

--Problem2

CREATE TABLE Manufacturers (
ManufacturerID INT PRIMARY KEY IDENTITY,
[Name] NVARCHAR(50) NOT NULL,
EstablishedOn DATE NOT NULL
)

CREATE TABLE Models (
ModelID INT PRIMARY KEY,
[Name] NVARCHAR(50) NOT NULL,
ManufacturerID INT FOREIGN KEY REFERENCES Manufacturers(ManufacturerID) NOT NULL
)

INSERT INTO Manufacturers ([Name], EstablishedOn)
VALUES
('BMW','03-07-1916'),
('Tesla','01-01-2003'),
('Lada','05-01-1966')

INSERT INTO Models
VALUES
(101,'X1',1),
(102,'i6',1),
(103,'Model S',2),
(104,'Model X',2),
(105,'Model 3',2),
(106,'Nova',3)

--Problem3

CREATE TABLE Students (
StudentID INT PRIMARY KEY IDENTITY,
[Name] NVARCHAR(50) NOT NULL
)

CREATE TABLE Exams (
ExamID INT PRIMARY KEY,
[Name] NVARCHAR(50) NOT NULL
)

CREATE TABLE StudentsExams (
StudentID INT FOREIGN KEY REFERENCES Students(StudentID) NOT NULL,
ExamID INT FOREIGN KEY REFERENCES Exams(ExamID) NOT NULL,
PRIMARY KEY (StudentID, ExamID)
)

INSERT INTO Students ([Name])
VALUES
('Mila'),
('Toni'),
('Ron')

INSERT INTO Exams
VALUES
(101,'SpringMVC'),
(102,'Neo4j'),
(103,'Oracle 11g')

INSERT INTO StudentExams
VALUES
(1,101),
(1,102),
(2,101),
(3,103),
(2,102),
(2,103)

--Problem4

CREATE TABLE Teachers (
TeacherID INT PRIMARY KEY,
[Name] NVARCHAR(50) NOT NULL,
ManagerID INT FOREIGN KEY REFERENCES Teachers(TeacherID)
)

INSERT INTO Teachers
VALUES
(101,'John',NULL),
(102,'Maya',106),
(103,'Silvia',106),
(104,'Ted',105),
(105,'Mark',101),
(106,'Greta',101)

--Problem5

CREATE DATABASE Online_Store 
USE Online_Store

CREATE TABLE Cities (
	CityID INT PRIMARY KEY IDENTITY,
	[Name] VARCHAR(50) NOT NULL
)

CREATE TABLE ItemTypes (
	ItemTypeID INT PRIMARY KEY IDENTITY,
	[Name] VARCHAR(50) NOT NULL
)

CREATE TABLE Customers (
	CustomerID INT PRIMARY KEY IDENTITY,
	[Name] VARCHAR(50) NOT NULL,
	Birthday DATE,
	CityID INT FOREIGN KEY REFERENCES Cities(CityID) NOT NULL
)

CREATE TABLE Items (
	ItemID INT PRIMARY KEY IDENTITY,
	[Name] VARCHAR(50) NOT NULL,
	ItemTypeID INT FOREIGN KEY REFERENCES ItemTypes(ItemTypeID) NOT NULL
)

CREATE TABLE Orders (
	OrderID INT PRIMARY KEY IDENTITY,
	CustomerID INT FOREIGN KEY REFERENCES Customers(CustomerID) NOT NULL
)

CREATE TABLE OrderItems (
	OrderID INT FOREIGN KEY REFERENCES Orders(OrderID) NOT NULL,
	ItemID INT FOREIGN KEY REFERENCES Items(ItemID) NOT NULL,
	PRIMARY KEY (OrderID, ItemID)
)

--Problem6

CREATE DATABASE Table_Relations2
Use [Table Relations]

CREATE TABLE Subjects (
SubjectID INT PRIMARY KEY,
SubjectName NVARCHAR(80) NOT NULL
)

CREATE TABLE Majors (
MajorID INT PRIMARY KEY,
[Name] NVARCHAR(50) NOT NULL
)

CREATE TABLE Students (
StudentID INT PRIMARY KEY,
StudentNumber VARCHAR(10) NOT NULL,
StudentName NVARCHAR(50),
MajorID INT FOREIGN KEY REFERENCES Majors(MajorID) NOT NULL
)

CREATE TABLE Payments (
PaymentID INT PRIMARY KEY,
PaymentDate DATE NOT NULL,
PaymentAmount DECIMAL(15,2) NOT NULL,
StudentID INT FOREIGN KEY REFERENCES Students(StudentID) NOT NULL
)

CREATE TABLE Agenda (
StudentID INT FOREIGN KEY REFERENCES Students(StudentID) NOT NULL,
SubjectID INT FOREIGN KEY REFERENCES Subjects(SubjectID) NOT NULL,
PRIMARY KEY (StudentID, SubjectID)
)

--Problem9

USE Geography

SELECT * FROM Mountains
SELECT * FROM Peaks

SELECT MountainRange, PeakName, Elevation
FROM Mountains
JOIN Peaks ON Mountains.Id=Peaks.MountainId
WHERE MountainRange='Rila'
ORDER BY Elevation DESC