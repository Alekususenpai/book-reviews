const mongoose = require('mongoose');
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const connectionString = `mongodb+srv://${username}:${password}@cluster0.r9vho.mongodb.net/${dbName}?retryWrites=true&w=majority`

function connectToDB() {
    mongoose.connect(
        connectionString,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (err) => {
            if (err) {
                console.log(`Could not connect to ${dbName}:`, err);
                return;
            }
            console.log(`Successfully connected to ${dbName}`);
        }
    )
};



const reviewSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    }
});

const Review = mongoose.model('Review', reviewSchema);


module.exports = {
    connectToDB, reviewSchema, Review
}