const mongoose = require('mongoose');
const colors = require('colors');

// function connect manngodb
const connectDb = async() => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/dbbase");
        console.log(`connected to mongodb ${conn.connection.host}`.bgRed);
    } catch (error) {
        console.log(`mongodb error ${error.message}`.bgRed);
        process.exit(1);
    }
}

module.exports = connectDb;