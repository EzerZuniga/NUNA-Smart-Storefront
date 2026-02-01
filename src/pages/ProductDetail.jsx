import { useParams } from 'react-router-dom';
import { products } from '../data/mockData';
import Button from '../components/common/Button';
import InventoryStatus from '../components/features/InventoryStatus';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatters';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="product-detail-container">
          <p>Producto no encontrado. Puedo avisarte cuando ingrese nuevamente o sugerirte una alternativa.</p>
        </div>
      </div>
    );
  }

  const categoryExtras = (() => {
    if (product.category === 'Ropa') {
      return [
        { label: 'Materiales', value: product.materials?.join(', ') },
        { label: 'Sostenibilidad', value: product.sustainability },
        { label: 'Ética', value: product.ethics }
      ];
    }
    if (product.category === 'Gadgets') {
      return [
        { label: 'Especificaciones', value: product.specs?.join(' · ') },
        { label: 'Durabilidad', value: product.durability }
      ];
    }
    return [
      { label: 'Sostenibilidad', value: product.sustainability },
      { label: 'Durabilidad', value: product.durability }
    ];
  })();

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <figure className="product-detail-figure">
          <img
            src={product.image}
            alt={`${product.name} presentado en fotografía editorial de alta gama con detalles andinos`}
            className="product-detail-image"
          />
          <figcaption>Imagen fotorrealista de referencia. Sin animaciones, iluminación natural.</figcaption>
        </figure>
        <div className="product-detail-info">
          <span className="breadcrumb">Colección Nuna / {product.category}</span>
          <h1>{product.name}</h1>
          <p className="price">{formatCurrency(product.price)}</p>
          <p className="description">{product.description}</p>
          <InventoryStatus stock={product.stock} />
          <dl className="product-detail-data">
            {categoryExtras.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <div className="shipping-info">
            <h4>Logística</h4>
            <p>Lima 24-48h | Provincias 3-5 días con Olva o Shalom. Empaques compostables reutilizables.</p>
          </div>
          <div className="detail-actions">
            <Button onClick={() => addItem(product)} disabled={!product.inStock}>
              Añadir al carrito
            </Button>
            <Button variant="ghost" onClick={() => window.history.back()}>
              Volver
            </Button>
          </div>
          <p className="impact-note">
            Cada compra financia capacitación tecnológica y preservación de patrones ancestrales. Si buscas otra talla o
            versión, indícame: gestiono inventario en tiempo real.
          </p>
        </div>
      </div>
    </div>
  );
}
