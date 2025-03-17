USE master;
GO

-- Crear un Login (usuari del servidor)
CREATE LOGIN adminParxisPizza 
WITH PASSWORD = 'CL1zmQy!asp.-M!',
     DEFAULT_DATABASE = Pizzeria,
     CHECK_EXPIRATION = OFF,
     CHECK_POLICY = OFF;
GO

-- Assignar permisos a la base de dades específica
USE Pizzeria;
GO

CREATE USER adminParxisPizza FOR LOGIN adminParxisPizza;
GO

-- Concedir permisos necessaris
ALTER ROLE db_owner ADD MEMBER adminParxisPizza;
GO

