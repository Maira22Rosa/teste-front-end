import { useEffect, useState } from 'react'
import { BrandLogos } from './components/BrandLogos'
import { CategoryCards } from './components/CategoryCards'
import { CategoryTabs } from './components/CategoryTabs'
import { Newsletter } from './components/Newsletter'
import { SiteFooter } from './components/SiteFooter'
import { ProductCard } from './components/ProductCard'
import { ProductModal } from './components/ProductModal'
import type { Product, ProductsResponse } from './types'

const PRODUCTS_PATH = '/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
const PRODUCTS_URL = import.meta.env.DEV ? PRODUCTS_PATH : `https://app.econverse.com.br${PRODUCTS_PATH}`

export function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [selected, setSelected] = useState<Product | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(PRODUCTS_URL)
      .then((response) => response.json() as Promise<ProductsResponse>)
      .then((data) => setProducts(data.products))
      .catch(() => setError(true))
  }, [])

  const closeModal = () => setSelected(null)

  return (
    <>
      <header className="header">
        <h1 className="header__title">Vitrine de Produtos</h1>
      </header>

      <main className="main">
        <CategoryCards />

        <section className="related">
          <h2 className="related__title">Produtos relacionados</h2>
          <CategoryTabs />

          {error && <p className="status">Não foi possível carregar os produtos.</p>}
          {!error && products.length === 0 && <p className="status">Carregando produtos...</p>}

          <ul className="grid">
            {products.map((product) => (
              <li key={product.productName}>
                <ProductCard product={product} onSelect={setSelected} />
              </li>
            ))}
          </ul>
        </section>

        <BrandLogos />
      </main>

      <Newsletter />
      <SiteFooter />

      {selected && <ProductModal product={selected} onClose={closeModal} />}
    </>
  )
}
