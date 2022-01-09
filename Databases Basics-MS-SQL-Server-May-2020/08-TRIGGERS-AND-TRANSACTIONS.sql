-- Problem 14

CREATE OR ALTER TRIGGER tr_Logs ON Accounts FOR UPDATE
AS
	INSERT INTO Logs (AccountId, OldSum, NewSum)
	SELECT i.Id, d.Balance, i.Balance 
	FROM inserted AS i
	JOIN deleted AS d ON i.Id = d.Id

-- Problem 15

CREATE TABLE NotificationEmails (
Id INT PRIMARY KEY IDENTITY, 
Recipient INT NOT NULL, 
Subject VARCHAR(50), 
Body NVARCHAR(MAX)
)

GO

CREATE OR ALTER TRIGGER tr_sendMail ON Logs FOR INSERT
AS
	INSERT INTO NotificationEmails (Recipient, Subject, Body)
	SELECT 
	AccountId,
	CONCAT('Balance change for account: ',AccountId),
	CONCAT('On ',GETDATE(),' your balance was changed from ',OldSum,' to ',NewSum)
	FROM inserted

-- Problem 16

CREATE OR ALTER PROC usp_DepositMoney (@AccountId INT, @MoneyAmount MONEY)
AS
BEGIN TRANSACTION
	IF (SELECT COUNT(*) FROM Accounts WHERE Id = @AccountId) = 0
		ROLLBACK
	
	IF @MoneyAmount < 0
		ROLLBACK

UPDATE Accounts SET Balance = Balance + @MoneyAmount
WHERE Id = @AccountId
COMMIT

-- Problem 17

CREATE OR ALTER PROC usp_WithdrawMoney (@AccountId INT, @MoneyAmount MONEY)
AS
BEGIN TRANSACTION
	IF (SELECT COUNT(*) FROM Accounts WHERE Id = @AccountId) = 0
		ROLLBACK
	
	IF @MoneyAmount < 0
		ROLLBACK

UPDATE Accounts SET Balance = Balance - @MoneyAmount
WHERE Id = @AccountId
COMMIT

-- Problem 18

CREATE OR ALTER PROC usp_TransferMoney 
(@SenderId INT, @ReceiverId INT, @Amount MONEY)
AS
BEGIN TRANSACTION
EXEC usp_WithdrawMoney @SenderId, @Amount
EXEC usp_DepositMoney @ReceiverId, @Amount
COMMIT

-- Problem 19

CREATE TRIGGER tr_itemUserLvl ON UserGameItems INSTEAD OF INSERT
AS
	DECLARE @UserLvl INT = (SELECT [Level] FROM UsersGames AS ug
						JOIN inserted AS i ON ug.Id = i.UserGameId)
	DECLARE @ItemLvl INT = (SELECT MinLevel FROM Items AS it
						JOIN inserted AS i ON it.Id = i.ItemId)

IF @UserLvl >= @ItemLvl
BEGIN
INSERT INTO UserGameItems (ItemId, UserGameId)
SELECT * FROM inserted
END

SELECT ug.Id, ug.Cash FROM UsersGames AS ug
JOIN Users AS u ON ug.UserId = u.Id
JOIN Games AS g ON ug.GameId = g.Id
WHERE u.Username IN ('baleremuda', 'loosenoise', 'inguinalself', 'buildingdeltoid', 'monoxidecos') AND g.Name = 'Bali'



UPDATE UsersGames
SET Cash += 50000
WHERE id IN (SELECT ug.Id FROM UsersGames AS ug
JOIN Users AS u ON ug.UserId = u.Id
JOIN Games AS g ON ug.GameId = g.Id
WHERE u.Username IN ('baleremuda', 'loosenoise', 'inguinalself', 'buildingdeltoid', 'monoxidecos') AND g.Name = 'Bali')

INSERT INTO UserGameItems
GO



SELECT * FROM Users AS u
JOIN UsersGames AS ug ON u.Id = ug.UserId
JOIN Games AS g ON ug.GameId = g.Id
WHERE u.Username IN ('baleremuda', 'loosenoise', 'inguinalself', 'buildingdeltoid', 'monoxidecos') AND g.Name = 'Bali' 

SELECT * FROM Items
WHERE Id BETWEEN 251 AND 299 OR Id BETWEEN 501 AND 539

SELECT * FROM (
SELECT * FROM Users AS u
				JOIN UsersGames AS ug ON u.Id = ug.UserId
				JOIN Games AS g ON ug.GameId = g.Id
				WHERE u.Username IN ('baleremuda', 'loosenoise', 'inguinalself', 'buildingdeltoid', 'monoxidecos') AND g.Name = 'Bali' 
				) AS tmp1
FULL JOIN (SELECT * FROM Items
WHERE Id BETWEEN 251 AND 299 OR Id BETWEEN 501 AND 539) AS tmp2


-- Problem 20

