import { useEffect, useState } from 'react'
import type { Product } from '../types'
import { formatPrice } from '../utils/formatPrice'

type ProductModalProps = {
  product: Product
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal__close" type="button" onClick={onClose} aria-label="Fechar">
          ×
        </button>
        <img className="modal__image" src={product.photo} alt={product.productName} />
        <div className="modal__content">
          <h2 className="modal__title" id="modal-title">
            {product.productName}
          </h2>
          <p className="modal__price">{formatPrice(product.price)}</p>
          <p className="modal__description">{product.descriptionShort}</p>
          <button className="modal__details" type="button">
            Veja mais detalhes do produto &gt;
          </button>
          <div className="modal__actions">
            <div className="quantity">
              <button
                className="quantity__button"
                type="button"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                aria-label="Diminuir quantidade"
              >
                −
              </button>
              <span className="quantity__value">{String(quantity).padStart(2, '0')}</span>
              <button
                className="quantity__button"
                type="button"
                onClick={() => setQuantity((value) => value + 1)}
                aria-label="Aumentar quantidade"
              >
                +
              </button>
            </div>
            <button className="modal__buy" type="button">
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
