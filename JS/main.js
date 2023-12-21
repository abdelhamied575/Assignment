
function getQuote(){
    const random = Number.parseInt(Math.random()*quotes.length + 1);
    document.getElementById('quote').textContent = `"${quotes[random].quote}"`;
    document.getElementById('authorOfQuote').textContent = `${quotes[random].author}`;
    
}



var quotes = [

    {
        'quote': `“Be yourself; everyone else is already taken.” `,
        'author': `--Oscar Wilde`
    },

    {
        'quote': 'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.',
        'author': '--Albert Einstein' 
    },

    {
        'quote': 'So many books, so little time.',
        'author': '--Frank Zappa' 
    },
    
    {
        'quote': 'A room without books is like a body without a soul.',
        'author': '--Wayne Gretzy'
    },

    {
        'quote': 'Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind.',
        'author': '--Bernard M. Baruch'
    },
    
    {
        'quote': 'You only live once, but if you do it right, once is enough',
        'author': '--Mae West'
    },

    {
        'quote': 'To live is the rarest thing in the world. Most people exist, that is all.',
        'author': '--Oscar Wilde'
    }

];



