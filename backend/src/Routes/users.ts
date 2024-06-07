// backend/src/Routes/users.ts
import express, { Request, Response } from 'express';

const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     description: Endpoint para obtener todos los usuarios registrados en el gimnasio.
 *     responses:
 *       '200':
 *         description: Respuesta exitosa
 */
router.get('/users', (req: Request, res: Response) => {
    // Implementación para obtener todos los usuarios
});

export default router;
