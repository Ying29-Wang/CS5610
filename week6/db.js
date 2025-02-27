const { MongoClient } = require('mongodb');
const url = "mongodb+srv://webDevelopment:webDevelopment@cluster0.v6zmb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(url);
module.exports = {
    connect: async function () {
        await client.connect();
    },
    addToDB: async function (doc) {
        try{
            const result = await client.db("cs5610").collection("tasks").insertOne(doc);
        }catch(e){
            console.error(e);
        }


    }
}