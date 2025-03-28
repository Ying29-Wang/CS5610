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
        try {
            const result = await client.db("cs5610").collection("tasks").insertOne(doc);
            console.log(`New listing created with the following id: ${result.insertedId}`);
        } catch (e) {
            console.error(e);
        }
    },
    findAll: async function () {
        try {
            const result = await client.db("cs5610").collection("tasks").find({}).toArray();
            return result;
        } catch (e) {
            console.error(e);
            return [];
        }
    },
    findById: async function (id) {
        try {
            const result = await client.db("cs5610").collection("tasks").findOne({ _id: new ObjectId(id) });
            return result;
        } catch (e) {
            console.error(e);
            return {};
        }
    },
    findOne: async function (query) {
        try {
            const result = await client.db("cs5610").collection("tasks").findOne(query);
            return result;
        } catch (e) {
            console.error(e);
            return {};
        }
    },
    // Add this to your module.exports object in db.js
    deleteTask: async function (filter) {
        try {
            const result = await client.db("cs5610").collection("tasks").deleteOne(filter);
            console.log(`Deleted ${result.deletedCount} document(s)`);
            return result;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }
}

// const { findOne } = require('./db');
const { ObjectId } = require('mongodb');

async function main() {

}

main().catch(console.error); // Call the main function
