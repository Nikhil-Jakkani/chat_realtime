const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from the Backend directory
dotenv.config({ path: path.join(__dirname, '../.env') });

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error('MongoDB URI is not defined in environment variables');
        }
        
        console.log('Attempting to connect to MongoDB Atlas...'.yellow);
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            retryWrites: true,
            w: 'majority'
        });
        
        console.log(`MongoDB Atlas Connected: ${conn.connection.host}`.cyan.underline);
        return conn;
    } catch (error) {
        console.log('=== MongoDB Connection Error ==='.red.bold);
        console.log(`Error: ${error.message}`.red);
        
        if (error.message.includes('Authentication failed')) {
            console.log('\nAuthentication failed. Please check your MongoDB Atlas credentials.'.yellow);
        } else if (error.message.includes('getaddrinfo ENOTFOUND')) {
            console.log('\nCould not resolve MongoDB Atlas hostname. Please check your internet connection.'.yellow);
        } else if (error.message.includes('connection timed out')) {
            console.log('\nConnection timed out. Please check your internet connection or MongoDB Atlas status.'.yellow);
        }
        
        process.exit(1);
    }
}


module.exports=connectDB;