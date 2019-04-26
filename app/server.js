import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from './routes';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1', router);
app.get('/', (req, res) => {
  res.status(200).send(
    'Welcom to Banka',
  );
});
app.get('/*', (req, res)=>{
  res.status(404).send({
    status: 404,
    error: 'Not Found',
  });
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
