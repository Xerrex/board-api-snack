const express = require('express');
const boardRouter = require('./routes/boardRoutes');

const app = express();

// middleware
app.use(express.json());
app.use('/boards', boardRouter);

// default route
app.get('/', (req, res)=>{
    res.send('You are in the Home route')
});

// listening
app.listen(3000);