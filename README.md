# 🎲 Parxís Pizza 🍕

L'API de ParxisPizza és una RESTful API que gestiona la base de dades d'una pizzeria, permetent operacions com:

🔹 **Gestió de pizzes** → Crear i obtenir pizzes.

🔹 **Gestió d'ingredients** → Crear i obtenir ingredients.

🔹 **Composició de pizzes** → Assignar ingredients a cada pizza.

🛠️ **Tecnologies:** Node.js, Express, SQL Server.

🔗 **Prova l'API:** [Col·lecció de Postman](https://github.com/xbaubes/ParxisPizza/blob/main/ParxisPizza.postman_collection.json).


## 🌐 Endpoints API

| **Mètode** | **Ruta**                | **Descripció**                   |
|------------|-------------------------|----------------------------------|
| 🟢GET     | `/pizzes`               | Obtenir pizzes                   |
| 🔴POST    | `/pizzes`               | Crear una nova pizza             |
| 🟢GET     | `/ingredients`          | Obtenir ingredients              |
| 🔴POST    | `/ingredients`          | Afegir un nou ingredient         |
| 🟢GET     | `/composicions/:IdPizza`| Obtenir ingredients d'una pizza  |
| 🔴POST    | `/composicions`         | Assignar ingredient a una pizza  |


## 💾 Database Schema

![Diagrama de la Pizzeria](https://github.com/xbaubes/BasesDeDades/wiki/SentenciesSQL/pizzeria.png)

Aquest esquema representa pizzes, ingredients i la seva relació dins del nostre sistema.

[Disseny implementat](https://github.com/xbaubes/BasesDeDades/wiki/Disseny-de-Bases-de-Dades).

## 📂 Estructura del Projecte

- **`ParxisPizza/`**
  - `.env`
  - `.gitignore`
  - `package.json`
  - `package-lock.json`
  - **`api/`**
    - `server.js`
    - `app.js`
    - **`middlewares/`**
      - `errorHandler.js`
      - `notFoundHandler.js`
    - **`routes/`**
      - `routes.js`
      - `pizzaRoutes.js`
      - `ingredientRoutes.js`
      - `composicioRoutes.js`
    - **`models/`**
      - `pizzaModel.js`
      - `ingredientModel.js`
      - `composicioModel.js`
    - **`controllers/`**
      - `pizzaController.js`
      - `ingredientController.js`
      - `composicioController.js`
  - **`db/`**
    - `inserts.sql`
    - `database-tables.sql`
    - `config.js`
    - `connect.js`
    - `user.sql`


## 🔐 Configuració d'Entorn `.env`

Aquest fitxer **`.env`** conté les variables d'entorn necessàries per configurar la base de dades i el servidor de l'aplicació.

### 📌 **Variables d'Entorn**
Les següents variables defineixen la connexió a la base de dades i la configuració del servidor:

```env
# Configuració de la Base de Dades
DB_HOST=localhost        # Host de la base de dades
DB_USER=adminParxisPizza # Usuari de la base de dades
DB_PASS=CL1zmQy!asp.-M!  # Contrasenya de la base de dades
DB_NAME=Pizzeria         # Nom de la base de dades

# Configuració del Servidor
PORT=3000                # Port en el qual s'executa el servidor
SERVER=localhost         # Nom del servidor
```
Hauràs de crear el fitxer **`.env`** i afegir-lo al projecte. Veure [Estructura del projecte](#-estructura-del-projecte).


## 🚀 Execució del Projecte

### 📌 **DB**
Inicialitzar base de dades amb els [scripts SQL](https://github.com/xbaubes/ParxisPizza/tree/main/db) inclosos al projecte.
### 📌 **API**
```sh
npm install
npm start
```

## 🔧 Millores a Implementar

### 📌 **Seguretat**
- **Evitar la vulnerabilitat a injecció SQL**: Utilitzar `parameterized queries` amb `mssql` o un ORM com `Sequelize` per evitar atacs per injecció SQL.
- **Autenticació per accedir a les dades**: Implementar autenticació amb `JWT` o sessions segures per restringir l'accés a usuaris autenticats.
- **Xifratge de dades sensibles a la base de dades**: Usar `bcrypt` per xifrar contrasenyes i `crypto` o `argon2` per altres dades sensibles.

### 📌 **Base de Dades**
- **Connexió i reconnexió a la base de dades**: Configurar un `connection pool` per millorar l'eficiència de les consultes i evitar problemes de connexió.
- **Quan treballes amb taules grans, evita retornar totes les files alhora**: Implementar paginació per limitar la quantitat de dades retornades per consulta (`LIMIT OFFSET` en SQL).
- **Diferents formes d'ordenació de les dades**: Permetre ordenar els resultats per diferents criteris (`ASC/DESC`) mitjançant query params a l'API.

### 📌 **Millores en l'API**
- **Completar les operacions CRUD**: Assegurar que totes les rutes tenen les operacions `Create`, `Read`, `Update` i `Delete` implementades correctament.
- **Depurar i validar les dades rebudes**: Implementar validació amb `express-validator` o `Joi` per evitar errors de format i dades incorrectes.

### 📌 **Logs i Testing**
- **Afegir logs**: Integrar `winston` o `morgan` per registrar peticions i errors, millorant la monitorització de l'API.
- **Afegir testos**: Desenvolupar proves unitàries i d'integració amb `Jest` o `Mocha + Chai` per garantir la qualitat del codi.

### 📌 **Optimització**
- **Limitar les connexions simultànies**: Configurar un `rate limiter` (`express-rate-limit`) per evitar atacs per denegació de servei (`DoS`).

