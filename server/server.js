import express from 'express';
import cors from 'cors';
import { readdirSync } from 'fs';
import mongoose from 'mongoose';
import { ConsoleSqlOutlined } from '../client/node_modules/@ant-design/icons/lib';
const morgan = require("morgan");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"))

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => console.log('**DB Connected**'))
.catch((err) => console.error('DB Connection Error =>',  err));

readdirSync('./routes').map((route) => {
    app.use("/api", require(`./routes/${route}`));
})

app.get('/', (req, res, next) => {
    res.send('you are here');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT,  () => {
    console.log(`Server is listening on port ${PORT}`);
})




