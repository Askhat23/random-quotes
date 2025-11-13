import { handleQuote } from './src/handlers/quote.js';
import quotes from './src/data/quotes.js';

let currentQuote = null;

function setCurrentQuote(quote) {
  currentQuote = quote;
}

const button = document.getElementById('new-quote');
button.addEventListener('click', () => handleQuote(quotes, setCurrentQuote));

export { currentQuote };
