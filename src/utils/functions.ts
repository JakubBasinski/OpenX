export function capFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function shorthenString(title, maxLength) {
  const words = title.split(' ');
  const firstThreeWords = words.slice(0, maxLength);

  if (words.length <= maxLength) {
    return title;
  }
  return firstThreeWords.join(' ') + '...';
}
