import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../data/mockData';
import ProductCard from '../components/features/ProductCard';
import CategoryFilter from '../components/features/CategoryFilter';
import { filterByCategory } from '../utils/filters';

const infoByCategory = {
  Ropa: 'Hilos de alpaca y algodón Pima certificados, teñidos con insumos botánicos. Sin stock extra fuera de catálogo.',
  Gadgets: 'Todos incluyen ficha técnica completa, garantía de 18 meses y componentes reparables.',
  Accesorios: 'Alternativas compostables o gourmet de origen biodinámico y empaques reutilizables.'
};

export default function Shop() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const defaultCategory = params.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

  useEffect(() => {
    const fromUrl = params.get('category') || 'all';
    setSelectedCategory(fromUrl);
  }, [location.search]);

  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category))],
    []
  );

  const filteredProducts = filterByCategory(products, selectedCategory);

  return (
    <div className="shop-page">
      <header className="shop-header">
        <h1>Colección Nuna</h1>
        <p>
          Antes de cada descripción verás una imagen fotorrealista de alta gama. Si buscas otra referencia,
          indícame y revisamos stock futuro. No aplicamos descuentos automáticos.
        </p>
        <div className="shop-logistics">
          <div>
            <strong>Rutas de envío</strong>
            <span>Lima: 24-48h</span>
            <span>Provincias: 3-5 días Olva / Shalom</span>
          </div>
          <div>
            <strong>Impacto social</strong>
            <span>Programa de reutilización de empaques y retorno de electrónicos.</span>
          </div>
        </div>
      </header>

      <div className="shop-container">
        <aside className="sidebar">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          {selectedCategory !== 'all' && (
            <div className="category-note">
              <h4>{selectedCategory}</h4>
              <p>{infoByCategory[selectedCategory]}</p>
            </div>
          )}
          <div className="category-note">
            <h4>Inventario vivo</h4>
            <p>
              Gestiono existencias en tiempo real. Si un producto no aparece, está por ingresar. Te recomiendo
              alternativas del catálogo con la misma experiencia.
            </p>
          </div>
        </aside>
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
