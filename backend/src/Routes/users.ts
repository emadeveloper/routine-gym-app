import express, { Request, Response } from 'express';

const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     description: Endpoint to get all registered users on the application
 *     responses:
 *       '200':
 *         description: Successful response
 */
router.get('/users', (req: Request, res: Response) => {
    // TODO: Implement logic to get all users
});

export default router;
