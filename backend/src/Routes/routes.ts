import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Bienvenido a la API de mi aplicación");
});
router.get("/users", (req, res) => {
    res.send("Esta es la ruta de usuarios");
});

export default router;