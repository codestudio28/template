const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

// 1
const fileUpload = require('express-fileupload');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

// 2
app.use(fileUpload());

app.use(cors());
app.use(express.json());

// mongoose.Promise = global.Promise;
const uri = process.env.ATLAS_URI;
mongoose.connect(process.env.MONGODB_URI || uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true, useCreateIndex: true
}
);


const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDb database established successfully");
})


const accountRouter = require('./routes/account');


app.use('/accountrouter',accountRouter);




if (process.env.NODE_ENV === "production") {
    app.use(express.static('todo-react/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'todo-react', 'build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}

);