const mongoose = require('mongoose');
const username = 'Alekusu_atlasDB'
const password = 'dtBHZedjT6JaK7hY'
const dbName = 'bookReviews'
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



/*const book1 = new Review({
          author: 'Tara Westover',
          title: 'Educated',
          summary: "Tara Westover and her family grew up preparing for the End of Days but, according to the government, she didn't exist. She hadn't been registered for a birth certificate. She had no school records because she'd never set foot in a classroom, and no medical records because her father didn't believe in hospitals. As she grew older, her father became more radical and her brother more violent. At sixteen, Tara knew she had to leave home. In doing so she discovered both the transformative power of education, and the price she had to pay for it."
});


const otherRev = [{
          author: "Yuval Noah Harari",
          title: "Sapiens: A Brief History of Humankind",
          summary: "100,000 years ago, at least six human species inhabited the earth. Today there is just one. Us. Homo sapiens. How did our species succeed in the battle for dominance? And what will our world be like in the millennia to come? Bold, wide-ranging and provocative, SAPIENS challenges everything we thought we knew about being human: our thoughts, our actions, our power ... and our future."
},
{
          author: "Sally Rooney",
          title: "Normal People",
          summary: "Connell and Marianne grow up in the same small town in the west of Ireland, but the similarities end there. In school, Connell is popular and well-liked, while Marianne is a loner. But when the two strike up a conversation - awkward but electrifying - something life-changing begins.Normal People is a story of mutual fascination, friendship and love. It takes us from that first conversation to the years beyond, in the company of two people who try to stay apart but find they can't."
},
{
          author: "Maggie Shipstead",
          title: "Great Circle",
          summary: "From the night she is rescued as a baby out of the flames of a sinking ship; to the day she joins a pair of daredevil pilots looping and diving over the rugged forests of her childhood, to the thrill of flying Spitfires during the war, the life of Marian Graves has always been marked by a lust for freedom and danger.In 1950, she embarks on the great circle flight, circumnavigating the globe. It is Marian's life dream and her final journey, before she disappears without a trace. Half a century later, Hadley Baxter, a scandal-ridden Hollywood actress whose own parents perished in a plane crash is irresistibly drawn to play Marian Graves, a role that will lead her to probe the true mystery behind the vanished pilot."
},
{
          author: "Patricia Lockwood",
          title: "No One Is Talking About This",
          summary: "This is a story about a life lived in two halves. It's about what happens when real life collides with the world accessed through a screen. It's about where we go when existential threats loom and high-stakes reality claims us back. It's about living in world that contains both an abundance of proof that there is goodness, empathy, and justice in the universe, and a deluge of evidence to the contrary.Irreverent and sincere, poignant and delightfully profane, No One Is Talking About This is a meditation on love, language and human connection from one of the most original voices of our time."
}]


Review.insertMany(otherRev)
          .then(res => {
                    console.log('Success, insertions saved!')
          }).catch(err => { console.error('Cannot save the insertions', err) });

book1.save((err) => {
          if(err) {
              console.log('Cannot save the insertion', err);
              return;
          }
          console.log('Success, insertion saved!');
      })*/

module.exports = {
    connectToDB, reviewSchema, Review
}