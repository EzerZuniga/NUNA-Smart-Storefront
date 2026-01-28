import { useEffect, useState } from 'react';
import Card from '../common/Card';
import { useCart } from '../../context/CartContext';

const formatCurrency = (amount) => `S/ ${amount.toFixed(2)}`;

export default function CartConfirmation() {
  const { items, lastAddedId, total } = useCart();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (lastAddedId) {
      setIsVisible(true);
      const timeout = setTimeout(() => setIsVisible(false), 4000);
      return () => clearTimeout(timeout);
    }
  }, [lastAddedId]);

  if (!isVisible || items.length === 0) {
    return null;
  }

  return (
    <div className="cart-confirmation">
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
