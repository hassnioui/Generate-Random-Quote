window.addEventListener("load", () => {
    const button = document.querySelector('.new-Q');
    const para = document.querySelector('.para');
    const api = "https://api.quotable.io/random";
  
    button.addEventListener("click", () => {
      fetch(api)
        .then(res => res.json())
        .then(data => {
          para.innerHTML = data.content;
        })
        .catch(() => {
          alert("Error fetching quote");
        });
    });
  });
  