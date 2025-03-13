-- Creació de la base de dades Pizzeria
CREATE DATABASE Pizzeria;
GO

-- Seleccionar la base de dades Pizzeria
USE Pizzeria;
GO

-- Creació de la taula Pizza
CREATE TABLE Pizza (
    ID_pizza INT IDENTITY(1,1) PRIMARY KEY,
    Nom VARCHAR(100) NOT NULL UNIQUE
);
GO

-- Creació de la taula Ingredient
CREATE TABLE Ingredient (
    ID_ingredient INT IDENTITY(1,1) PRIMARY KEY,
    Nom VARCHAR(100) NOT NULL UNIQUE
);
GO

-- Creació de la taula Composicio amb clau primària composta
CREATE TABLE Composicio (
    ID_pizza INT NOT NULL,
    ID_ingredient INT NOT NULL,
    Quantitat INT NOT NULL,
    PRIMARY KEY (ID_pizza, ID_ingredient),
    CONSTRAINT FK_Composicio_Pizza FOREIGN KEY (ID_pizza) REFERENCES Pizza(ID_pizza),
    CONSTRAINT FK_Composicio_Ingredient FOREIGN KEY (ID_ingredient) REFERENCES Ingredient(ID_ingredient)
);
GO
