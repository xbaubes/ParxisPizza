export const notFoundHandler = (_req, res, _next) => {
    res.status(404).json({ error: "Ruta no trobada ( •_•)" }); // El middleware errorHandler hauria de gestionar aquesta resposta ???
};
