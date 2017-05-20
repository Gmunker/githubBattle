const axios = require('axios');


function test() {
   axios.get('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
    .then(function (res) {
    console.log(`Quote: ${res.data.quoteText} by: ${res.data.quoteAuthor}`)
  })
}

test();