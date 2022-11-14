import "./Forms.css";

function BasicExample() {
  return (
    <section id="contactUs">
      <h2>Contact Us</h2>

      <form action="#" className="form">
        <h3 className="form__title">Inicia Sesión</h3>
        <p className="form__paragraph">
          No tienes una cuentas?{" "}
          <a href="/register" className="form__link">
            Entra aquí
          </a>
        </p>

        <div class="form__container">
          <div class="form__group">
            <input
              type="text"
              id="name"
              className="form__input"
              placeholder=" "
              required
            />
            <label for="name" class="form__label">
              Name:
            </label>
            <span className="form__line"></span>
          </div>
        </div>

        <div class="form__container">
          <div class="form__group">
            <input
              type="text"
              id="user"
              className="form__input"
              placeholder=" "
              required
            />
            <label for="user" class="form__label">
              User:
            </label>
            <span className="form__line"></span>
          </div>
        </div>

        <div class="form__container">
          <div class="form__group">
            <input
              type="password"
              id="password"
              className="form__input"
              placeholder=" "
              required
            />
            <label for="password" className="form__label">
              Password:
            </label>
            <span className="form__line"></span>
          </div>
        </div>

        <input type="submit" className="form__submit" value="Enter" />
      </form>
    </section>
  );
}

export default BasicExample;
