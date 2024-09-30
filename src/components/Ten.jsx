


const Ten = () => {

 let quotes = [
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "Do not wait to strike till the iron is hot; but make it hot by striking.",
  "In the middle of difficulty lies opportunity.",
  "The best way to predict your future is to create it.",
  "It does not matter how slowly you go as long as you do not stop.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Don't watch the clock; do what it does. Keep going.",
  "Success usually comes to those who are too busy to be looking for it."
];

let randomQuotes=Math.floor(Math.random()*quotes.length)
const quote=quotes[randomQuotes]

  return (
    <div>{quote}</div>
  )
}

export default Ten