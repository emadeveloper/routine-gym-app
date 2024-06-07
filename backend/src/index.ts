import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import routes from './Routes/routes';
import swagger from "./swagger"

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());

app.use('/', routes );
app.use("/", swagger)

app.listen(PORT, () => {
    try {
        console.log(`Servidor corriendo en el puerto ${PORT}`)
    } catch (error) {
        console.error("Error al conectar con el puerto", error);
    }
})

// mongoose.connect('mongodb://localhost:27017/gimnasio')
//     .then(() => {
//         console.log('Conectado a MongoDB');
//         app.listen(PORT, () => {
//             console.log(`Servidor corriendo en el puerto ${PORT}`);
//         });
//     })
//     .catch(err => {
//         console.error('Error al conectar a MongoDB', err);
//     });
