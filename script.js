const quotes = [
  {
    quote: 'The best way to get started is to quit talking and begin doing',
    author: 'Walt Disney',
  },
  {
    quote: "Don't let yesterday take up too much of today",
    author: 'Will Rogers',
  },
  {
    quote: "It's not whether you get knocked down, it's whether you get up",
    author: 'Vince Lombardi',
  },
  {
    quote:
      'If you are working on something exciting, it will keep you motivated',
    author: 'Steve Jobs',
  },
  {
    quote:
      "The harder you work for something, the greater you'll feel when you achieve it",
    author: 'Unknown author',
  },
  {
    quote:
      'Success is not final; failure is not fatal: It is the courage to continue that counts',
    author: 'Winston Churchill',
  },
  {
    quote: 'Your time is limited, so don’t waste it living someone else’s life',
    author: 'Steve Jobs',
  },
  {
    quote: 'In the middle of every difficulty lies opportunity',
    author: 'Albert Einstein',
  },
  {
    quote: 'Believe you can and you’re halfway there',
    author: 'Theodore Roosevelt',
  },
  {
    quote: 'If you want to achieve greatness, stop asking for permission',
    author: 'Anonymous',
  },
];

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('author');
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
