const mongoose = require('mongoose');
const dbUrl = process.env.DB_URL;


function connectToDB() {
    mongoose.connect(
        dbUrl,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (err) => {
            if (err) {
                console.log(`Could not connect to ${process.env.DB_NAME}:`, err);
                return;
            }
            console.log(`Successfully connected to ${process.env.DB_NAME}`);
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