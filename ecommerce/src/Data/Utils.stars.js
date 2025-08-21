export function getStars(rate) {
  const full = Math.floor(rate);
  const half = rate - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '⭐'.repeat(full) + (half ? '✰ ' : '') + '☆'.repeat(empty);


}

