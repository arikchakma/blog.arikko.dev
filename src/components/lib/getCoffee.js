/* eslint-disable no-plusplus */
export default function getCoffee(time) {
  const readingTime = time * 2;
  const numberOfCoffee = Math.round(readingTime / 3);
  const coffee = [];
  const emoji = numberOfCoffee <= 3 ? '☕' : '🍵';
  for (let i = 0; i < numberOfCoffee; i++) coffee.push(emoji);

  return coffee.join('');
}
