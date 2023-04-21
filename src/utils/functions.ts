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

export function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  return `${day}/${month}/${year}`;
}


export function getUniqueCategories(products) {
  const categoriesSet = new Set();
  for (const product of products) {
    categoriesSet.add(product.category);
  }
  return Array.from(categoriesSet);
}


export function getProductsForCategory(products, category) {
  return products.filter(product => product.category === category);
}
