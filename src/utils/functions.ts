import * as geolib from 'geolib';

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
  return products.filter((product) => product.category === category);
}

export const getDistanceInfo = (users) => {
  let maxDistance = 0;
  let maxDistanceUsers = [];

  for (let i = 0; i < users.length; i++) {
    for (let j = i + 1; j < users.length; j++) {
      const user1Location = {
        latitude: parseFloat(users[i].address.geolocation.lat),
        longitude: parseFloat(users[i].address.geolocation.long),
      };
      const user2Location = {
        latitude: parseFloat(users[j].address.geolocation.lat),
        longitude: parseFloat(users[j].address.geolocation.long),
      };

      const distance = geolib.getDistance(user1Location, user2Location);

      if (distance > maxDistance) {
        maxDistance = distance;
        maxDistanceUsers = [users[i], users[j]];
      }
    }
  }
  return { maxDistance, maxDistanceUsers };
};

export function calculateDistance(user1, user2) {
  const point1 = {
    latitude: parseFloat(user1.address.geolocation.lat),
    longitude: parseFloat(user1.address.geolocation.long),
  };
  const point2 = {
    latitude: parseFloat(user2.address.geolocation.lat),
    longitude: parseFloat(user2.address.geolocation.long),
  };
  const distance = geolib.getDistance(point1, point2);
  return distance;
}

export function findHighestValueCartUser(carts, productPriceMap) {
  const highestValueCart = { userId: null, highestValue: 0 };

  carts.forEach((cart) => {
    let cartValue = 0;

    cart.products.forEach((item) => {
      const price = productPriceMap.get(item.productId.toString());
      if (price) {
        const itemValue = price * item.quantity;
        cartValue += itemValue;
      }
    });

    if (cartValue > highestValueCart.highestValue) {
      highestValueCart.userId = cart.userId;
      highestValueCart.highestValue = cartValue;
    }
  });

  return {
    userId: highestValueCart.userId,
    highestValue: highestValueCart.highestValue.toFixed(2),
  };
}
