import express from 'express';
import cors from 'cors';
import fs from 'fs';
const morgan = require("morgan");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"))

fs.readdirSync('./routes').map((route) => {
    app.use("/api", require(`./routes/${route}`));
})

app.get('/', (req, res, next) => {
    res.send('you are here');

});

const PORT = process.env.PORT || 8000;
app.listen(PORT,  () => {
    console.log(`Server is listening on port ${PORT}`);
})




