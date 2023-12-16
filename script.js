const author = document.getElementById("author")
const quote = document.getElementById("quote")

const api_url = "https://api.quotable.io/random"

async function getquote(url){

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    author.innerHTML = data.author;
    quote.innerHTML = data.content;

}

getquote(api_url);

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "-by " + author.innerHTML, "tweet window", "width=600, height=300")
}


