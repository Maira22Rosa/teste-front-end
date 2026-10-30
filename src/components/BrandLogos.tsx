const BRANDS = [1, 2, 3, 4, 5]

export function BrandLogos() {
  return (
    <section className="brands">
      <h2 className="brands__title">Navegue por marcas</h2>

      <ul className="brands__list">
        {BRANDS.map((brand) => (
          <li key={brand}>
            <a className="brands__item" href="#" aria-label="econverse">
              <span className="brands__logo">
                <span className="brands__dot">ec</span>converse
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
