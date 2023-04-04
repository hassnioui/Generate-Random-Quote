window.addEventListener("load", () => {
  const quoteText = document.querySelector(".quote");
  const quoteBtn = document.querySelector("button");
  const authorName = document.querySelector(".name");
  const copyBtn = document.querySelector(".copy");
  const api = "https://api.quotable.io/random";
  const facebookBtn = document.querySelector('.facebook');
  const instagramBtn = document.querySelector('.instagram');
  const twitterBtn = document.querySelector(".twitter");

  quoteBtn.addEventListener("click", () => {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading ...";
    fetch(api)
      .then(response => response.json())
      .then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.classList.remove("loading");
        quoteBtn.innerText = "Generate";
      })
      .catch(() => {
        alert("Error fetching quote.");
        quoteBtn.classList.remove("loading");
        quoteBtn.innerText = "Generate";
      });
  });


  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText)
      .then(() => {
        copyBtn.title = "Quote copied to clipboard!";
      })
      .catch(() => {
        copyBtn.title = "Error copying quote to clipboard.";
      });
  });


  twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
  });  
  
});
