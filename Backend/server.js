import express from "express";
import mongoose  from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";

const app = express();
const port = process.env.PORT || 8001;
const connection_url = "mongodb+srv://admin:sJi4Wm0uQB3oOhfy@cluster0.jr7wv.mongodb.net/tinderdb?retryWrites=true&w=majority";

app.use(express.json())
app.use(Cors());


mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

app.get("/", (req, res)=>res.status(200).send("Hello, its me!"));

app.post("/tinder/cards", (req, res)=>{
    const dbCards = req.body;

    Cards.create(dbCards, (err, data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    });
});

app.get("/tinder/cards", (req, res)=>{
    Cards.find((err, data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    }); 
});

app.listen(port, ()=>console.log(`listening on localhost: ${port}`));