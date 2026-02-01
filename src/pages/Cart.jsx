import { useState } from 'react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatters';

export default function Cart() {
  const { items, total, clearCart } = useCart();
  const [showReceipt, setShowReceipt] = useState(false);

  const handleCheckout = () => {
    setShowReceipt(true);
    clearCart();
  };

  return (
    <div className="cart-page">
      <header>
        <h1>Tu carrito inteligente</h1>
        <p>Resumen actualizado. Si necesitas factura electrónica, indícamelo para adjuntar en el recibo premium.</p>
      </header>

      {items.length === 0 && !showReceipt && (
        <p>Aún no hay productos añadidos. Explora la colección y vuelve para cerrar tu compra.</p>
      )}

      {items.length > 0 && (
        <div className="cart-table-wrapper">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Categoria</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.quantity}</td>
                  <td>{formatCurrency(item.price * item.quantity)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-summary">
            <div>
              <span>Total acumulado</span>
              <strong>{formatCurrency(total)}</strong>
            </div>
            <p>Envío estimado: Lima 24-48h | Provincias 3-5 días (Olva/Shalom). Empaque compostable reutilizable.</p>
            <Button onClick={handleCheckout}>Finalizar y generar recibo</Button>
          </div>
        </div>
      )}

      {showReceipt && (
        <Card className="receipt-card">
          <h2>Recibo de Compra Premium</h2>
          <figure>
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1100&q=80"
              alt="Recibo de compra premium impreso sobre texturas andinas modernas"
            />
            <figcaption>
              Documento personalizado con desglose en soles y sello de comercio justo.
            </figcaption>
          </figure>
          <p>
            Gracias por impulsar la innovación sostenible. Si necesitas rectificar datos, contáctame por el chat y
            actualizo la orden.
          </p>
        </Card>
      )}
    </div>
  );
}
