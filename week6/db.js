const { MongoClient } = require('mongodb');
require("dotenv").config();
const url = process.env.MONGODB_URL;

const client = new MongoClient(url);
module.exports = {
    connect: async function () {
        await client.connect();
        console.log("Connected to the server");
    },
    addToDB: async function (doc) {
        try{
            const result = await client.db("cs5610").collection("tasks").insertOne(doc);
            console.log(`New listing created with the following id: ${result.insertedId}`);
        }catch(e){
            console.error(e);
        }


    }
}