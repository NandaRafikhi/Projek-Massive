const express = require('express'); 
const bodyParser = require('body-parser');
const userRouter = require('./routers/userRouter');

const app = express(); 
const PORT = 3005; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.use('/api/user', userRouter);


app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
);