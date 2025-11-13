import { handleQuote } from './src/handlers/quote.js';

const button = document.getElementById('new-quote');
button.addEventListener('click', handleQuote);
