export function filterByCategory(products, category) {
  if (category === 'all') {
    return products;
  }
  return products.filter(product => product.category === category);
}

export function filterByPrice(products, minPrice, maxPrice) {
  return products.filter(product => 
    product.price >= minPrice && product.price <= maxPrice
  );
}

export function filterInStock(products) {
  return products.filter(product => product.inStock);
}

export function searchProducts(products, query) {
  const lowerQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery)
  );
}
