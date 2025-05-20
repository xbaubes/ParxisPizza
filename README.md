# 🎲 Parxís Pizza 🍕

L'API de ParxisPizza és una RESTful API que gestiona la base de dades d'una pizzeria. Operacions que permet:

🔹 **Gestió de pizzes** → Crear i obtenir pizzes.

🔹 **Gestió d'ingredients** → Crear i obtenir ingredients.

🔹 **Composició de pizzes** → Assignar i obtenir ingredients de cada pizza.

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
  - **`tests/`**
    - `api.test.js`

## 🔐 Configuració d'Entorn `.env`

Aquest fitxer **`.env`** conté les variables d'entorn necessàries per configurar la base de dades i el servidor de l'aplicació.

### 📌 **Variables d'Entorn**
Les següents variables defineixen la connexió a la base de dades i la configuració del servidor:

```env
# Configuració de la Base de Dades
DB_HOST=localhost        # Host de la base de dades
DB_USER=adminParxisPizza # Usuari de la base de dades
DB_PASS=CL1zmQy.asp.-Mr  # Contrasenya de la base de dades
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
Entorn de desenvolupament (inclou tests):
```sh
npm install
npm start
```
Entorn de producció:
```sh
npm install --production
npm start
```

## 🚧 Tests

Per executar els tests automatitzats utilitza la següent comanda:
```sh
npm test
```
Aquesta comanda executa tots els tests definits amb Vitest i Supertest, permetent-te assegurar que els endpoints controlats funcionen correctament abans de desplegar canvis.

## 🔧 Millores a Implementar

### 📌 **Seguretat**
- **Autenticació per accedir a les dades**: Implementar autenticació amb `JWT` o sessions segures per restringir l'accés a usuaris autenticats.
- **Xifratge de dades sensibles a la base de dades**: Usar `bcrypt` per xifrar contrasenyes i `crypto` o `argon2` per altres dades sensibles.
- **Limitar les connexions simultànies**: Configurar un `rate limiter` (`express-rate-limit`) per evitar atacs per denegació de servei (`DoS`).
- **Limitar l'accés**: Modificar la configuració de `CORS` per tal de permetre la connexió a l'API únicament des de dominis autoritzats.

### 📌 **Base de Dades**
- **Reconnexió a la base de dades**: Implementar un mecanisme automàtic per restablir la connexió del `connection pool` en cas de fallada o desconnexió inesperada, garantint així l'estabilitat del servei.
- **Evita retornar totes les files alhora quan treballes amb taules grans**: Implementar paginació per limitar la quantitat de dades retornades per consulta (`LIMIT OFFSET` en SQL).
- **Diferents formes d'ordenació de les dades**: Permetre ordenar els resultats per diferents criteris (`ASC/DESC`) mitjançant `query params` a l'API.
- **Abstracció de l'accés a dades**: Fer servir un `ORM` com `Sequelize` per simplificar l'accés a la base de dades, escriure consultes en JavaScript en lloc d'SQL i facilitar el canvi entre diferents tecnologies de bases de dades.

### 📌 **Dades**
- **Completar les operacions CRUD**: Assegurar que totes les rutes tenen les operacions `Create`, `Read`, `Update` i `Delete` implementades correctament.
- **Depurar i validar les dades rebudes**: Implementar validació amb `express-validator` o `Joi` per evitar errors de format i dades incorrectes.

### 📌 **Gestió d'errors**
- **Gestió dinàmica de l'estatus de l'error**: Personalitzar la informació de l'objecte error al ser generat, tant l'estatus amb `error.status` com el missatge amb `error.message`. Al ser tractat al middleware que centralitza la gestió d'errors, s'ha de mostrar aquesta informació i no una de genèrica.

### 📌 **Logs i Testing**
- **Afegir logs**: Integrar `winston` o `morgan` per registrar peticions i errors, millorant la monitorització de l'API.
- **Ampliar testos**: Desenvolupar proves unitàries i d'integració amb `vitest` per garantir el funcionament de cada endpoint.
- **Base de dades de testing**: Crear una segona base de dades per testejar les insercions, crear un segon fitxer `.env` per gestionar l'entorn de desenvolupament.

### 📌 **Documentació**
- **Documentació clara i completa dels endpoints**: Generar automàticament documentació interactiva via web per facilitar la col·laboració entre backend i frontend. L'estàndard més habitual és OpenAPI amb `swagger-ui-express`.
