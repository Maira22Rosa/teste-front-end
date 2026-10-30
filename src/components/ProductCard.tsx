import type { Product } from '../types'
import { formatPrice } from '../utils/formatPrice'

type ProductCardProps = {
  product: Product
  onSelect: (product: Product) => void
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <article className="card">
      <button className="card__button" type="button" onClick={() => onSelect(product)}>
        <img className="card__image" src={product.photo} alt={product.productName} loading="lazy" />
        <h2 className="card__name">{product.productName}</h2>
        <p className="card__price">{formatPrice(product.price)}</p>
      </button>
    </article>
  )
}
