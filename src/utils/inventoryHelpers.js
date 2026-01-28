export function getInventoryStatus(stock) {
  if (stock === 0) {
    return { variant: 'danger', label: 'Agotado' };
  } else if (stock < 10) {
    return { variant: 'warning', label: 'Pocas unidades' };
  } else {
    return { variant: 'success', label: 'Disponible' };
  }
}

export function isInStock(product) {
  return product.stock > 0;
}

export function canAddToCart(product, requestedQuantity) {
  return product.stock >= requestedQuantity;
}
