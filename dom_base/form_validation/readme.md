# DOM Practice — Form Validation

Небольшая задача для практики **работы с формами, HTML5 validation API и обработкой событий**.

Цель — реализовать **валидацию формы регистрации** с отображением ошибок и сбором данных формы.

Это упражнение тренирует:

- обработку отправки формы
- работу с `validity`
- отображение ошибок
- работу с `FormData`
- улучшение доступности через `aria-invalid`

---

# 📋 Задача

На странице есть **форма регистрации** с двумя полями:

- Email
- Password

Необходимо реализовать JavaScript-логику, которая:

- проверяет поля формы
- показывает ошибки
- подсвечивает невалидные поля
- собирает данные формы при успешной отправке

---

# 🧱 Структура страницы

Главные элементы:

| Элемент         | Назначение          |
| --------------- | ------------------- |
| `#registerForm` | форма регистрации   |
| `.field`        | контейнер поля      |
| `input`         | поле ввода          |
| `.error`        | сообщение об ошибке |

HTML страницы:

```html
<form class="form-box" id="registerForm" novalidate>
  <div class="field">
    <input name="email" type="email" required placeholder="Email" />
    <div class="error">Invalid email</div>
  </div>

  <div class="field">
    <input
      name="password"
      type="password"
      minlength="6"
      required
      placeholder="Password"
    />
    <div class="error">Min length 6</div>
  </div>

  <button type="submit">Register</button>
</form>
```

Атрибут `novalidate` отключает стандартную валидацию браузера, чтобы её можно было реализовать через JavaScript.

---

# 🎨 Как работают стили

Когда поле невалидно, ему добавляется класс:

```css
input.invalid
```

```css
input.invalid {
  border: 1px solid #ff4d4f;
}
```

Сообщение об ошибке отображается через блок:

```css
.error
```

По умолчанию ошибка скрыта:

```css
.error {
  display: none;
}
```

JavaScript должен:

- показывать или скрывать `.error`
- добавлять или удалять класс `invalid`

---

# ✅ Требования

### Отправка формы

При `submit` формы необходимо:

1. отменить стандартную отправку формы (`preventDefault`)
2. проверить валидность полей
3. если все поля валидны — собрать данные формы
4. вывести данные в `console.log`

---

### Проверка валидности

Поля должны проверяться через:

```
input.validity
```

Если поле невалидно:

- показывается `.error`
- полю добавляется класс `invalid`
- добавляется атрибут

```
aria-invalid="true"
```

Если поле валидно:

- ошибка скрывается
- класс `invalid` удаляется
- `aria-invalid` становится `"false"`

---

# ⚙️ Ограничения

Попробуйте использовать:

- `submit`
- `blur`
- `validity`
- `classList`
- `setAttribute`
- `FormData`
- `preventDefault`

---

# 🎯 Цель задания

Практика следующих навыков:

- работа с формами
- использование HTML5 validation API
- отображение ошибок
- работа с событиями `submit` и `blur`
- сбор данных формы

Такая логика используется практически во всех:

- регистрационных формах
- формах авторизации
- checkout формах
- CRM интерфейсах

---

# ⭐ Дополнительные улучшения (опционально)

Если основная задача решена, можно попробовать улучшить приложение:

- показывать ошибки во время ввода (`input`)
- отключать кнопку submit при невалидной форме
- добавлять индикатор силы пароля
- автоматически фокусировать первое невалидное поле
- показывать успешное сообщение после отправки

---

# 💡 Подсказки

<details>
<summary>Получение формы</summary>

```javascript
const form = document.getElementById("registerForm");
```

</details>

---

<details>
<summary>Получение полей формы</summary>

```javascript
const inputs = form.querySelectorAll("input");
```

</details>

---

<details>
<summary>Отмена стандартной отправки формы</summary>

```javascript
event.preventDefault();
```

</details>

---

<details>
<summary>Проверка валидности поля</summary>

```javascript
input.validity.valid;
```

</details>

---

<details>
<summary>Показ ошибки</summary>

```javascript
error.style.display = "block";
```

</details>

---

<details>
<summary>Добавление класса ошибки</summary>

```javascript
input.classList.add("invalid");
```

</details>

---

<details>
<summary>Установка aria-invalid</summary>

```javascript
input.setAttribute("aria-invalid", "true");
```

</details>

---

<details>
<summary>Сбор данных формы</summary>

```javascript
const formData = new FormData(form);
```

</details>
```
