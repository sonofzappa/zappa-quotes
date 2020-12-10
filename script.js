const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');



// let apiQuotes = [];


//SHow New Quote
function newQuote(){
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
 if(!quote.author){
     authorText.textContent = 'Unknown';
 }  else {
    authorText.textContent = quote.author;
 }
 //Check Length
 if(quote.text.length > 100){
     quoteText.classList.add('long-quote');
 }  else {
    quoteText.classList.remove('long-quote');
 }
    quoteText.textContent = quote.text;
}

// Get QUotes from API
// async function getQuotes(){
//     const apiUrl='https://type.fit/api/quotes';
//     try{
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//        newQuote();
//     } catch (error) {
//         //Catch Error Here
//     }
// }
// Tweet Quote
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent};`
    window.open(twitterUrl, '_blank');
}

//Event Listener
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// //On Load
// getQuotes();
newQuote();