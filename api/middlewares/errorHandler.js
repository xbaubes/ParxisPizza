export const errorHandler = (err, _req, res, _next) => {
    console.error("🔥 Error:", err.message);
    res.status(500).json({ error: "Error en el servidor!" });
};
