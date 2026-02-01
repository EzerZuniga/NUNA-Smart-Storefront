import { useEffect, useState } from 'react';
import Card from '../common/Card';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatters';

export default function CartConfirmation() {
  const { items, lastAddedAt, total } = useCart();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (lastAddedAt) {
      setIsVisible(true);
      const timeout = setTimeout(() => setIsVisible(false), 4000);
      return () => clearTimeout(timeout);
    }
  }, [lastAddedAt]);

  if (!isVisible || items.length === 0) {
    return null;
  }

  return (
    <div className="cart-confirmation" role="status" aria-live="polite">
      <Card className="cart-confirmation-card">
        <h4>Carrito actualizado ✔️</h4>
        <table>
          <thead>
            <tr>
              <th>Cant</th>
              <th>Producto</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.quantity}</td>
                <td>{item.name}</td>
                <td>{formatCurrency(item.price * item.quantity)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cart-confirmation-total">
          Total acumulado: <strong>{formatCurrency(total)}</strong>
        </div>
      </Card>
    </div>
  );
}
