export const errorHandler = (err, _req, res, _next) => {
    console.error("🔥 Error:", err.message);
    res.status(500).json({ error: "Error en el servidor! (╯°□°)╯︵ ┻━┻" }); // Tots els errors tenen el mateix missatge. Com puc retornar un missatge curt i personalitzat per cada error ???
};
