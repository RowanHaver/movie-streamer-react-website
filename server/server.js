require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const db = require("./db");
const app = express();

let emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
let passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

//middleware 
app.use(express.json()); //takes information from the body of the request and attaches it to the request object under the name body

//app.use(morgan("tiny"));


const port = process.env.PORT || 3001;

//get all - route handler
app.get("/api/v1/tester", async (req, res) => {
    try{
        const results = await db.query("select * from restaurants");
        console.log(results);
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurant: results.rows,
            },
        });
    } catch(err){
        console.log(err);
    }

});

//get specifc - route handler
app.get("/api/v1/tester/:id", async (req, res) => {
    console.log(req.params.id);

    try{
        const results = await db.query("select * from restaurants where id = $1", [req.params.id]); //paramized query
        //select * from resturants where id = req.params.id
        console.log(results.rows[0]);
        res.status(200).json({
            status: "success",
            data: {
                restaurant: results.rows[0],
            },
        });
    } catch(err){
        console.log(err);
    }

});

//create - route handler
app.post("/api/v1/tester", async (req, res) => {
    console.log(req.body);

    try {
        const results = await db.query("INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *", [req.body.name, req.body.location, req.body.price_range]);
        console.log(results);
        res.status(201).json({
            status: "success",
            data: {
                restaurant: results.rows[0],
            },
        });
    } catch(err){
        console.log(err);
    }

});

//update
app.put("/api/v1/tester/:id", async (req, res) => {
    try{
        const results = await db.query(
            "UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *", 
            [req.body.name, req.body.location, req.body.price_range, req.params.id]
        );
        console.log(results);
        //console.log(req.params.id);
        //console.log(req.body);
        res.status(200).json({
            status: "success",
            data: {
                restaurant: results.rows[0],
            },
        });
    } catch(err){
        console.log(err);
    }

});

//delete
app.delete("/api/v1/tester/:id", async (req, res) => {
    try{
        const results = await db.query(
            "DELETE FROM restaurants where id = $1", [req.params.id]
        );
        console.log(results);
        res.status(204).json({
            status: "success"
        });
    } catch(err) {
        console.log(err);
    }

});

//login
app.post("/login", async (req, res) => {
    try{
        const results = await db.query(
            "select * from customer where email = $1 AND password = $2", [req.body.email, req.body.password]
        );
        console.log(results);
        if(results.rowCount === 0){
            console.log("Doesnt work");
            res.status(200).json({
                status: "failed"
            });
        } else{
            //console.log(results);
            res.status(200).json({
                status: "success"
            });
        }
    } catch(err) {
        console.log(err);
    }
}); 

//sign up
app.post("/signup", async (req, res) => {
    console.log(req.body);
    
    try{
        console.log("start");

        const results = await db.query("select * from customer where email = $1", [req.body.email]); //paramized query
        if(results.rows.length > 0){
            console.log("There is already an account made from that email");
            res.status(200).json({
                status: "Email already found",
            });
        } else if(emailRegex.test(req.body.email) === true && passwordRegex.test(req.body.password) === true){
            console.log("Works");
            const results = await db.query(
                "INSERT INTO customer (email, password) values ($1, $2) returning *", [req.body.email, req.body.password]
            );
            res.status(200).json({
                status: "success",
            });
        } else{
            console.log("Email not valid");
            res.status(200).json({
                status: "failed",
            });
        }
    } catch(err) {
        console.log(err);
    }
}); 

app.listen(port, () => {
    console.log(`Sever is up and listening on port ${port}`);
});