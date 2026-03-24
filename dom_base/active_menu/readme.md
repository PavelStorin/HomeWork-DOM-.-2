# DOM Practice — Active Menu

Небольшая задача для практики **работы с событиями и классами элементов в DOM**.

Цель — реализовать поведение меню: при клике выбранный пункт становится активным.

---

# 📋 Задача

На странице уже есть готовая HTML-разметка меню.

Необходимо реализовать JavaScript-логику, которая позволит:

- выделять выбранный пункт меню
- снимать выделение со всех остальных пунктов

---

# 🧱 Структура страницы

Главные элементы:

| Элемент      | Назначение     |
| ------------ | -------------- |
| `#menu`      | контейнер меню |
| `.menu-item` | пункт меню     |

HTML меню:

```html
<ul class="menu" id="menu">
  <li class="menu-item">Home</li>
  <li class="menu-item">About</li>
  <li class="menu-item">Contacts</li>
</ul>
```

---

# ✅ Требования

При клике на пункт меню:

1. Кликнутый элемент должен получить класс `active`
2. У всех остальных пунктов меню класс `active` должен удалиться

Пример поведения:

```
Home      About      Contacts
```

Клик по **About**

```
Home      [About]      Contacts
```

Клик по **Contacts**

```
Home      About      [Contacts]
```

---

# 🎨 Стили

Активный элемент уже стилизован в CSS:

```css
.menu-item.active {
  background: #1677ff;
  color: white;
}
```

---

# ⚙️ Ограничения

Попробуйте использовать:

- `getElementById`
- `querySelectorAll`
- `classList`
- `forEach`

---

# 🎯 Цель задания

Практика следующих навыков:

- обработка событий (`click`)
- работа с несколькими DOM-элементами
- перебор элементов (`forEach`)
- управление CSS-классами (`classList`)
- понимание текущего элемента события (`event.target`)

---

# ⭐ Дополнительные улучшения (опционально)

Если основная задача решена, можно попробовать улучшить приложение:

- добавить **начальный активный пункт**
- выводить **текст выбранного пункта в console.log**
- сделать **переключение через клавиатуру**

---

# 💡 Подсказки

<details>
<summary>Получение элементов</summary>

```javascript
const menu = document.getElementById("menu");
const items = document.querySelectorAll(".menu-item");
```

</details>

---

<details>
<summary>Добавление обработчика клика</summary>

```javascript
item.addEventListener("click", handleClick);
```

</details>

---

<details>
<summary>Удаление класса у всех элементов</summary>

```javascript
items.forEach((item) => {
  item.classList.remove("active");
});
```

</details>

---

<details>
<summary>Добавление класса</summary>

```javascript
element.classList.add("active");
```

</details>
