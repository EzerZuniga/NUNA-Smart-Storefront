export const formatCurrency = (amount, currency = 'S/') => {
  const value = Number.isFinite(amount) ? amount : 0;
  return `${currency} ${value.toFixed(2)}`;
};
