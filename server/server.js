import express from 'express';
import cors from 'cors';
const morgan = require("morgan");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"))


app.get('/', (req, res, next) => {
    res.send('you are here');

});

const PORT = 8000
app.listen(PORT,  () => {
    console.log(`Server is listening on port ${PORT}`);
})




