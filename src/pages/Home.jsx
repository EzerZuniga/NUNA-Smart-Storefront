import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const heroHighlights = [
  {
    title: 'Moda regenerativa',
    description: 'Fibras certificadas, tintes biodegradables y talleres remunerados justamente.'
  },
  {
    title: 'Tech consciente',
    description: 'Gadgets durables con energía solar, piezas modulares y garantía extendida.'
  },
  {
    title: 'Logística ética',
    description: 'Despachos neutros en carbono y empaques compostables para todas las rutas.'
  }
];

const trustMarks = [
  {
    title: 'Envíos conscientes',
    description: 'Lima 24-48h · Provincias 3-5 días con Olva/Shalom.'
  },
  {
    title: 'Pagos seguros',
    description: 'Tarjetas, transferencias y billeteras locales sin comisiones ocultas.'
  },
  {
    title: 'Acompañamiento Nuna',
    description: 'Asesoría personalizada vía chat, WhatsApp y seguimiento post-compra.'
  }
];

const categories = [
  {
    name: 'Ropa sostenible',
    description: 'Lana de alpaca y algodón Pima certificados, tejidos por talleres justos.',
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80',
    to: '/shop?category=Ropa'
  },
  {
    name: 'Gadgets conscientes',
    description: 'Tecnología duradera con energía solar y materiales reparables.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    to: '/shop?category=Gadgets'
  },
  {
    name: 'Accesorios con propósito',
    description: 'Diseños compostables y gourmet que celebran las raíces andinas.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    to: '/shop?category=Accesorios'
  }
];

const impactStats = [
  { value: '80%', label: 'proveedores liderados por mujeres' },
  { value: '12k', label: 'árboles protegidos con nuestras ventas' },
  { value: '0%', label: 'plástico de un solo uso en empaques' }
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-content">
          <span className="hero-pill">Retail consciente peruano</span>
          <h1 id="hero-heading">Nuna transforma compras en impacto real</h1>
          <p className="hero-lead">
            Curamos moda, tecnología y accesorios que respetan el origen andino y potencian el futuro.
            Nuna te guía a elegir productos regenerativos, reparables y justos para las comunidades.
          </p>
          <ul className="hero-highlights">
            {heroHighlights.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
          <div className="hero-actions">
            <Link to="/shop">
              <Button>Explorar catálogo</Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost">Revisar carrito</Button>
            </Link>
          </div>
          <div className="hero-trust" aria-label="Confianza y soporte">
            {trustMarks.map((item) => (
              <div key={item.title} className="trust-card">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-media">
          <figure className="hero-media-primary">
            <img
              src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=960&q=80"
              alt="Directora creativa analizando tejidos tecnológicos de Nuna"
            />
            <figcaption>Atelier Nuna: innovación textil y sensores biodegradables.</figcaption>
          </figure>
          <div className="hero-media-secondary">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=640&q=80"
                alt="Detalle de gadget modular alimentado por energía solar"
              />
              <figcaption>Gadgets modulares listos para reparación local.</figcaption>
            </figure>
            <figure>
              <img
                src="https://images.unsplash.com/photo-1498550744921-75f79806b8a7?auto=format&fit=crop&w=640&q=80"
                alt="Clientes probando accesorios hechos a mano"
              />
              <figcaption>Experiencia inmersiva en tienda con realidad aumentada.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="category-section" aria-labelledby="category-heading">
        <header className="section-header">
          <span className="section-badge">Colecciones curadas</span>
          <h2 id="category-heading">Explora según tu propósito</h2>
          <p>
            Productos diseñados junto a comunidades y makers tecnológicos. Selecciona una categoría y
            encuentra piezas con trazabilidad y soporte de Nuna en cada paso.
          </p>
        </header>
        <div className="category-grid">
          {categories.map((category) => (
            <article key={category.name} className="category-card">
              <div className="category-image">
                <img src={category.image} alt={`${category.name} - estilo editorial andino moderno`} />
              </div>
              <div className="category-body">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <Link to={category.to} className="category-link">Ver colección</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="impact-banner" aria-labelledby="impact-heading">
        <div className="impact-copy">
          <span className="section-badge">Impacto medible</span>
          <h2 id="impact-heading">Cada compra fortalece ecosistemas peruanos</h2>
          <p>
            Cooperativas de mujeres tejedoras, ingenieros solares y productores gourmet crean con Nuna.
            Acompañamos cada colección con auditorías sociales y soporte financiero continuo.
          </p>
        </div>
        <ul className="impact-stats">
          {impactStats.map((stat) => (
            <li key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
