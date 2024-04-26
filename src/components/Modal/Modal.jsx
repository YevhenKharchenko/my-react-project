import css from "./Modal.module.scss";

const items = [
  {
    id: 1,
    title: "Мед квітковий натуральний",
    image: "../../../src/assets/honey.jpg",
    volume: "0,25",
    quantity: 1,
    price: 100,
  },
  {
    id: 2,
    title: "Мед з волоськимим горіхами",
    image: "../../../src/assets/honey.jpg",
    volume: "0,25",
    quantity: 3,
    price: 200,
  },
  {
    id: 3,
    title: "Мед акацієвий натуральний",
    image: "../../../src/assets/honey.jpg",
    volume: "0,25",
    quantity: 2,
    price: 100,
  },
  {
    id: 4,
    title: "Мед ріпаковий натуральний",
    image: "../../../src/assets/honey.jpg",
    volume: "0,25",
    quantity: 4,
    price: 500,
  },
  {
    id: 5,
    title: "Мед соняшниковий натуральний",
    image: "../../../src/assets/honey.jpg",
    volume: "0,25",
    quantity: 1,
    price: 250,
  },
];

const totalPrice = items.reduce((acc, el) => {
  return acc + el.price;
}, 0);
console.log(totalPrice);

function Modal({ handleModal }) {
  return (
    <div className={css.backdrop}>
      <div className={css.modalContainer}>
        <button
          className={css.modalCloseBtn}
          type="button"
          onClick={handleModal}
        >
          X
          {/* <svg className={css.modalCloseIcon} width="28" height="28">
            <use href="./images/icons.svg#icon-x-close"></use>
          </svg> */}
        </button>
        <h2 className={css.modalTitle}>Ваш кошик</h2>
        <div className={css.listContainer}>
          <ul className={css.list}>
            {items.map((item) => {
              return (
                <li key={item.id} className={css.listItem}>
                  <div className={css.imgWrapper}>
                    <img
                      className={css.itemImg}
                      src={item.image}
                      alt={item.title}
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className={css.descriptionWrapper}>
                    <h3 className={css.itemTitle}>{item.title}</h3>
                    <p className={css.itemVolume}>{item.volume} л</p>
                    <div className={css.itemQuantityWrapper}>
                      <p className={css.itemQuantityText}>Кількість</p>
                      <button className={css.quantityBtn} type="button">
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button className={css.quantityBtn} type="button">
                        +
                      </button>
                    </div>
                    <p className={css.itemPrice}>{item.price} грн</p>
                    <button className={css.deleteBtn} type="button">
                      del
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={css.modalBottomWrapper}>
          <div className={css.linkWrapper}>
            <a className={css.modalLink} href="">
              &lt;- Повернутися до покупок
            </a>
          </div>
          <div className={css.modalSubmitWrapper}>
            <p className={css.totalPrice}>{totalPrice} грн</p>
            <button className={css.modalSubmitBtn}>Оформити замовлення</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
