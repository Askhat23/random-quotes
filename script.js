const quotes = [
  'The best way to get started is to quit talking and begin doing. – Walt Disney',
  "Don't let yesterday take up too much of today. – Will Rogers",
  "It's not whether you get knocked down, it's whether you get up. – Vince Lombardi",
  'If you are working on something exciting, it will keep you motivated. – Steve Jobs',
  "The harder you work for something, the greater you'll feel when you achieve it.",
];

const quoteElement = document.getElementById('quote');
const button = document.getElementById('new-quote');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}

button.addEventListener('click', generateRandomQuote);

// Generate a random quote when the page loads
// generateRandomQuote();
