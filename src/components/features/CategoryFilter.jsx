export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="category-filter">
      <h3>Categorías</h3>
      <ul>
        <li>
          <button
            type="button"
            className={selectedCategory === 'all' ? 'active' : ''}
            onClick={() => onSelectCategory('all')}
            aria-pressed={selectedCategory === 'all'}
          >
            Todas
          </button>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <button
              type="button"
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => onSelectCategory(category)}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
