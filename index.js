import { handleQuote } from './src/handlers/quote.js';
import quotes from './src/data/quotes.js';
import { toggleFavorite } from './src/handlers/favorites.js';
import { hideFavoriteBtn } from './src/handlers/favorites.js';

let currentQuote = null;

function setCurrentQuote(quote) {
  currentQuote = quote;
}

const favoritesContainer = document.getElementById('favorites-container');
const quoteFavoriteBtn = document.getElementById('quote-favorite-btn');
hideFavoriteBtn();
quoteFavoriteBtn.addEventListener('click', () =>
  toggleFavorite(currentQuote, quoteFavoriteBtn, favoritesContainer)
);

const button = document.getElementById('new-quote');
button.addEventListener('click', () => handleQuote(quotes, setCurrentQuote));

export { quoteFavoriteBtn };
