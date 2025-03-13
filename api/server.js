import 'dotenv/config';
import app from './app.js';

// Posar en marxa el servidor
const port = process.env.PORT;
const server = process.env.SERVER;
app.listen(port, () => {
    console.log(`🚀 Servidor en marxa a http://${server}:${port}`);
});
