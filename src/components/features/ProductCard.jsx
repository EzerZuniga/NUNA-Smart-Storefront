import { Link } from 'react-router-dom';
import Card from '../common/Card';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatters';

const sustainabilityCopy = {
  Ropa: 'Materia prima de origen ético, trazabilidad total y tintes botánicos sin tóxicos.',
  Gadgets: 'Hardware diseñado para durar, con componentes reparables y eficiencia energética.',
  Accesorios: 'Diseño consciente con materiales compostables y empaques biodegradables.'
};

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const badgeVariant = product.inStock ? 'success' : 'danger';
  const badgeLabel = product.inStock ? 'Disponible' : 'Agotado';
  const categoryNote = sustainabilityCopy[product.category];

  return (
    <Card className="product-card">
      <figure className="product-figure">
        <img
          src={product.image}
          alt={`${product.name} - Fotografía de producto de alta gama con detalles andinos`}
          className="product-image"
        />
        <figcaption>Estilo editorial, iluminación natural, texturas orgánicas.</figcaption>
      </figure>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-price">{formatCurrency(product.price)}</p>
        <Badge variant={badgeVariant}>{badgeLabel}</Badge>
        {product.category === 'Ropa' && (
          <ul className="product-meta">
            <li>Materiales: {product.materials?.join(', ')}</li>
            <li>Sostenibilidad: {product.sustainability}</li>
            <li>Ética: {product.ethics}</li>
          </ul>
        )}
        {product.category === 'Gadgets' && (
          <ul className="product-meta">
            {product.specs?.map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
            <li>Durabilidad: {product.durability}</li>
          </ul>
        )}
        {product.category === 'Accesorios' && (
          <ul className="product-meta">
            <li>Sostenibilidad: {product.sustainability}</li>
            <li>Durabilidad: {product.durability}</li>
          </ul>
        )}
        <p className="product-impact">
          {categoryNote} Cada compra impulsa programas de innovación textil y tecnológica.
        </p>
        <div className="product-actions">
          <Link to={`/product/${product.id}`}>
            <Button variant="secondary">Ver detalles</Button>
          </Link>
          <Button onClick={() => addItem(product)} disabled={!product.inStock}>
            Añadir al carrito
          </Button>
        </div>
      </div>
    </Card>
  );
}
