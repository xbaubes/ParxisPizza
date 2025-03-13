-- Inserir una nova pizza
INSERT INTO Pizza (Nom) 
VALUES ('Margarita');
GO

-- Inserir 3 ingredients
INSERT INTO Ingredient (Nom) 
VALUES ('Tomàquet');
INSERT INTO Ingredient (Nom) 
VALUES ('Anxova');
INSERT INTO Ingredient (Nom) 
VALUES ('Mozzarella');
GO

-- Inserir 2 composicions (assegurant que els ID's existeixen)
INSERT INTO Composicio (ID_pizza, ID_ingredient, Quantitat)
VALUES (1, 1, 150);
INSERT INTO Composicio (ID_pizza, ID_ingredient, Quantitat)
VALUES (1, 3, 200);
GO
