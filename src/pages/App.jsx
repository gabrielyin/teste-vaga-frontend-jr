import style from '../styles/App.module.scss';

function App() {
  return (
    <>
      <header className={style.header}>
        <section>
          <div>
            <span className={style.header__icon}>
              <img src="./assets/icons/ShieldCheck.svg" alt="" />
            </span>
            <h6>Compra <span>100% segura</span></h6>
          </div>
          <div>
            <span className={style.header__icon}>
              <img src="./assets/icons/Truck.svg" alt="" />
            </span>
            <h6><span>Frete grátis</span> acima de R$ 200</h6>
          </div>
          <div>
            <span className={style.header__icon}>
              <img src="./assets/icons/CreditCard.svg" alt="" />
            </span>
            <h6><span>Parcele</span> suas compras</h6>
          </div>
        </section>
        <section>
          <div>
            <img src="./assets/logos/vtex.png" alt="" />
          </div>
          <div>
            <label className={style.inputContainer}>
              <input
                type="text"
                placeholder="O que você está buscando?"
              />
              <span>
                <img
                  src="./assets/icons/MagnifyingGlass.svg"
                  alt=""
                />
              </span>
            </label>
          </div>
          <div
            className={style.iconContainer}
          >
            <span>
              <img src="./assets/icons/Group.svg" alt="" />
            </span>
            <span>
              <img src="./assets/icons/Heart.svg" alt="" />
            </span>
            <span>
              <img src="./assets/icons/UserCircle.svg" alt="" />
            </span>
            <span>
              <img src="./assets/icons/ShoppingCart.svg" alt="" />
            </span>
          </div>
        </section>
        <section>
          <div>
            <h6>Todas categorias</h6>
          </div>
          <div>
            <h6>Supermercados</h6>
          </div>
          <div>
            <h6>Livros</h6>
          </div>
          <div>
            <h6>Moda</h6>
          </div>
          <div>
            <h6>Lançamentos</h6>
          </div>
          <div>
            <h6 className={style.active}>Ofertas do dia</h6>
          </div>
          <div>
            <span>
              <img src="./assets/icons/CrownSimple.svg" alt="" />
            </span>
            <h6>Assinatura</h6>
          </div>
        </section>
      </header>
      <section className={style.bannerContainer}>
        <div>
          <h1>Venha conhecer nossas promoções</h1>
          <h3>50% Off nos produtos</h3>
          <button>
            <h4>Ver produto</h4>
          </button>
        </div>
      </section>
      <section className={style.categoryContainer}>
        <div className={style.categoryContainer__card__active}>
          <div>
            <img src="assets/icons/MonitorSmartphoneTablet.svg" alt="" />
          </div>
          <h5>Tecnologia</h5>
        </div>
        <div className={style.categoryContainer__card}>
          <div>
            <img src="assets/icons/Supermercado.svg" alt="" />
          </div>
          <h5>Supermercado</h5>
        </div>
        <div className={style.categoryContainer__card}>
          <div>
            <img src="assets/icons/Whiskey.svg" alt="" />
          </div>
          <h5>Bebidas</h5>
        </div>
        <div className={style.categoryContainer__card}>
          <div>
            <img src="assets/icons/Ferramenta.svg" alt="" />
          </div>
          <h5>Ferramentas</h5>
        </div>
        <div className={style.categoryContainer__card}>
          <div>
            <img src="assets/icons/Saude.svg" alt="" />
          </div>
          <h5>Saúde</h5>
        </div>
        <div className={style.categoryContainer__card}>
          <div>
            <img src="assets/icons/Corrida.svg" alt="" />
          </div>
          <h5>Esportes e Fitness</h5>
        </div>
        <div className={style.categoryContainer__card}>
          <div>
            <img src="assets/icons/Moda.svg" alt="" />
          </div>
          <h5>Moda</h5>
        </div>
      </section>
      <section className={style.relacionadosContainer}>
        <div>
          <div className={style.relacionadosContainer__title}>
            <hr />
            <h2>Produtos relacionados</h2>
            <hr />
          </div>
          <nav className={style.relacionadosContainer__nav}>
            <div>
              <a>celular</a>
            </div>
            <div>
              <a>acessórios</a>
            </div>
            <div>
              <a>tablets</a>
            </div>
            <div>
              <a>notebooks</a>
            </div>
            <div>
              <a>tvs</a>
            </div>
            <div>
              <a>ver todos</a>
            </div>
          </nav>
          <div className={style.cardContainer}>
            <div className={style.cardContainer__main}>
              <div className={style.cardContainer__main__card}>
                <div className={style.cardContainer__main__card__content}>
                  <img src="https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png" alt="" />
                  <div>
                    <p>Iphone 11 PRO MAX BRANCO 1</p>
                    <h6>R$ 30,00</h6>
                    <h5>R$ 15000</h5>
                    <p>ou 2x de R4 49,95 sem juros</p>
                    <p>Frete grátis</p>
                  </div>
                  <button>
                    comprar
                  </button>
                </div>
              </div>
              <div className={style.cardContainer__main__card}>

              </div>
              <div className={style.cardContainer__main__card}>

              </div>
              <div className={style.cardContainer__main__card}>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
