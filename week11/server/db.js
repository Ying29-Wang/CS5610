const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const url = process.env.MONGODB_URL || "mongodb://localhost:27017/taskdb";

const client = new MongoClient(url);

async function connectToDb() {
    await client.connect();
    console.log("Connected to the server");
    return client.db();
}

async function getTasks() {
    const db = await connectToDb();
    const tasks = await db.collection("tasks").find({}).toArray();
    return tasks;
}

async function addTask(task) {
    const db = await connectToDb();
    const result = await db.collection("tasks").insertOne(task);
    console.log(`New listing created with the following id: ${result.insertedId}`);
    return result;
}

async function deleteTask(filter) {
    try {
        const db = await connectToDb();
        const result = await db.collection("tasks").deleteOne(filter);
        console.log(`Deleted ${result.deletedCount} document(s)`);
        return result;
    } catch (error) {
        console.error("Error deleting task:", error);
        throw error;
    }
}

module.exports = {
    connectToDb,
    getTasks,
    addTask,
    deleteTask,
    findAll: async function () {
        try{
            const result = await client.db("cs5610").collection("tasks").find({}).toArray();
            return result;
        }catch(e){
            console.error(e);
            return [];
        }
    },
    findById: async function (id) {
        try{
            const result = await client.db("cs5610").collection("tasks").findOne({ _id: new ObjectId(id) });
            return result;
        }catch(e){
            console.error(e);
            return {};
        }
    },
    findOne: async function (query) {
        try{
            const result = await client.db("cs5610").collection("tasks").findOne(query);
            return result;
        }catch(e){
            console.error(e);
            return {};
        }
    }
}

const { findOne } = require('./db');

async function main() {

}

main().catch(console.error); // Call the main function
