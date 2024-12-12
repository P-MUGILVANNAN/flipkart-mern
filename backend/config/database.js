// const mongoose = require('mongoose');
// const MONGO_URI = process.env.MONGO_URI;

// mongoose.set('strictQuery', false);
// const connectDatabase = () => {
//     mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//         .then(() => {
//             console.log("Mongoose Connected");
//         });
// }

// module.exports = connectDatabase;
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error("MongoDB URI is undefined! Please check your .env file.");
    process.exit(1); // Stop the process if the URI is not defined
}

mongoose.set('strictQuery', false);

const connectDatabase = () => {
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Mongoose Connected");
        })
        .catch((error) => {
            console.error("MongoDB connection error:", error);
            process.exit(1); // Stop the process if there's a connection error
        });
};

module.exports = connectDatabase;