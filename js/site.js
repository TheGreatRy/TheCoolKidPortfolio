const displayQuote = document.getElementById("quoteOfTheDay");
const slideshowImage = document.getElementById("slideshowImage");

let quotes = null;

let displaySlideshow = [
    "./images/Bella1.jpg",
    "./images/Bella2.JPG",
    "./images/Bella3.jpg",
    "./images/Bella4.JPG",
    "./images/Bella5.jpg"
]
let currentImageIndex = 0;

function updateSlideshow(){
    currentImageIndex++;
    if (currentImageIndex >= displaySlideshow.length){
        currentImageIndex = 0;
    }
    let nextImageURL = displaySlideshow[currentImageIndex]
    slideshowImage.src = nextImageURL;
}
setInterval(updateSlideshow, 5000);

    
fetch(`https://type.fit/api/quotes`)
    .then(resp => resp.json())
    .then(data => {
        quotes = data;
        processQuotes(quotes);
    });
 
function processQuotes(quotes){
    let html = "";

    let key = Math.floor(Math.random() * 15);
    let quote = quotes[key];
    console.log(quote);
    html = getQuoteHTML(quote);

    displayQuote.innerHTML = html;
}
 
function getQuoteHTML(quote){
    let quoteText = quote.text;
    let quoteAuthor = quote.author;
    let quoteHTML = `<div> "${quoteText}" </div>
                    <div> - ${quoteAuthor} (quote provided by type.fit) </div>` ;
    
                    return quoteHTML;
 }
