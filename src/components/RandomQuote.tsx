import { h } from "preact";
import { useState } from "preact/hooks";

export default function RandomQuote() {
  const quotes = [
    'Pat-pat!',
    'Nothing can hurt us.'
  ]

  const randomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

  const [quote, setQuote] = useState(quotes[0]);

  return (
    <div class="container">
      <h3>{quote}</h3>
      <button onClick={() => setQuote(randomQuote())}>Show Another Quote!</button>
    </div>
  );
}