"use strict";

const loader = document.querySelector(".loader");
const quotecontainer = document.querySelector(".quote-container");

let apiQuotes = [];

// Get Quotes From API
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";

  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Catch Error Here
  }
}

// Show New Quote
function newQuote() {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  document.querySelector("#quote").innerHTML = quote.text;
  document.querySelector("#author").innerHTML = quote.author;
}

// On Load
getQuotes();
