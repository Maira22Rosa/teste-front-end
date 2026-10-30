import { useState } from 'react'

const CATEGORIES = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS']

export function CategoryTabs() {
  const [active, setActive] = useState(CATEGORIES[0])

  return (
    <nav className="tabs" aria-label="Categorias">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          className={category === active ? 'tabs__item tabs__item--active' : 'tabs__item'}
          type="button"
          aria-pressed={category === active}
          onClick={() => setActive(category)}
        >
          {category}
        </button>
      ))}
    </nav>
  )
}
