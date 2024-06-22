const mongoose = require('mongoose');

// Database connection
const connect = async () => {
    try {
        mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Server is Connected to the MongoDB Database');
    }
    catch (err) {
        console.log("Server is NOT connected to the Database", err.message);  
    }
};

module.exports = connect;