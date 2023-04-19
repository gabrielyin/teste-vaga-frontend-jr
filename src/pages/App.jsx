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
        <div className={style.categoryContainer__card}>
          <div>
            <img src="" alt="" />
          </div>
          <h5>Tecnologia</h5>
        </div>
        <div className={style.categoryContainer__card}>
          <div>
            <img src="" alt="" />
          </div>
          <h5>Supermercado</h5>
        </div>
        <div className={style.categoryContainer__card}>
          <div>
            <img src="" alt="" />
          </div>
          <h5>Bebidas</h5>
        </div>
        <div className={style.categoryContainer__card}>
          <div>
            <img src="" alt="" />
          </div>
          <h5>Ferramentas</h5>
        </div>
        <div className={style.categoryContainer__card}>
          <div>
            <img src="" alt="" />
          </div>
          <h5>Saúde</h5>
        </div>
        <div className={style.categoryContainer__card}>
          <div>
            <img src="" alt="" />
          </div>
          <h5>Esportes e Fitness</h5>
        </div>
        <div className={style.categoryContainer__card}>
          <div>
            <img src="" alt="" />
          </div>
          <h5>Moda</h5>
        </div>
      </section>
    </>
  )
}

export default App
