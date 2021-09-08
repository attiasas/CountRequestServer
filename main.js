// Lib imports
const express = require("express");
const DB = require("../DevOpsHomeAss/utils/DB_utils");
// app config
const app = express();
const port = process.env.PORT || 3000;

app.get("/count", async (req,res,next) => {
    try
    {
        let count = await DB.addCount();
        console.log("request recived, total " + count);
        res.status(200).send({"count" : count});
    }
    catch (error) 
    {
        next(error);
    }
});


// Catch Errors
app.use(function (err, req, res, next) {
    console.error(err);
    res.sendStatus(err.status || 500);
});

// Default Router
app.get((req,res) =>{
    res.sendStatus(404);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});