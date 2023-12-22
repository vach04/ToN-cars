// Массив товаров (в реальном интернет-магазине данные будут приходить с сервера)
const products = [
  {
    name: "Товар 1",
    description: "Описание товара 1",
    image: "product1.jpg",
    price: 19.99
  },
  {
    name: "Товар 2",
    description: "Описание товара 2",
    image: "product2.jpg",
    price: 29.99
  }
  // Добавьте другие товары по аналогии
];

// Функция для отображения товаров в каталоге
function displayProducts() {
  const productsSection = document.querySelector('.products');

  products.forEach(product => {
    const productArticle = document.createElement('article');
    productArticle.classList.add('product');

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;

    const productName = document.createElement('h2');
    productName.textContent = product.name;

    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;

    const addToCartBtn = document.createElement('button');
    addToCartBtn.textContent = 'Добавить в корзину';
    addToCartBtn.addEventListener('click', () => {
      // Добавить логику для добавления товара в корзину
      // Например: добавление товара в массив корзины или отправка запроса на сервер
      console.log(`Добавлен товар: ${product.name}`);
    });

    productArticle.appendChild(productImage);
    productArticle.appendChild(productName);
    productArticle.appendChild(productDescription);
    productArticle.appendChild(addToCartBtn);

    productsSection.appendChild(productArticle);
  });
}

// Вызываем функцию для отображения товаров при загрузке страницы
window.addEventListener('load', displayProducts);
