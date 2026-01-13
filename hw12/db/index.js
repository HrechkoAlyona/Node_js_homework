import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);
let db;

export const connectToDB = async () => {
    try {
        await client.connect();
        db = client.db();
        console.log('Connected successfully to MongoDB');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
        process.exit(1);
    }
};

export const getDB = () => db;