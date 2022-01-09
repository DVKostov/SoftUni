-- Problem 1
CREATE DATABASE Minions

-- Problem 2
USE Minions

CREATE TABLE Minions(
	Id INT PRIMARY KEY NOT NULL,
	[Name] NVARCHAR(50) not null,
	Age TINYINT
	)

CREATE TABLE Towns(
	Id INT PRIMARY KEY NOT NULL,
	[Name] NVARCHAR(50) NOT NULL
	)

-- Problem 3
ALTER Table Minions
	ADD TownId INT FOREIGN KEY REFERENCES Towns(Id)

-- Problem 4
INSERT INTO Towns(Id, [Name])
	VALUES
			(1, 'Sofia'),
			(2, 'Plovdiv'),
			(3, 'Varna')

INSERT INTO Minions (Id, [Name], Age, TownId)
	VALUES
			(1, 'Kevin',22, 1),
			(2, 'Bob',15, 3),
			(3, 'Steward',NULL ,2)

-- Problem 5
TRUNCATE TABLE Minions

-- Problem 6
DROP TABLE Minions
DROP TABLE Towns

-- Problem 7

CREATE TABLE People(
Id BIGINT PRIMARY KEY IDENTITY NOT NULL,
[Name] NVARCHAR(200) NOT NULL,
Picture VARBINARY(MAX)
CHECK(DATALENGTH(Picture) <= 2000 * 1024),
Height DECIMAL(3,2),
[Weight] DECIMAL(3,2),
Gender CHAR(1) NOT NULL,
Birthdate DATE NOT NULL,
Biography NVARCHAR(MAX),
)

INSERT INTO People ([Name], Gender, Birthdate)
VALUES
('IVAN','m','05-12-2020'),
('IVANKA','f','05-13-2020'),
('GOSHO','m','05-14-2020'),
('PESHO','m','05-15-2020'),
('IVA','f','05-16-2020')

-- Problem 8
CREATE TABLE Users(
	Id BIGINT PRIMARY KEY IDENTITY NOT NULL,
	Username VARCHAR(30) UNIQUE NOT NULL,
	[Password] VARCHAR(26) NOT NULL,
	ProfilePicture VARBINARY(MAX)
	CHECK(DATALENGTH(ProfilePicture) <= 900 * 1024),
	LastLoginTime DATETIME2 NOT NULL,
	IsDeleted BIT NOT NULL
	)

INSERT INTO Users (Username, [Password], LastLoginTime, IsDeleted)
	VALUES
			('Pesho0', '123456', '05.19.2020',0),
			('Pesho1', '123456', '05.19.2020',1),
			('Pesho2', '123456', '05.19.2020',0),
			('Pesho3', '123456', '05.19.2020',0),
			('Pesho4', '123456', '05.19.2020',1)

-- Problem 9
ALTER TABLE Users
DROP CONSTRAINT [PK__Users__3214EC070C4248F9]

ALTER TABLE Users
ADD CONSTRAINT PK_Users_CompositeIdUsername
PRIMARY KEY(Id, Username)

-- Problem 10
ALTER TABLE Users
ADD CONSTRAINT CK_Users_PasswordLength
CHECK(LEN([Password]) >=5)

-- Problem 11
ALTER TABLE Users
ADD CONSTRAINT DF_Users_LastLoginTime
DEFAULT GETDATE() FOR LastLoginTime

-- Problem 12
ALTER TABLE Users
DROP CONSTRAINT [PK_Users_CompositeIdUsername]

ALTER TABLE Users
ADD CONSTRAINT PK_Users_Id
PRIMARY KEY(Id)

ALTER TABLE Users
ADD CONSTRAINT CK_Users_UsernameLength
CHECK(LEN(Username) >= 3)

-- Problem 13

CREATE DATABASE Movies
USE Movies

CREATE TABLE Directors(
Id INT PRIMARY KEY IDENTITY NOT NULL,
DirectorName NVARCHAR(50) NOT NULL,
Notes NVARCHAR(MAX)
)

CREATE TABLE Genres(
Id INT PRIMARY KEY IDENTITY NOT NULL,
GenreName VARCHAR(50) NOT NULL,
Notes NVARCHAR(MAX)
)

CREATE TABLE Categories(
Id INT PRIMARY KEY IDENTITY NOT NULL,
CategoryName VARCHAR(50) NOT NULL,
Notes NVARCHAR(MAX)
)

CREATE TABLE Movies(
Id INT PRIMARY KEY IDENTITY NOT NULL,
Title NVARCHAR(50) NOT NULL,
DirectorId INT FOREIGN KEY REFERENCES Directors(Id) NOT NULL,
CopyrightYear INT NOT NULL,
[Length] INT NOT NULL,
GenreId INT FOREIGN KEY REFERENCES Genres(Id) NOT NULL,
CategoryId INT FOREIGN KEY REFERENCES Categories(Id) NOT NULL,
Rating TINYINT,
Notes NVARCHAR(MAX)
)

INSERT INTO Directors (DirectorName)
VALUES
	('Tarantino0'),
	('Tarantino1'),
	('Tarantino2'),
	('Tarantino3'),
	('Tarantino4')

INSERT INTO Genres (GenreName)
VALUES
	('Genre0'),
	('Genre1'),
	('Genre2'),
	('Genre3'),
	('Genre4')

INSERT INTO Categories (CategoryName)
VALUES
	('Category0'),
	('Category1'),
	('Category2'),
	('Category3'),
	('Category4')

INSERT INTO Movies (Title,DirectorId,GenreId,CategoryId,CopyrightYear,[Length])
VALUES
	('KILL BILL0',1,1,1,2020,120),
	('KILL BILL1',2,2,2,2021,120),
	('KILL BILL2',3,3,3,2022,120),
	('KILL BILL3',4,4,4,2023,120),
	('KILL BILL4',5,5,5,2024,120)


-- Problem 14

CREATE DATABASE CarRental 
USE CarRental 

CREATE TABLE Categories(
Id INT PRIMARY KEY IDENTITY NOT NULL,
CategoryName NVARCHAR(50) NOT NULL,
DailyRate INT,
WeeklyRate INT,
MonthlyRate INT,
WeekendRate INT
)

CREATE TABLE Cars(
Id INT PRIMARY KEY IDENTITY NOT NULL,
PlateNumber INT NOT NULL,
Manufacturer VARCHAR(50) NOT NULL,
Model VARCHAR(50) NOT NULL,
CarYear INT NOT NULL,
CategoryId INT FOREIGN KEY REFERENCES Categories(Id) NOT NULL,
Doors TINYINT NOT NULL,
Picture VARBINARY(MAX)
CHECK(DATALENGTH(Picture) <= 900 * 1024),
Condition VARCHAR(20),
Available BIT NOT NULL
)

CREATE TABLE Employees(
Id INT PRIMARY KEY IDENTITY NOT NULL,
FirstName NVARCHAR(50) NOT NULL,
LastName NVARCHAR(50) NOT NULL,
Title VARCHAR(50),
Notes NVARCHAR(MAX)
)

CREATE TABLE Customers (
Id INT PRIMARY KEY IDENTITY NOT NULL,
DriverLicenceNumber INT NOT NULL,
FullName NVARCHAR(100) NOT NULL,
[Address] NVARCHAR(100),
City NVARCHAR(50),
ZIPCode INT,
Notes NVARCHAR(MAX)
)

CREATE TABLE RentalOrders (
Id INT PRIMARY KEY IDENTITY NOT NULL,
EmployeeId INT FOREIGN KEY REFERENCES Employees(Id) NOT NULL,
CustomerId INT FOREIGN KEY REFERENCES Customers(Id) NOT NULL,
CarId INT FOREIGN KEY REFERENCES Cars(Id) NOT NULL,
TankLevel TINYINT NOT NULL,
KilometrageStart INT NOT NULL,
KilometrageEnd INT NOT NULL,
TotalKilometrage INT NOT NULL,
StartDate DATE NOT NULL,
TotalDays INT NOT NULL,
RateApplied INT NOT NULL,
TaxRate INT NOT NULL,
OrderStatus CHAR NOT NULL,
Notes NVARCHAR(MAX)
)




INSERT INTO Categories (CategoryName)
VALUES
	('Category1'),
	('Category2'),
	('Category3')

INSERT INTO Cars (PlateNumber,Manufacturer,Model,CarYear,CategoryId,Doors,Available)
VALUES
	('1234','Renaul','Megane',2007,1,5,1),
	('5678','Opel','Corsa',2009,2,4,0),
	('4789','Ford','Focus',2001,3,2,1)

INSERT INTO Employees (FirstName,LastName)
VALUES
	('Ivan','Ivanov'),
	('Petar','Petrov'),
	('Grigor','Grigorov')

INSERT INTO Customers (DriverLicenceNumber,FullName)
VALUES
	(987000,'Ivan Ivanov'),
	(654000,'Petar Petrov'),
	(321000,'Grigor Grigorov')

INSERT INTO RentalOrders (EmployeeId,CustomerId,CarId,TankLevel,KilometrageStart,KilometrageEnd,TotalKilometrage,StartDate,TotalDays,RateApplied,TaxRate,OrderStatus)
VALUES
	(1,1,1,20,120000,120999,999,'05-12-2020',9,1,1,1),
	(2,2,2,30,120000,120999,999,'05-13-2020',8,1,3,0),
	(3,3,3,10,120000,120999,999,'05-14-2020',7,2,1,1)

-- Problem 15

CREATE DATABASE Hotel
Use Hotel

CREATE TABLE Employees (
Id INT PRIMARY KEY IDENTITY NOT NULL, 
FirstName NVARCHAR(30) NOT NULL, 
LastName NVARCHAR(30) NOT NULL, 
Title VARCHAR(30), 
Notes NVARCHAR(MAX)
)

CREATE TABLE Customers (
Id INT PRIMARY KEY IDENTITY NOT NULL,
AccountNumber INT NOT NULL, 
FirstName NVARCHAR(30) NOT NULL, 
LastName NVARCHAR(30) NOT NULL, 
PhoneNumber INT, 
EmergencyName INT, 
EmergencyNumber INT, 
Notes NVARCHAR(MAX)
)

CREATE TABLE RoomStatus (
Id INT PRIMARY KEY IDENTITY NOT NULL,
RoomStatus BIT NOT NULL, 
Notes NVARCHAR(MAX)
)

CREATE TABLE RoomTypes (
Id INT PRIMARY KEY IDENTITY NOT NULL,
RoomType VARCHAR(30) NOT NULL, 
Notes NVARCHAR(MAX)
)

CREATE TABLE BedTypes (
Id INT PRIMARY KEY IDENTITY NOT NULL,
BedType VARCHAR(30) NOT NULL, 
Notes NVARCHAR(MAX)
)

CREATE TABLE Rooms (
Id INT PRIMARY KEY IDENTITY NOT NULL,
RoomNumber INT NOT NULL, 
RoomType NVARCHAR(30) NOT NULL, 
BedType NVARCHAR(30) NOT NULL, 
Rate TINYINT, 
RoomStatus BIT NOT NULL, 
Notes NVARCHAR(MAX)
)

CREATE TABLE Payments (
Id INT PRIMARY KEY IDENTITY NOT NULL, 
EmployeeId INT FOREIGN KEY REFERENCES Employees(Id) NOT NULL,
PaymentDate DATE NOT NULL, 
AccountNumber INT, 
FirstDateOccupied DATE NOT NULL, 
LastDateOccupied DATE NOT NULL, 
TotalDays INT NOT NULL, 
AmountCharged DECIMAL(7,2) NOT NULL, 
TaxRate INT, 
TaxAmount DECIMAL(7,2) NOT NULL, 
PaymentTotal DECIMAL(7,2) NOT NULL, 
Notes NVARCHAR(MAX)
)

CREATE TABLE Occupancies (
Id INT PRIMARY KEY IDENTITY NOT NULL, 
EmployeeId INT FOREIGN KEY REFERENCES Employees(Id) NOT NULL, 
DateOccupied DATE NOT NULL, 
AccountNumber INT, 
RoomNumber INT NOT NULL, 
RateApplied BIT, 
PhoneCharge BIT, 
Notes NVARCHAR(MAX)
)

INSERT INTO Employees(FirstName,LastName)
VALUES
('Ivan','Ivanov'),
('Ivan','Ivanov'),
('Ivan','Ivanov')

INSERT INTO Customers(AccountNumber,FirstName,LastName)
VALUES
(123,'Ivan','Ivanov'),
(123,'Ivan','Ivanov'),
(123,'Ivan','Ivanov')

INSERT INTO RoomStatus(RoomStatus)
VALUES
(1),
(0),
(1)

INSERT INTO RoomTypes(RoomType)
VALUES
('BIG'),
('SMALL'),
('MEDIUM')


INSERT INTO BedTypes(BedType)
VALUES
('1BED'),
('2BEDS'),
('3BEDS')

INSERT INTO Rooms(RoomNumber, RoomType, BedType, RoomStatus)
VALUES
(123,'BIG','1BED',1),
(123,'BIG','1BED',1),
(123,'BIG','1BED',1)

INSERT INTO Payments(EmployeeId,PaymentDate,FirstDateOccupied,LastDateOccupied,TotalDays,AmountCharged,TaxAmount,PaymentTotal)
VALUES
(1,'05-12-2020','05-12-2020','05-12-2020',9,20.09,20,22.33),
(1,'05-12-2020','05-12-2020','05-12-2020',9,20.09,20,22.33),
(1,'05-12-2020','05-12-2020','05-12-2020',9,20.09,20,22.33)

INSERT INTO Occupancies(EmployeeId,DateOccupied,RoomNumber)
VALUES
(1,'05-12-2020',123),
(1,'05-12-2020',123),
(1,'05-12-2020',123)

-- Problem 16
CREATE DATABASE SoftUni
USE SoftUni

CREATE TABLE Towns(
Id INT PRIMARY KEY IDENTITY,
[Name] NVARCHAR(50) NOT NULL,
)

CREATE TABLE Addresses(
Id INT PRIMARY KEY IDENTITY,
AddressText NVARCHAR(100) NOT NULL,
TownId INT FOREIGN KEY REFERENCES Towns(Id) NOT NULL
)

CREATE TABLE Departments(
Id INT PRIMARY KEY IDENTITY,
[Name] NVARCHAR(50) NOT NULL,
)

CREATE TABLE Employees(
Id INT PRIMARY KEY IDENTITY,
FirstName NVARCHAR(50) NOT NULL,
MidleName NVARCHAR(50),
LastName NVARCHAR(50) NOT NULL,
JobTitle NVARCHAR(30) NOT NULL,
DepartmentId INT FOREIGN KEY REFERENCES Departments(Id) NOT NULL,
HireDate DATE NOT NULL,
Salary DECIMAL(7,2),
AddressId INT FOREIGN KEY REFERENCES Addresses(Id)
)

-- Problem 17



-- Problem 18

INSERT INTO Towns([Name])
VALUES
('Sofia'),
('Plovdiv'),
('Varna'), 
('Burgas')

INSERT INTO Departments([Name])
VALUES
('Engineering'),
('Sales'),
('Marketing'),
('Software Development'), 
('Quality Assurance')

INSERT INTO Employees(FirstName,MidleName,LastName,JobTitle,DepartmentId,HireDate,Salary)
VALUES
('Ivan','Ivanov','Ivanov','.NET Developer',4,'02/01/2013',3500.00),
('Petar','Petrov','Petrov','Senior Engineer',1,'03/02/2004',4000.00),
('Maria','Petrova','Ivanova','Intern',5,'08/28/2016',525.25),
('Georgi','Teziev','Ivanov','CEO',2,'12/09/2007',3000.00),
('Peter','Pan','Pan','Intern',3,'08/28/2016',599.88)

-- Problem 19
SELECT * FROM Towns
SELECT * FROM Departments 
SELECT * FROM Employees 

-- Problem 20
SELECT * FROM Towns
ORDER BY [Name] ASC
SELECT * FROM Departments 
ORDER BY [Name] ASC
SELECT * FROM Employees 
ORDER BY salary DESC

-- Problem 21
SELECT [Name] FROM Towns
ORDER BY [Name] ASC
SELECT [Name] FROM Departments 
ORDER BY [Name] ASC
SELECT FirstName, LastName, JobTitle, Salary FROM Employees 
ORDER BY salary DESC

-- Problem 22
UPDATE Employees
SET Salary += Salary * 0.1
SELECT salary FROM Employees

-- Problem 23

USE Hotel
UPDATE Payments 
SET TaxRate -= TaxRate * 0.03
SELECT TaxRate FROM Payments

UPDATE Payments 
SET PaymentTotal = 10

-- Problem 24

TRUNCATE TABLE Occupancies

SELECT * FROM Occupancies