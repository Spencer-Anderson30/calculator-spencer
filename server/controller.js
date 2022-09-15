module.exports = {

    getQuote: (req, res) => {
        console.log('getQuote')
        const quotes = ["Pure mathematics is, in its way, the poetry of logical ideas.","Without mathematics, there's nothing you can do. Everything around you is mathematics. Everything around you is numbers.", "Mathematics is the most beautiful and most powerful creation of the human spirit.", "As far as the laws of mathematics refer to reality, they are not certain, and as far as they are certain, they do not refer to reality.", "What is mathematics? It is only a systematic effort of solving puzzles posed by nature.", "Mathematics is the music of reason.", "Mathematics knows no races or geographic boundaries; for mathematics, the cultural world is one country.", "There should be no such thing as boring mathematics.", "'Obvious' is the most dangerous word in mathematics.", "Mathematics allows for no hypocrisy and no vagueness.", "I've always enjoyed mathematics. It is the most precise and concise way of expressing an idea.", "It is impossible to be a mathematician without being a poet in soul.", "A mathematician who is not also something of a poet will never be a complete mathematician.", "In mathematics the art of proposing a question must be held of higher value than solving it.", "It is clear that the chief end of mathematical study must be to make the students think.", "Go down deep enough into anything and you will find mathematics.", "Nature is written in mathematical language.", "Mathematics is a language.", "The essence of mathematics lies in its freedom.", "Wherever there is number, there is beauty."];
      
        // choose random quote
        let randomIndex = Math.floor(Math.random() * quotes.length);
        let randomQuote = quotes[randomIndex];
      
        res.status(200).send(randomQuote);
    },
    createNewBudget: (req, res) => {
        let {price, whatToSaveFor} = req.body

        db.push({
            price: price, 
            whatToSaveFor: isNaN(+$$) ? 1 : +power
        })

        res.send(db)
    },
}