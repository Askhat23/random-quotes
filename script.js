import quotes from './quotes.js';

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote-author');
const button = document.getElementById('new-quote');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
}

button.addEventListener('click', generateRandomQuote);

// Generate a random quote when the page loads
// generateRandomQuote();
