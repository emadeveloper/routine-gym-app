import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './Routes/users';
import swagger from './swagger';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Swagger routes for docs
app.use('/', swagger);
// Application routes
app.use('/', userRoutes);

app.get('/', (req, res) => {
    res.send('The backend application is working!');
});

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:5000/gimnasio';

mongoose.connect(mongoURI)
    .then(() => {
        console.log('Conectado a MongoDB');
        app.listen(PORT, () => {
            console.log(`Server running at the port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error connecting to MongoDB', err);
    });
