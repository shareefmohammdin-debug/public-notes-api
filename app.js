require("dotenv").config()
const express = require("express")
const cors = require('cors')
const chalk = require("chalk")
const notesRoute = require('./routes/notesRoute')

const app = express();

app.use(cors())
app.use(express.json())


app.use('/notes', notesRoute)


app.listen(process.env.PORT || 3000, () => {
    console.log(chalk.green(`\nthe server work in ${process.env.PORT || 1234}`));
    console.log(chalk.blue('http://localhost:1122'))
});
