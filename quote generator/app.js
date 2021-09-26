var quotes = [
  "I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy.",
  "A man should have the aim and the determination to be honest and upright and sincere in all that he undertakes. If he adds persistency to this he can hardly help being successfull",
  "Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered.",
  "It is our own mental attitude which makes the world what it is for us. Our thought make things beautiful, our thoughts make things ugly. The whole world is in our own minds. Learn to see things in the proper light. First, believe in this world…",
];

function getQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("new").innerHTML = quotes[randomNumber];
}
