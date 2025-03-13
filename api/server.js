import 'dotenv/config';
import app from './app.js';

// Posar en marxa el servidor
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`🚀 Servidor en marxa a http://localhost:${port}`);
});
