# DOM Practice — Add to Cart

Небольшая задача для практики **работы с событиями, атрибутами `data-*` и классами элементов в DOM**.

Цель — реализовать поведение карточек товаров при добавлении в корзину.

---

# 📋 Задача

На странице есть несколько карточек товаров.

Необходимо реализовать JavaScript-логику, которая позволит:

- добавлять товар в корзину
- визуально отмечать карточку как добавленную
- получать `id` товара из `data-id`

---

# 🧱 Структура страницы

Главные элементы:

| Элемент     | Назначение         |
| ----------- | ------------------ |
| `.products` | контейнер карточек |
| `.card`     | карточка товара    |
| `.add-btn`  | кнопка добавления  |

HTML карточки товара:

```html
<div class="card" data-id="101">
  <h3>Phone</h3>
  <button class="add-btn">Add to cart</button>
</div>
```

Каждая карточка содержит атрибут:

```
data-id
```

Он хранит **уникальный id товара**.

---

# ✅ Требования

При клике на кнопку **Add to cart**:

1. текст кнопки должен измениться на **Added**
2. кнопка должна получить класс `added`
3. карточка товара должна получить класс `active`
4. в консоль должен выводиться `id` товара из `data-id`

Пример вывода:

```
101
102
103
```

---

# 🎨 Стили

CSS уже содержит стили для добавленного товара:

```css
.card.active {
  border: 2px solid #1677ff;
}

button.added {
  background: #4caf50;
}
```

---

# ⚙️ Ограничения

Попробуйте использовать:

- `querySelectorAll`
- `parentElement`
- `dataset`
- `classList`

---

# 🎯 Цель задания

Практика следующих навыков:

- обработка событий (`click`)
- работа с несколькими элементами DOM
- навигация по DOM (`parentElement`)
- работа с `data-*` атрибутами (`dataset`)
- изменение текста элементов
- управление CSS-классами

---

# ⭐ Дополнительные улучшения (опционально)

Если основная задача решена, можно попробовать улучшить приложение:

- запретить повторное добавление товара
- хранить добавленные товары в массиве
- вывести количество товаров в корзине
- сделать кнопку **Remove from cart**

---

# 💡 Подсказки

<details>
<summary>Получение кнопок</summary>

```javascript
const buttons = document.querySelectorAll(".add-btn");
```

</details>

---

<details>
<summary>Получение карточки товара</summary>

```javascript
const card = button.parentElement;
```

</details>

---

<details>
<summary>Получение id из data-атрибута</summary>

```javascript
const id = card.dataset.id;
```

</details>

---

<details>
<summary>Изменение текста кнопки</summary>

```javascript
button.textContent = "Added";
```

</details>

---

<details>
<summary>Добавление класса</summary>

```javascript
card.classList.add("active");
button.classList.add("added");
```

</details>
