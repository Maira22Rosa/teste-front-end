import { useState } from 'react'

const CATEGORIES = [
  {
    label: 'Tecnologia',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="10" width="28" height="20" rx="2" />
        <path d="M12 38h12M18 30v8" />
        <rect x="34" y="20" width="10" height="18" rx="2" />
      </svg>
    ),
  },
  {
    label: 'Supermercado',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18l4-10h28l4 10" />
        <path d="M6 18h36v4H6zM10 22v16h28V22" />
        <path d="M18 38v-8h12v8" />
      </svg>
    ),
  },
  {
    label: 'Bebidas',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 4h8v10l6 10v20H12V24l6-10z" />
        <path d="M12 24h20M18 32h8" />
      </svg>
    ),
  },
  {
    label: 'Ferramentas',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 40L30 18M40 8L30 18M36 14l-4-4" />
        <path d="M8 8l8 8-4 4-8-8zM34 30l6 6-4 4-6-6" />
      </svg>
    ),
  },
  {
    label: 'Saúde',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 40C10 30 6 24 6 16a9 9 0 0 1 18-2 9 9 0 0 1 18 2c0 8-4 14-18 24z" />
      </svg>
    ),
  },
  {
    label: 'Esportes e Fitness',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="30" cy="8" r="3" />
        <path d="M24 16l6 4 4 8M22 18l-6 6 4 6M20 24l-4 14M14 40h10M36 26l-4 14" />
      </svg>
    ),
  },
  {
    label: 'Moda',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 6l8 6 8-6 8 6-4 8v26H12V20l-4-8z" />
        <path d="M24 12v28" />
      </svg>
    ),
  },
]

export function CategoryCards() {
  const [active, setActive] = useState(CATEGORIES[0].label)

  return (
    <nav className="categories" aria-label="Departamentos">
      {CATEGORIES.map((category) => {
        const isActive = category.label === active

        return (
          <button
            key={category.label}
            className={isActive ? 'categories__item categories__item--active' : 'categories__item'}
            type="button"
            aria-pressed={isActive}
            onClick={() => setActive(category.label)}
          >
            <span className="categories__icon">{category.icon}</span>
            <span className="categories__label">{category.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
