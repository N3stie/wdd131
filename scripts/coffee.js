
const favoriteCoffeeKey = 'favoriteCoffee';

function saveFavoriteCoffee(coffeeName) {
  localStorage.setItem(favoriteCoffeeKey, coffeeName);
  displayFavoriteCoffee();
}

function displayFavoriteCoffee() {
  const coffee = localStorage.getItem(favoriteCoffeeKey);
  if (coffee) {
    alert(`Your favorite coffee is saved as: ${coffee}`);
  } else {
    alert('No favorite coffee saved yet.');
  }
}

// Example usage with prompt (can be changed to form or button event)
document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem(favoriteCoffeeKey)) {
    const coffeeName = prompt('What is your favorite coffee blend?');
    if (coffeeName) {
      saveFavoriteCoffee(coffeeName);
    }
  } else {
    displayFavoriteCoffee();
  }
});
