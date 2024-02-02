const displayQuote = document.getElementById("quoteOfTheDay");
const slideshowImage = document.getElementById("slideshowImage");

let quotes = null;

let displaySlideshow = [
    "https://img.freepik.com/premium-photo/adorable-cute-kawaii-cat-sticker-design-illustration_784625-2243.jpg?w=360",
    "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/maax/products/651953/shirt-1530790983-0593bdfcc0de80a97f353f05a9c1893c.png?v=3&d=eyJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV0sICJmb3JjZSI6IGZhbHNlLCAib25seV9tZXRhIjogZmFsc2V9",
    "https://as2.ftcdn.net/v2/jpg/05/71/79/75/1000_F_571797588_ULvIdtQ207uA2qlYGAccHQVI3iUxhXrC.jpg",
    "https://ih1.redbubble.net/image.410770626.3037/flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f802150-66ea-43cc-8f5b-a0ceb24350ea/dgfau7n-0363d39e-92aa-44f3-9be0-49853308c35c.png/v1/fill/w_894,h_894,q_70,strp/kawaii_cat_by_elffyie_dgfau7n-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzFmODAyMTUwLTY2ZWEtNDNjYy04ZjViLWEwY2ViMjQzNTBlYVwvZGdmYXU3bi0wMzYzZDM5ZS05MmFhLTQ0ZjMtOWJlMC00OTg1MzMwOGMzNWMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.FOYe4S8_7hd0oSWiaCQti37YvJc_zxFj0-3Ubu_sbck"
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
