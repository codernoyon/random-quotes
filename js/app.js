const loadQuotes = () => {
    fetch("https://api.kanye.rest/")
        .then(res => res.json())
        .then(data => displayQuotes(data));
}

const displayQuotes = quote => {
    const para = document.getElementById("para");
    para.innerText = quote.quote;
}