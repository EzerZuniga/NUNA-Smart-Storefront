export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="category-filter">
      <h3>Categorías</h3>
      <ul>
        <li
          className={selectedCategory === 'all' ? 'active' : ''}
          onClick={() => onSelectCategory('all')}
        >
          Todas
        </li>
        {categories.map((category) => (
          <li
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
