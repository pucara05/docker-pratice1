import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001; // Usa el puerto del entorno o 3000 por defecto

app.get('/', (req, res) => {
 console.log('Alguien ha accedido a la página principal');
  res.send('¡Hola desde mi contenedor Docker!');
});

app.listen(port, () => {

   const appUrl = `http://localhost:${port}`;

  console.log(`Servidor escuchando en el puerto ${port}`);
  console.log(`API available at: ${appUrl}`);
});