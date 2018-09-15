const express=require('express');
const bodyParser=require('body-parser');
const database = require('./config/database');
const booksRoutes = require('./src/routes/books');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/', booksRoutes);

database.connect()
    .then(() => app.listen(port, () => console.log(`app is runnig on port: ${port}`)))
    .catch(err => {
        console.error(err);
        process.exit(1);

    });
