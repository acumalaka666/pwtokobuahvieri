const products = [
  { name: 'Apple', price: 1.00, category: 'Fruits', image: 'images/apple.jpg' },
  { name: 'Banana', price: 0.50, category: 'Fruits', image: 'images/banana.jpg' },
  { name: 'Carrot', price: 0.30, category: 'Vegetables', image: 'images/carrot.jpg' },
  { name: 'Broccoli', price: 1.20, category: 'Vegetables', image: 'images/broccoli.jpg' },
  { name: 'Chicken', price: 5.00, category: 'Meat', image: 'images/chicken.jpg' },
];

// Fungsi untuk menampilkan produk berdasarkan kategori
function displayProducts(category) {
  const filteredProducts = category === 'All' ? products : products.filter(product => product.category === category);

  const productElements = filteredProducts.map(product => {
    return `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <div>
          <h2>${product.name}</h2>
          <p>Price: $${product.price.toFixed(2)}</p>
          <p>Category: ${product.category}</p>
        </div>
      </div>
    `;
  });

  const container = document.getElementById('product-container');
  container.innerHTML = productElements.join('');
}

document.addEventListener('DOMContentLoaded', () => {
  const categorySelect = document.getElementById('category-select');
  
  // Tampilkan semua produk saat halaman pertama kali dimuat
  displayProducts('All');

  // Tambahkan event listener untuk dropdown kategori
  categorySelect.addEventListener('change', (event) => {
    const selectedCategory = event.target.value;
    displayProducts(selectedCategory);
  });
});