import css from "./Modal.module.scss";

function Modal({ handleModal }) {
  return (
    <div className={css.backdrop}>
      <div className={css.modalContainer}>
        <button
          className={css.modalCloseBtn}
          type="button"
          onClick={handleModal}
        >
          close
          {/* <svg className={css.modalCloseIcon} width="28" height="28">
            <use href="./images/icons.svg#icon-x-close"></use>
          </svg> */}
        </button>
        <h2 className={css.modalTitle}>Ваш кошик</h2>
        <div className={css.listContainer}>
          <ul className={css.list}>
            <li className={css.listItem}>
              <div className={css.imgWrapper}>
                <img
                  className={css.itemImg}
                  src="../../assets/honey.jpg"
                  alt=""
                  width={80}
                  height={80}
                />
              </div>
              <div className={css.descriptionWrapper}>
                <h3 className={css.itemTitle}>Мед квітковий натуральний</h3>
                <p className={css.itemVolume}>0,25 л</p>
                <div className={css.itemQuantityWrapper}>
                  <p className={css.itemQuantityText}>Кількість</p>
                  <button className={css.quantityBtn} type="button">
                    -
                  </button>
                  <p>1</p>
                  <button className={css.quantityBtn} type="button">
                    +
                  </button>
                </div>
                <p className={css.itemPrice}>100 грн</p>
                <button className={css.deleteBtn} type="button">
                  del
                </button>
              </div>
            </li>
            <li className={css.listItem}></li>
            <li className={css.listItem}></li>
            <li className={css.listItem}></li>
          </ul>
        </div>
        <div className={css.modalBottomWrapper}>
          <div className={css.linkWrapper}>
            <a className={css.modalLink} href="">
              &lt;- Повернутися до покупок
            </a>
          </div>
          <div className={css.modalSubmitWrapper}>
            <p className={css.totalPrice}>250 грн</p>

            <button className={css.modalSubmitBtn}>Оформити замовлення</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
