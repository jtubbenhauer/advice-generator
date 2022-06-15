const quoteText = document.getElementById("quote");

const handleClick = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => (quoteText.innerHTML = data.slip.advice));
};
