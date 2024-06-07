import express from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const router = express.Router();

//DOCUMENTED ROUTES
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de la Aplicación de Rutinas de Gimnasio',
            version: '1.0.0',
            description: 'Documentación de la API de Aplicación de Rutinas Gimnasio',
        },
    },
    apis: ['./Routes/*.ts'],
};

const specs = swaggerJsdoc(options);

router.use('/docs', swaggerUI.serve);
router.get('/docs', swaggerUI.setup(specs));

export default router;
