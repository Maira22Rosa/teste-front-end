import type { FormEvent } from 'react'

export function Newsletter() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section className="newsletter">
      <div className="newsletter__intro">
        <h2 className="newsletter__title">Inscreva-se na nossa newsletter</h2>
        <p className="newsletter__text">
          Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
        </p>
      </div>

      <form className="newsletter__form" onSubmit={handleSubmit}>
        <div className="newsletter__fields">
          <input className="newsletter__input" type="text" placeholder="Digite seu nome" aria-label="Nome" required />
          <input className="newsletter__input" type="email" placeholder="Digite seu e-mail" aria-label="E-mail" required />
          <button className="newsletter__button" type="submit">
            INSCREVER
          </button>
        </div>
        <label className="newsletter__terms">
          <input type="checkbox" required />
          Aceito os termos e condições
        </label>
      </form>
    </section>
  )
}
