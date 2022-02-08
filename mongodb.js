const mongoose = require('mongoose');
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const dbUrl = process.env.DB_URL;
const uri = process.env.DB_URL;

function connectToDB() {
    mongoose.connect(
        uri,
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