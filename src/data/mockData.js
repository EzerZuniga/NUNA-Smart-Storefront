export const products = [
  {
    id: 'chal-inti',
    name: 'Chal de Alpaca "Inti"',
    price: 315,
    category: 'Ropa',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
    description: 'Chal tejido en telar con patrones tocapu reinterpretados para climas urbanos.',
    materials: ['Lana de alpaca certificada', 'Tintes botánicos hiperalergénicos'],
    sustainability: 'Tejido por cooperativas andinas con certificación de comercio justo.',
    ethics: 'Remuneración justa y trazabilidad completa del abastecimiento.',
    stock: 8
  },
  {
    id: 'camiseta-pima',
    name: 'Camiseta de Algodón Orgánico',
    price: 129,
    category: 'Ropa',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80',
    description: 'Básico premium con silueta unisex y acabado suave para uso diario.',
    materials: ['Algodón Pima orgánico', 'Tintura a base de índigo natural'],
    sustainability: 'Cultivo regenerativo en la costa norte del Perú con certificación GOTS.',
    ethics: 'Confección en talleres auditados con programas de bienestar laboral.',
    stock: 20
  },
  {
    id: 'powerbank-solar',
    name: 'Powerbank Solar Ultra',
    price: 199,
    category: 'Gadgets',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80',
    description: 'Batería inteligente con panel plegable y sensores de eficiencia lumínica.',
    specs: ['Capacidad 20,000 mAh', 'Carga rápida USB-C 65W', 'Certificación IP67'],
    durability: 'Carcasa antimicrobiana y pruebas de resistencia a golpes de grado militar.',
    stock: 18
  },
  {
    id: 'auriculares-woodtech',
    name: 'Auriculares Wood-Tech BT',
    price: 275,
    category: 'Gadgets',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80',
    description: 'Audio inmersivo con cancelación activa y resonancia cálida gracias a cápsulas de madera.',
    specs: ['Bluetooth 5.3 multipunto', 'Autonomía 32 horas', 'Cancelación activa híbrida'],
    durability: 'Madera reforestada con recubrimiento hidrorepelente y almohadillas reemplazables.',
    stock: 12
  },
  {
    id: 'case-compostable',
    name: 'Case de Celular Compostable',
    price: 89,
    category: 'Accesorios',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155228ef44?auto=format&fit=crop&w=1200&q=80',
    description: 'Protección ligera elaborada con biopolímeros de maíz y fibras de shicras.',
    sustainability: 'Compostable en 180 días en condiciones domésticas, cero microplásticos.',
    durability: 'Resistencia a caídas de hasta 2 metros y tratamiento anti-UV.',
    stock: 35
  },
  {
    id: 'pack-gourmet-raices',
    name: 'Pack Gourmet "Raíces"',
    price: 165,
    category: 'Accesorios',
    image: 'https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=1200&q=80',
    description: 'Selección curada de superfoods andinos listos para maridar.',
    sustainability: 'Agricultura biodinámica y empaques compostables con tintes al agua.',
    durability: 'Sellos aluminizados reciclables que preservan frescura por 12 meses.',
    stock: 22
  }
].map((product) => ({
  ...product,
  currency: 'S/ ',
  inStock: product.stock > 0
}));
