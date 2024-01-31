const displayQuote = document.getElementById("quoteOfTheDay");
const slideshowImage = document.getElementById("slideshowImage");

let displaySlideshow = [
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f802150-66ea-43cc-8f5b-a0ceb24350ea/dgfau7n-0363d39e-92aa-44f3-9be0-49853308c35c.png/v1/fill/w_894,h_894,q_70,strp/kawaii_cat_by_elffyie_dgfau7n-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzFmODAyMTUwLTY2ZWEtNDNjYy04ZjViLWEwY2ViMjQzNTBlYVwvZGdmYXU3bi0wMzYzZDM5ZS05MmFhLTQ0ZjMtOWJlMC00OTg1MzMwOGMzNWMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.FOYe4S8_7hd0oSWiaCQti37YvJc_zxFj0-3Ubu_sbck",
    "https://img.freepik.com/premium-photo/adorable-cute-kawaii-cat-sticker-design-illustration_784625-2215.jpg"

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
    
fetch(`https://api.api-ninjas.com/v1/quotes?category=computers`)
    .then(resp => resp.json())
    .then(data =>{
    console.log(data)})